import { IconElement, IconProps } from '@ui-kitten/components';
import { AwardIcon } from '../../components/Icons/Icons';
import { AwardCategory, AwardType } from '../../models';
import { SerializedProject, SerializedSession } from '../../models/serialized';
import { DateStreakSummary } from '../../types/types';
import {
  curriedDailyStreakProgress,
  curriedEarlyBirdProgress,
  curriedFinisherProgress,
  curriedNightOwlProgress,
  curriedOnTheClockProgress,
  curriedOverachieverProgress,
  curriedWriterProgress,
} from './award-utils';

/**
 * A local representation of the Award model with local helper functions.
 */
export type AwardLocal = {
  category: AwardCategory;
  type: AwardType;
  name: string;
  description: string;
  icon: (props: IconProps) => IconElement;
  target: number;
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

const DAILY_STREAK_TARGETS = [1, 3, 7, 14, 30, 90, 180, 365];

export const DAILY_STREAK_1: AwardLocal = {
  category: AwardCategory.DAILY_STREAK,
  type: AwardType.DAILY_STREAK_1,
  name: 'Daily Streak I',
  description: 'Logged in once',
  icon: AwardIcon,
  target: DAILY_STREAK_TARGETS[0],
  getProgress: curriedDailyStreakProgress(DAILY_STREAK_TARGETS[0]),
};

export const DAILY_STREAK_2: AwardLocal = {
  category: AwardCategory.DAILY_STREAK,
  type: AwardType.DAILY_STREAK_2,
  name: 'Daily Streak II',
  description: 'Logged in every day for three days',
  icon: AwardIcon,
  target: DAILY_STREAK_TARGETS[1],
  getProgress: curriedDailyStreakProgress(DAILY_STREAK_TARGETS[1]),
};

export const DAILY_STREAK_3: AwardLocal = {
  category: AwardCategory.DAILY_STREAK,
  type: AwardType.DAILY_STREAK_3,
  name: 'Daily Streak III',
  description: 'Logged in every day for one week',
  icon: AwardIcon,
  target: DAILY_STREAK_TARGETS[2],
  getProgress: curriedDailyStreakProgress(DAILY_STREAK_TARGETS[2]),
};

export const DAILY_STREAK_4: AwardLocal = {
  category: AwardCategory.DAILY_STREAK,
  type: AwardType.DAILY_STREAK_4,
  name: 'Daily Streak IV',
  description: 'Logged in every day for two weeks',
  icon: AwardIcon,
  target: DAILY_STREAK_TARGETS[3],
  getProgress: curriedDailyStreakProgress(DAILY_STREAK_TARGETS[3]),
};

export const DAILY_STREAK_5: AwardLocal = {
  category: AwardCategory.DAILY_STREAK,
  type: AwardType.DAILY_STREAK_5,
  name: 'Daily Streak V',
  description: 'Logged in every day for one month',
  icon: AwardIcon,
  target: DAILY_STREAK_TARGETS[4],
  getProgress: curriedDailyStreakProgress(DAILY_STREAK_TARGETS[4]),
};

export const DAILY_STREAK_6: AwardLocal = {
  category: AwardCategory.DAILY_STREAK,
  type: AwardType.DAILY_STREAK_6,
  name: 'Daily Streak VI',
  description: 'Logged in every day for three months',
  icon: AwardIcon,
  target: DAILY_STREAK_TARGETS[5],
  getProgress: curriedDailyStreakProgress(DAILY_STREAK_TARGETS[5]),
};

export const DAILY_STREAK_7: AwardLocal = {
  category: AwardCategory.DAILY_STREAK,
  type: AwardType.DAILY_STREAK_7,
  name: 'Daily Streak VII',
  description: 'Logged in every day for six months',
  icon: AwardIcon,
  target: DAILY_STREAK_TARGETS[6],
  getProgress: curriedDailyStreakProgress(DAILY_STREAK_TARGETS[6]),
};

export const DAILY_STREAK_8: AwardLocal = {
  category: AwardCategory.DAILY_STREAK,
  type: AwardType.DAILY_STREAK_8,
  name: 'Daily Streak VIII',
  description: 'Logged in every day for one year',
  icon: AwardIcon,
  target: DAILY_STREAK_TARGETS[8],
  getProgress: curriedDailyStreakProgress(DAILY_STREAK_TARGETS[7]),
};

const EARLY_BIRD_TARGETS = [1000, 5000, 10000, 25000];

export const EARLY_BIRD_1: AwardLocal = {
  category: AwardCategory.EARLY_BIRD,
  type: AwardType.EARLY_BIRD_1,
  name: 'Early Bird I',
  description: `Write ${EARLY_BIRD_TARGETS[0].toLocaleString()} words between 4-6 am`,
  icon: AwardIcon,
  target: EARLY_BIRD_TARGETS[0],
  getProgress: curriedEarlyBirdProgress(EARLY_BIRD_TARGETS[0]),
};

export const EARLY_BIRD_2: AwardLocal = {
  category: AwardCategory.EARLY_BIRD,
  type: AwardType.EARLY_BIRD_2,
  name: 'Early Bird II',
  description: `Write ${EARLY_BIRD_TARGETS[1].toLocaleString()} words between 4-6 am`,
  icon: AwardIcon,
  target: EARLY_BIRD_TARGETS[1],
  getProgress: curriedEarlyBirdProgress(EARLY_BIRD_TARGETS[1]),
};

export const EARLY_BIRD_3: AwardLocal = {
  category: AwardCategory.EARLY_BIRD,
  type: AwardType.EARLY_BIRD_3,
  name: 'Early Bird III',
  description: `Write ${EARLY_BIRD_TARGETS[2].toLocaleString()} words between 4-6 am`,
  icon: AwardIcon,
  target: EARLY_BIRD_TARGETS[2],
  getProgress: curriedEarlyBirdProgress(EARLY_BIRD_TARGETS[2]),
};

export const EARLY_BIRD_4: AwardLocal = {
  category: AwardCategory.EARLY_BIRD,
  type: AwardType.EARLY_BIRD_4,
  name: 'Early Bird IV',
  description: `Write ${EARLY_BIRD_TARGETS[3].toLocaleString()} words between 4-6 am`,
  icon: AwardIcon,
  target: EARLY_BIRD_TARGETS[3],
  getProgress: curriedEarlyBirdProgress(EARLY_BIRD_TARGETS[3]),
};

const NIGHT_OWL_TARGETS = [1000, 5000, 10000, 25000];

export const NIGHT_OWL_1: AwardLocal = {
  category: AwardCategory.NIGHT_OWL,
  type: AwardType.NIGHT_OWL_1,
  name: 'Night Owl I',
  description: `Write ${NIGHT_OWL_TARGETS[0].toLocaleString()} words between 12-4 am`,
  icon: AwardIcon,
  target: NIGHT_OWL_TARGETS[0],
  getProgress: curriedNightOwlProgress(NIGHT_OWL_TARGETS[0]),
};

export const NIGHT_OWL_2: AwardLocal = {
  category: AwardCategory.NIGHT_OWL,
  type: AwardType.NIGHT_OWL_2,
  name: 'Night Owl II',
  description: `Write ${NIGHT_OWL_TARGETS[1].toLocaleString()} words between 12-4 am`,
  icon: AwardIcon,
  target: NIGHT_OWL_TARGETS[1],
  getProgress: curriedNightOwlProgress(NIGHT_OWL_TARGETS[1]),
};

export const NIGHT_OWL_3: AwardLocal = {
  category: AwardCategory.NIGHT_OWL,
  type: AwardType.NIGHT_OWL_3,
  name: 'Night Owl III',
  description: `Write ${NIGHT_OWL_TARGETS[2].toLocaleString()} words between 12-4 am`,
  icon: AwardIcon,
  target: NIGHT_OWL_TARGETS[2],
  getProgress: curriedNightOwlProgress(NIGHT_OWL_TARGETS[2]),
};

export const NIGHT_OWL_4: AwardLocal = {
  category: AwardCategory.NIGHT_OWL,
  type: AwardType.NIGHT_OWL_4,
  name: 'Night Owl IV',
  description: `Write ${NIGHT_OWL_TARGETS[3].toLocaleString()} words between 12-4 am`,
  icon: AwardIcon,
  target: NIGHT_OWL_TARGETS[3],
  getProgress: curriedNightOwlProgress(NIGHT_OWL_TARGETS[3]),
};

export const OVERACHIEVER_1: AwardLocal = {
  category: AwardCategory.OVERACHIEVER,
  type: AwardType.OVERACHIEVER_1,
  name: 'Overachiever I',
  description: 'Achieve your daily word goal',
  icon: AwardIcon,
  target: 1,
  getProgress: curriedOverachieverProgress(1),
};

export const OVERACHIEVER_2: AwardLocal = {
  category: AwardCategory.OVERACHIEVER,
  type: AwardType.OVERACHIEVER_2,
  name: 'Overachiever II',
  description: 'Double your daily word goal',
  icon: AwardIcon,
  target: 2,
  getProgress: curriedOverachieverProgress(2),
};

export const OVERACHIEVER_3: AwardLocal = {
  category: AwardCategory.OVERACHIEVER,
  type: AwardType.OVERACHIEVER_3,
  name: 'Overachiever III',
  description: 'Triple your daily word goal',
  icon: AwardIcon,
  target: 3,
  getProgress: curriedOverachieverProgress(3),
};

export const OVERACHIEVER_4: AwardLocal = {
  category: AwardCategory.OVERACHIEVER,
  type: AwardType.OVERACHIEVER_4,
  name: 'Overachiever IV',
  description: 'Quadruple your daily word goal',
  icon: AwardIcon,
  target: 4,
  getProgress: curriedOverachieverProgress(4),
};

const FINISHER_TARGETS = [1, 3, 5, 10];

export const FINISHER_1: AwardLocal = {
  category: AwardCategory.FINISHER,
  type: AwardType.FINISHER_1,
  name: 'Finisher I',
  description: 'Reach your overall word count target for one project',
  icon: AwardIcon,
  target: FINISHER_TARGETS[0],
  getProgress: curriedFinisherProgress(FINISHER_TARGETS[0]),
};

export const FINISHER_2: AwardLocal = {
  category: AwardCategory.FINISHER,
  type: AwardType.FINISHER_2,
  name: 'Finisher II',
  description: 'Reach your overall word count target for three projects',
  icon: AwardIcon,
  target: FINISHER_TARGETS[1],
  getProgress: curriedFinisherProgress(FINISHER_TARGETS[1]),
};

export const FINISHER_3: AwardLocal = {
  category: AwardCategory.FINISHER,
  type: AwardType.FINISHER_3,
  name: 'Finisher III',
  description: 'Reach your overall word count target for five projects',
  icon: AwardIcon,
  target: FINISHER_TARGETS[2],
  getProgress: curriedFinisherProgress(FINISHER_TARGETS[2]),
};

export const FINISHER_4: AwardLocal = {
  category: AwardCategory.FINISHER,
  type: AwardType.FINISHER_4,
  name: 'Finisher IV',
  description: 'Reach your overall word count target for ten projects',
  icon: AwardIcon,
  target: FINISHER_TARGETS[3],
  getProgress: curriedFinisherProgress(FINISHER_TARGETS[3]),
};

const WRITER_TARGETS = [500, 1000, 2000, 5000, 10000, 20000, 50000, 100000];

export const WRITER_1: AwardLocal = {
  category: AwardCategory.WRITER,
  type: AwardType.WRITER_1,
  name: 'Writer I',
  description: `Write ${WRITER_TARGETS[0].toLocaleString()} total words`,
  icon: AwardIcon,
  target: WRITER_TARGETS[0],
  getProgress: curriedWriterProgress(WRITER_TARGETS[0]),
};

export const WRITER_2: AwardLocal = {
  category: AwardCategory.WRITER,
  type: AwardType.WRITER_2,
  name: 'Writer II',
  description: `Write ${WRITER_TARGETS[1].toLocaleString()} total words`,
  icon: AwardIcon,
  target: WRITER_TARGETS[1],
  getProgress: curriedWriterProgress(WRITER_TARGETS[1]),
};

export const WRITER_3: AwardLocal = {
  category: AwardCategory.WRITER,
  type: AwardType.WRITER_3,
  name: 'Writer III',
  description: `Write ${WRITER_TARGETS[2].toLocaleString()} total words`,
  icon: AwardIcon,
  target: WRITER_TARGETS[2],
  getProgress: curriedWriterProgress(WRITER_TARGETS[2]),
};

export const WRITER_4: AwardLocal = {
  category: AwardCategory.WRITER,
  type: AwardType.WRITER_4,
  name: 'Writer IV',
  description: `Write ${WRITER_TARGETS[3].toLocaleString()} total words`,
  icon: AwardIcon,
  target: WRITER_TARGETS[3],
  getProgress: curriedWriterProgress(WRITER_TARGETS[3]),
};

export const WRITER_5: AwardLocal = {
  category: AwardCategory.WRITER,
  type: AwardType.WRITER_5,
  name: 'Writer V',
  description: `Write ${WRITER_TARGETS[4].toLocaleString()} total words`,
  icon: AwardIcon,
  target: WRITER_TARGETS[4],
  getProgress: curriedWriterProgress(WRITER_TARGETS[4]),
};

export const WRITER_6: AwardLocal = {
  category: AwardCategory.WRITER,
  type: AwardType.WRITER_6,
  name: 'Writer VI',
  description: `Write ${WRITER_TARGETS[5].toLocaleString()} total words`,
  icon: AwardIcon,
  target: WRITER_TARGETS[5],
  getProgress: curriedWriterProgress(WRITER_TARGETS[5]),
};

export const WRITER_7: AwardLocal = {
  category: AwardCategory.WRITER,
  type: AwardType.WRITER_7,
  name: 'Writer VII',
  description: `Write ${WRITER_TARGETS[6].toLocaleString()} total words`,
  icon: AwardIcon,
  target: WRITER_TARGETS[6],
  getProgress: curriedWriterProgress(WRITER_TARGETS[6]),
};

export const WRITER_8: AwardLocal = {
  category: AwardCategory.WRITER,
  type: AwardType.WRITER_8,
  name: 'Writer VIII',
  description: `Write ${WRITER_TARGETS[7].toLocaleString()} total words`,
  icon: AwardIcon,
  target: WRITER_TARGETS[7],
  getProgress: curriedWriterProgress(WRITER_TARGETS[7]),
};

const ON_THE_CLOCK_TARGETS = [1, 3, 10, 20, 40, 100, 500, 1000];

export const ON_THE_CLOCK_1: AwardLocal = {
  category: AwardCategory.ON_THE_CLOCK,
  type: AwardType.ON_THE_CLOCK_1,
  name: 'On the Clock I',
  description: `Write for ${ON_THE_CLOCK_TARGETS[0].toLocaleString()} hour`,
  icon: AwardIcon,
  target: ON_THE_CLOCK_TARGETS[0],
  getProgress: curriedOnTheClockProgress(ON_THE_CLOCK_TARGETS[0]),
};

export const ON_THE_CLOCK_2: AwardLocal = {
  category: AwardCategory.ON_THE_CLOCK,
  type: AwardType.ON_THE_CLOCK_2,
  name: 'On the Clock II',
  description: `Write for ${ON_THE_CLOCK_TARGETS[1].toLocaleString()} hours`,
  icon: AwardIcon,
  target: ON_THE_CLOCK_TARGETS[1],
  getProgress: curriedOnTheClockProgress(ON_THE_CLOCK_TARGETS[1]),
};

export const ON_THE_CLOCK_3: AwardLocal = {
  category: AwardCategory.ON_THE_CLOCK,
  type: AwardType.ON_THE_CLOCK_3,
  name: 'On the Clock III',
  description: `Write for ${ON_THE_CLOCK_TARGETS[2].toLocaleString()} hours`,
  icon: AwardIcon,
  target: ON_THE_CLOCK_TARGETS[2],
  getProgress: curriedOnTheClockProgress(ON_THE_CLOCK_TARGETS[2]),
};

export const ON_THE_CLOCK_4: AwardLocal = {
  category: AwardCategory.ON_THE_CLOCK,
  type: AwardType.ON_THE_CLOCK_4,
  name: 'On the Clock IV',
  description: `Write for ${ON_THE_CLOCK_TARGETS[3].toLocaleString()} hours`,
  icon: AwardIcon,
  target: ON_THE_CLOCK_TARGETS[3],
  getProgress: curriedOnTheClockProgress(ON_THE_CLOCK_TARGETS[3]),
};

export const ON_THE_CLOCK_5: AwardLocal = {
  category: AwardCategory.ON_THE_CLOCK,
  type: AwardType.ON_THE_CLOCK_5,
  name: 'On the Clock V',
  description: `Write for ${ON_THE_CLOCK_TARGETS[4].toLocaleString()} hours`,
  icon: AwardIcon,
  target: ON_THE_CLOCK_TARGETS[4],
  getProgress: curriedOnTheClockProgress(ON_THE_CLOCK_TARGETS[4]),
};

export const ON_THE_CLOCK_6: AwardLocal = {
  category: AwardCategory.ON_THE_CLOCK,
  type: AwardType.ON_THE_CLOCK_6,
  name: 'On the Clock VI',
  description: `Write for ${ON_THE_CLOCK_TARGETS[5].toLocaleString()} hours`,
  icon: AwardIcon,
  target: ON_THE_CLOCK_TARGETS[5],
  getProgress: curriedOnTheClockProgress(ON_THE_CLOCK_TARGETS[5]),
};

export const ON_THE_CLOCK_7: AwardLocal = {
  category: AwardCategory.ON_THE_CLOCK,
  type: AwardType.ON_THE_CLOCK_7,
  name: 'On the Clock VII',
  description: `Write for ${ON_THE_CLOCK_TARGETS[6].toLocaleString()} hours`,
  icon: AwardIcon,
  target: ON_THE_CLOCK_TARGETS[6],
  getProgress: curriedOnTheClockProgress(ON_THE_CLOCK_TARGETS[6]),
};

export const ON_THE_CLOCK_8: AwardLocal = {
  category: AwardCategory.ON_THE_CLOCK,
  type: AwardType.ON_THE_CLOCK_8,
  name: 'On the Clock VIII',
  description: `Write for ${ON_THE_CLOCK_TARGETS[7].toLocaleString()} hours`,
  icon: AwardIcon,
  target: ON_THE_CLOCK_TARGETS[7],
  getProgress: curriedOnTheClockProgress(ON_THE_CLOCK_TARGETS[7]),
};

export type AwardMap = {
  [key in AwardType]: AwardLocal;
};

export const awardMap: AwardMap = {
  DAILY_STREAK_1,
  DAILY_STREAK_2,
  DAILY_STREAK_3,
  DAILY_STREAK_4,
  DAILY_STREAK_5,
  DAILY_STREAK_6,
  DAILY_STREAK_7,
  DAILY_STREAK_8,
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
  FINISHER_1,
  FINISHER_2,
  FINISHER_3,
  FINISHER_4,
  WRITER_1,
  WRITER_2,
  WRITER_3,
  WRITER_4,
  WRITER_5,
  WRITER_6,
  WRITER_7,
  WRITER_8,
  ON_THE_CLOCK_1,
  ON_THE_CLOCK_2,
  ON_THE_CLOCK_3,
  ON_THE_CLOCK_4,
  ON_THE_CLOCK_5,
  ON_THE_CLOCK_6,
  ON_THE_CLOCK_7,
  ON_THE_CLOCK_8,
};

export const localAwards: AwardLocal[] = Object.values(awardMap);
