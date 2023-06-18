import { isToday } from 'date-fns';
import _ from 'lodash';
import { WeeklyTarget } from '../../models';
import { SerializedProject, SerializedSession } from '../../models/serialized';
import { DateStreakSummary } from '../../types/types';
import { AwardProgressSummary } from './awards';

export const earlyBirdProgressHelper = (target: number) => ((
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

export const nightOwlProgressHelper = (target: number) => ((
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

export const overachieverProgressHelper = (targetMultiplier: number) => ((
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

    const current = _(sessions)
      .map(session => ({
        date: new Date(session.date),
        words: session.words,
      }))
      .filter(session => isToday(session.date))
      .sumBy('words');

    const progress = Math.min(current / target, 1);

    return { target, current, progress };
  }
);

export const dailyStreakProgressHelper = (target: number) => ((
    _projects: SerializedProject[],
    _sessions: SerializedSession[],
    loginStreak: DateStreakSummary,
  ): AwardProgressSummary => {
    const current = Math.min(loginStreak.longestStreak, target);
    const progress = Math.min(current / target, 1);

    return { target, current, progress };
  }
);

const awardUtil = {
  earlyBirdProgressHelper,
  nightOwlProgressHelper,
  overachieverProgressHelper,
  dailyStreakProgressHelper,
};

export default awardUtil;
