import { IconElement, IconProps } from '@ui-kitten/components';
import { AwardIcon } from '../../components/Icons/Icons';
import { AwardType } from '../../models';
import { SerializedProject, SerializedSession } from '../../models/serialized';
import { DateStreakSummary } from '../../types/types';
import {
  curriedDailyStreakProgress,
  curriedEarlyBirdProgress,
  curriedNightOwlProgress,
  curriedOverachieverProgress,
} from './award-utils';

/**
 * A local representation of the Award model with local helper functions.
 */
export type AwardLocal = {
  type: AwardType;
  name: string;
  description: string;
  icon: (props: IconProps) => IconElement;
  getProgress: (
    projects: SerializedProject[],
    sessions: SerializedSession[],
    loginStreak: DateStreakSummary,
  ) => AwardProgressSummary;
};

export type AwardProgressSummary = {
  target: number;
  current: number;
  progress: number; // Range (0-1)
};

export const NIGHT_OWL_1: AwardLocal = {
  type: AwardType.NIGHT_OWL_1,
  name: 'Night Owl I',
  description: 'Write 1000 words between 12-4 am',
  icon: AwardIcon,
  getProgress: curriedNightOwlProgress(1000),
};

export const NIGHT_OWL_2: AwardLocal = {
  type: AwardType.NIGHT_OWL_2,
  name: 'Night Owl II',
  description: 'Write 5000 words between 12-4 am',
  icon: AwardIcon,
  getProgress: curriedNightOwlProgress(5000),
};

export const NIGHT_OWL_3: AwardLocal = {
  type: AwardType.NIGHT_OWL_3,
  name: 'Night Owl III',
  description: 'Write 10000 words between 12-4 am',
  icon: AwardIcon,
  getProgress: curriedNightOwlProgress(10000),
};

export const NIGHT_OWL_4: AwardLocal = {
  type: AwardType.NIGHT_OWL_4,
  name: 'Night Owl IV',
  description: 'Write 25000 words between 12-4 am',
  icon: AwardIcon,
  getProgress: curriedNightOwlProgress(25000),
};

export const EARLY_BIRD_1: AwardLocal = {
  type: AwardType.EARLY_BIRD_1,
  name: 'Early Bird I',
  description: 'Write 1000 words between 4-6 am',
  icon: AwardIcon,
  getProgress: curriedEarlyBirdProgress(1000),
};

export const EARLY_BIRD_2: AwardLocal = {
  type: AwardType.EARLY_BIRD_2,
  name: 'Early Bird II',
  description: 'Write 5000 words between 4-6 am',
  icon: AwardIcon,
  getProgress: curriedEarlyBirdProgress(5000),
};

export const EARLY_BIRD_3: AwardLocal = {
  type: AwardType.EARLY_BIRD_3,
  name: 'Early Bird III',
  description: 'Write 10000 words between 4-6 am',
  icon: AwardIcon,
  getProgress: curriedEarlyBirdProgress(10000),
};

export const EARLY_BIRD_4: AwardLocal = {
  type: AwardType.EARLY_BIRD_4,
  name: 'Early Bird IV',
  description: 'Write 25000 words between 4-6 am',
  icon: AwardIcon,
  getProgress: curriedEarlyBirdProgress(25000),
};

export const OVERACHIEVER_1: AwardLocal = {
  type: AwardType.OVERACHIEVER_1,
  name: 'Overachiever I',
  description: 'Achieve your daily word goal',
  icon: AwardIcon,
  getProgress: curriedOverachieverProgress(1),
};

export const OVERACHIEVER_2: AwardLocal = {
  type: AwardType.OVERACHIEVER_2,
  name: 'Overachiever II',
  description: 'Double your daily word goal',
  icon: AwardIcon,
  getProgress: curriedOverachieverProgress(2),
};

export const OVERACHIEVER_3: AwardLocal = {
  type: AwardType.OVERACHIEVER_3,
  name: 'Overachiever III',
  description: 'Triple your daily word goal',
  icon: AwardIcon,
  getProgress: curriedOverachieverProgress(3),
};

export const OVERACHIEVER_4: AwardLocal = {
  type: AwardType.OVERACHIEVER_4,
  name: 'Overachiever IV',
  description: 'Quadruple your daily word goal',
  icon: AwardIcon,
  getProgress: curriedOverachieverProgress(4),
};

export const DAILY_STREAK_1: AwardLocal = {
  type: AwardType.DAILY_STREAK_1,
  name: 'Daily Streak I',
  description: 'Logged in once',
  icon: AwardIcon,
  getProgress: curriedDailyStreakProgress(1),
};

export const DAILY_STREAK_2: AwardLocal = {
  type: AwardType.DAILY_STREAK_2,
  name: 'Daily Streak II',
  description: 'Logged in every day for three days',
  icon: AwardIcon,
  getProgress: curriedDailyStreakProgress(3),
};

export const DAILY_STREAK_3: AwardLocal = {
  type: AwardType.DAILY_STREAK_3,
  name: 'Daily Streak III',
  description: 'Logged in every day for one week',
  icon: AwardIcon,
  getProgress: curriedDailyStreakProgress(7),
};

export const DAILY_STREAK_4: AwardLocal = {
  type: AwardType.DAILY_STREAK_4,
  name: 'Daily Streak IV',
  description: 'Logged in every day for two weeks',
  icon: AwardIcon,
  getProgress: curriedDailyStreakProgress(14),
};

export const DAILY_STREAK_5: AwardLocal = {
  type: AwardType.DAILY_STREAK_5,
  name: 'Daily Streak V',
  description: 'Logged in every day for one month',
  icon: AwardIcon,
  getProgress: curriedDailyStreakProgress(30),
};

export const DAILY_STREAK_6: AwardLocal = {
  type: AwardType.DAILY_STREAK_6,
  name: 'Daily Streak VI',
  description: 'Logged in every day for three months',
  icon: AwardIcon,
  getProgress: curriedDailyStreakProgress(90),
};

export const DAILY_STREAK_7: AwardLocal = {
  type: AwardType.DAILY_STREAK_7,
  name: 'Daily Streak VII',
  description: 'Logged in every day for six months',
  icon: AwardIcon,
  getProgress: curriedDailyStreakProgress(180),
};

export const DAILY_STREAK_8: AwardLocal = {
  type: AwardType.DAILY_STREAK_8,
  name: 'Daily Streak VIII',
  description: 'Logged in every day for one year',
  icon: AwardIcon,
  getProgress: curriedDailyStreakProgress(365),
};

export type AwardMap = {
  [key in AwardType]: AwardLocal;
};

export const awardMap: AwardMap = {
  EARLY_BIRD_1,
  EARLY_BIRD_2,
  EARLY_BIRD_3,
  EARLY_BIRD_4,
  NIGHT_OWL_1,
  NIGHT_OWL_2,
  NIGHT_OWL_3,
  NIGHT_OWL_4,
  OVERACHIEVER_1,
  OVERACHIEVER_2,
  OVERACHIEVER_3,
  OVERACHIEVER_4,
  DAILY_STREAK_1,
  DAILY_STREAK_2,
  DAILY_STREAK_3,
  DAILY_STREAK_4,
  DAILY_STREAK_5,
  DAILY_STREAK_6,
  DAILY_STREAK_7,
  DAILY_STREAK_8,
};

export const awardArray: AwardLocal[] = Object.values(awardMap);
