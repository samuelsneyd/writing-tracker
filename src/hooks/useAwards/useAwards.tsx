import * as React from 'react';
import _ from 'lodash';
import { serializeModel } from '@aws-amplify/datastore/ssr';
import { DataStore } from 'aws-amplify';
import { Award } from '../../models';
import { SerializedAward } from '../../models/serialized';
import { awardsSet } from '../../store/awards/awardsSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { localAwards, AwardLocal, AwardProgressSummary } from './awards';
import useLoginStreak from '../useLoginStreak/useLoginStreak';

/**
 * Represents a serialized award from the datastore and stored in redux
 * merged with the local award with utility functions and hydrated data.
 *
 * Only previously completed awards are persisted in the datastore/redux.
 */
export type MergedAward = AwardLocal & Partial<SerializedAward> & {
  progressSummary: AwardProgressSummary;
  isCompleted: boolean;
};

const useAwards = () => {
  const dispatch = useAppDispatch();
  const loginStreak = useLoginStreak({});
  const reduxAwards = useAppSelector(state => state.awards);
  const reduxProjects = useAppSelector(state => state.projects);
  const reduxSessions = useAppSelector(state => state.sessions);
  const [awards, setAwards] = React.useState<MergedAward[]>([]);

  React.useEffect(() => {
    // Join local and redux awards from datastore on type
    const mergedAwards = _(localAwards)
      .keyBy('type')
      .merge(_.keyBy(reduxAwards, 'type'))
      .values()
      .map((award) => {
        // If already achieved, short-circuit getProgress() and return complete
        return award.date
          ? {
            ...award,
            getProgress: () => ({
              target: award.target,
              current: award.target,
              progress: 1,
            }),
          }
          : award;
      })
      .map(award => ({
        ...award,
        progressSummary: award.getProgress(reduxProjects, reduxSessions, loginStreak),
      }))
      .map((award): MergedAward => ({
        ...award,
        isCompleted: award.progressSummary.progress === 1,
      }))
      .sortBy(['category', 'type'])
      .value();

    setAwards(mergedAwards);

  }, [reduxProjects, reduxSessions, loginStreak]);

  React.useEffect(() => {
    const updateAwards = async () => {
      const savedAwards = await DataStore.query(Award);
      await Promise.all(awards.map(award => {
        if (
          award.isCompleted
          && (!award.date || !award.id)
          && !savedAwards.find(saved => saved.type === award.type)
        ) {
          return DataStore.save(
            new Award({
              category: award.category,
              type: award.type,
              date: new Date().toISOString(),
            }),
          );
        }
      }));
    };

    const fetchAwards = async () => {
      try {
        const foundAwards = await DataStore.query(Award);
        dispatch(awardsSet(serializeModel(foundAwards) as unknown as SerializedAward[]));
      } catch (e) {
        console.log('Error retrieving awards', e);
        dispatch(awardsSet([]));
      }
    };

    updateAwards().then(fetchAwards);
  }, [awards]);

  return awards;
};

export default useAwards;
