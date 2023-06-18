import * as React from 'react';
import { useAppSelector } from '../../store/hooks';
import { awardMap, AwardMap } from './awards';

export type AwardSummary = {
  allAwards: AwardMap;
  eligibleAwards: AwardMap;
  ineligibleAwards: AwardMap;
};

const useAwards = () => {
  const reduxProjects = useAppSelector(state => state.projects);
  const reduxSessions = useAppSelector(state => state.sessions);
  const [availableAwards, setAvailableAwards] = React.useState<AwardMap>();

  React.useEffect(() => {
    setAvailableAwards(awardMap);
  }, [reduxProjects, reduxSessions]);

  return availableAwards;
};

export default useAwards;
