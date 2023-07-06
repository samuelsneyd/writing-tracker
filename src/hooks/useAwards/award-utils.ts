import _ from 'lodash';
import { isToday } from 'date-fns';
import { WeeklyTarget } from '../../models';
import { SerializedProject, SerializedSession } from '../../models/serialized';
import { DateStreakSummary } from '../../types/types';
import { AwardProgressSummary } from './awards';

/**
 * Gets stepped colors based on the progress.
 * >= 100%: success.
 * 75-100%: primary.
 * 50-75%: info.
 * 25-50%: warning.
 * > 0-25%: danger.
 * <= 0: basic
 * No value: basic.
 * @param progress the progress from 0-1
 */
export const getSteppedColors = (progress: number): 'basic' | 'primary' | 'success' | 'info' | 'warning' | 'danger' => {
  if (isNaN(progress) || progress === undefined || progress === null) {
    return 'basic';
  } else if (progress >= 1) {
    return 'success';
  } else if (progress >= 0.75) {
    return 'primary';
  } else if (progress >= 0.5) {
    return 'info';
  } else if (progress >= 0.25) {
    return 'warning';
  } else if (progress > 0) {
    return 'danger';
  } else {
    return 'basic';
  }
};

export const curriedEarlyBirdProgress = (target: number) => ((
    _projects: SerializedProject[],
    sessions: SerializedSession[],
    _loginStreak: DateStreakSummary,
  ): AwardProgressSummary => {
    const lowerHourLimit = 4;
    const upperHourLimit = 6;

    const current = _(sessions)
      .map(session => ({
        date: new Date(session.date),
        words: session.words,
      }))
      .filter(session => {
        const hours = session.date.getHours();
        return hours >= lowerHourLimit && hours < upperHourLimit;
      })
      .sumBy('words');

    const progress = Math.min(current / target, 1);

    return { target, current, progress };
  }
);

export const curriedNightOwlProgress = (target: number) => ((
    _projects: SerializedProject[],
    sessions: SerializedSession[],
    _loginStreak: DateStreakSummary,
  ): AwardProgressSummary => {
    const upperHourLimit = 4;

    const current = _(sessions)
      .map(session => ({
        date: new Date(session.date),
        words: session.words,
      }))
      .filter(session => session.date.getHours() < upperHourLimit)
      .sumBy('words');

    const progress = Math.min(current / target, 1);

    return { target, current, progress };
  }
);

export const curriedOverachieverProgress = (targetMultiplier: number) => ((
    projects: SerializedProject[],
    sessions: SerializedSession[],
    _loginStreak: DateStreakSummary,
  ): AwardProgressSummary => {
    const daysOfWeekArray = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
    const dayOfWeek = daysOfWeekArray[(new Date().getDay() + 6) % 7] as keyof WeeklyTarget;

    const target = _(projects)
      .filter(project => project.wordTarget[dayOfWeek].enabled)
      .map(project => ({
        todayTarget: project.wordTarget[dayOfWeek].words,
      }))
      .sumBy('todayTarget') * targetMultiplier;

    const current = Math.min(
      _(sessions)
        .map(session => ({
          date: new Date(session.date),
          words: session.words,
        }))
        .filter(session => isToday(session.date))
        .sumBy('words'),
      target,
    );

    const progress = target !== 0 && !isNaN(target)
      ? Math.min(current / target, 1)
      : 0;

    return { target, current, progress };
  }
);

export const curriedDailyStreakProgress = (target: number) => ((
    _projects: SerializedProject[],
    _sessions: SerializedSession[],
    loginStreak: DateStreakSummary,
  ): AwardProgressSummary => {
    const current = Math.min(loginStreak.longestStreak, target);
    const progress = Math.min(current / target, 1);

    return { target, current, progress };
  }
);

export const curriedFinisherProgress = (target: number) => ((
    projects: SerializedProject[],
    sessions: SerializedSession[],
    _loginStreak: DateStreakSummary,
  ): AwardProgressSummary => {
    const groupedSessions = _.groupBy(sessions, 'projectSessionsId');

    const current = Math.min(
      _(projects)
        .mapValues(project => ({
          ...project,
          sessions: groupedSessions[project.id] ?? [],
        }))
        .map(item => ({
          value: Math.min(
            (_.sumBy(item.sessions, 'words') + item.initialWords) / item.overallWordTarget,
            1,
          ),
        }))
        .filter(item => item.value === 1)
        .value()
        .length,
      target,
    );

    const progress = target !== 0 && !isNaN(target)
      ? Math.min(current / target, 1)
      : 0;

    return { target, current, progress };
  }
);

export const curriedWriterProgress = (target: number) => (
  projects: SerializedProject[],
  sessions: SerializedSession[],
  _loginStreak: DateStreakSummary,
): AwardProgressSummary => {

  const current = Math.min(
    _(projects).sumBy('initialWords') + _(sessions).sumBy('words'),
    target,
  );

  const progress = Math.min(current / target, 1);

  return { target, current, progress };
};

const awardUtil = {
  curriedEarlyBirdProgress,
  curriedNightOwlProgress,
  curriedOverachieverProgress,
  curriedDailyStreakProgress,
  curriedFinisherProgress,
  curriedWriterProgress,
};

export default awardUtil;
