import _ from 'lodash';
import { IconElement, IconProps } from '@ui-kitten/components';
import { AwardIcon } from '../../components/Icons/Icons';
import { SerializedProject, SerializedSession } from '../../models/serialized';
import { DateStreakSummary } from '../../types/types';

export enum AwardEnum {
  NIGHT_OWL = 'NIGHT_OWL',
  EARLY_BIRD = 'EARLY_BIRD',
  OVERACHIEVER = 'OVERACHIEVER',
  DAILY_STREAK_1 = 'DAILY_STREAK_1',
  DAILY_STREAK_2 = 'DAILY_STREAK_2',
  DAILY_STREAK_3 = 'DAILY_STREAK_3',
  DAILY_STREAK_4 = 'DAILY_STREAK_4',
  DAILY_STREAK_5 = 'DAILY_STREAK_5',
  DAILY_STREAK_6 = 'DAILY_STREAK_6',
  DAILY_STREAK_7 = 'DAILY_STREAK_7',
  DAILY_STREAK_8 = 'DAILY_STREAK_8',
}

export type Award = {
  id: AwardEnum;
  name: string;
  description: string;
  icon: (props: IconProps) => IconElement;
  isEligible: (
    projects: SerializedProject[],
    sessions: SerializedSession[],
    loginStreak: DateStreakSummary | undefined,
  ) => boolean;
};

export type AwardMap = {
  [key in AwardEnum]: Award;
};

export const awards: AwardMap = {
  NIGHT_OWL: {
    id: AwardEnum.NIGHT_OWL,
    name: 'Night Owl',
    description: 'Write 1000 words between 12-4 am',
    icon: AwardIcon,
    isEligible: (_projects, sessions) => {
      const wordTarget = 1000;
      const upperHourLimit = 4;

      const words = _(sessions)
        .map(session => ({
          date: new Date(session.date),
          words: session.words,
        }))
        .filter(session => session.date.getHours() < upperHourLimit)
        .sumBy('words');

      return words >= wordTarget;
    },
  },

  EARLY_BIRD: {
    id: AwardEnum.EARLY_BIRD,
    name: 'Early Bird',
    description: 'Write 1000 words between 4-6 am',
    icon: AwardIcon,
    isEligible: (_projects, sessions) => {
      const wordTarget = 1000;
      const lowerHourLimit = 4;
      const upperHourLimit = 6;

      const words = _(sessions)
        .map(session => ({
          date: new Date(session.date),
          words: session.words,
        }))
        .filter(session => {
          const hours = session.date.getHours();
          return hours >= lowerHourLimit && hours < upperHourLimit;
        })
        .sumBy('words');

      return words >= wordTarget;
    },
  },

  OVERACHIEVER: {
    id: AwardEnum.OVERACHIEVER,
    name: 'Overachiever',
    description: 'Double your daily word goal',
    icon: AwardIcon,
    isEligible: () => false,
  },

  DAILY_STREAK_1: {
    id: AwardEnum.DAILY_STREAK_1,
    name: 'Daily Streak I',
    description: 'Logged in once',
    icon: AwardIcon,
    isEligible: () => true,
  },

  DAILY_STREAK_2: {
    id: AwardEnum.DAILY_STREAK_2,
    name: 'Daily Streak II',
    description: 'Logged in every day for three days',
    icon: AwardIcon,
    isEligible: (_projects, _sessions, loginStreak) =>
      !!loginStreak && loginStreak.longestStreak >= 7,
  },

  DAILY_STREAK_3: {
    id: AwardEnum.DAILY_STREAK_3,
    name: 'Daily Streak III',
    description: 'Logged in every day for one week',
    icon: AwardIcon,
    isEligible: (_projects, _sessions, loginStreak) =>
      !!loginStreak && loginStreak.longestStreak >= 7,
  },

  DAILY_STREAK_4: {
    id: AwardEnum.DAILY_STREAK_4,
    name: 'Daily Streak IV',
    description: 'Logged in every day for two weeks',
    icon: AwardIcon,
    isEligible: (_projects, _sessions, loginStreak) =>
      !!loginStreak && loginStreak.longestStreak >= 14,
  },

  DAILY_STREAK_5: {
    id: AwardEnum.DAILY_STREAK_5,
    name: 'Daily Streak V',
    description: 'Logged in every day for one month',
    icon: AwardIcon,
    isEligible: (_projects, _sessions, loginStreak) =>
      !!loginStreak && loginStreak.longestStreak >= 30,
  },

  DAILY_STREAK_6: {
    id: AwardEnum.DAILY_STREAK_6,
    name: 'Daily Streak VI',
    description: 'Logged in every day for three months',
    icon: AwardIcon,
    isEligible: (_projects, _sessions, loginStreak) =>
      !!loginStreak && loginStreak.longestStreak >= 90,
  },

  DAILY_STREAK_7: {
    id: AwardEnum.DAILY_STREAK_7,
    name: 'Daily Streak VII',
    description: 'Logged in every day for six months',
    icon: AwardIcon,
    isEligible: (_projects, _sessions, loginStreak) =>
      !!loginStreak && loginStreak.longestStreak >= 180,
  },

  DAILY_STREAK_8: {
    id: AwardEnum.DAILY_STREAK_8,
    name: 'Daily Streak VIII',
    description: 'Logged in every day for one year',
    icon: AwardIcon,
    isEligible: (_projects, _sessions, loginStreak) =>
      !!loginStreak && loginStreak.longestStreak >= 365,
  },
};
