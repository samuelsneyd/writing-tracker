// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ProjectType = {
  "BOOK": "BOOK",
  "JOURNAL": "JOURNAL",
  "BLOG": "BLOG",
  "OTHER": "OTHER"
};

const ProjectStatus = {
  "IN_PROGRESS": "IN_PROGRESS",
  "ON_HOLD": "ON_HOLD",
  "COMPLETED": "COMPLETED"
};

const AwardType = {
  "EARLY_BIRD_1": "EARLY_BIRD_1",
  "EARLY_BIRD_2": "EARLY_BIRD_2",
  "EARLY_BIRD_3": "EARLY_BIRD_3",
  "EARLY_BIRD_4": "EARLY_BIRD_4",
  "NIGHT_OWL_1": "NIGHT_OWL_1",
  "NIGHT_OWL_2": "NIGHT_OWL_2",
  "NIGHT_OWL_3": "NIGHT_OWL_3",
  "NIGHT_OWL_4": "NIGHT_OWL_4",
  "OVERACHIEVER_1": "OVERACHIEVER_1",
  "OVERACHIEVER_2": "OVERACHIEVER_2",
  "OVERACHIEVER_3": "OVERACHIEVER_3",
  "OVERACHIEVER_4": "OVERACHIEVER_4",
  "DAILY_STREAK_1": "DAILY_STREAK_1",
  "DAILY_STREAK_2": "DAILY_STREAK_2",
  "DAILY_STREAK_3": "DAILY_STREAK_3",
  "DAILY_STREAK_4": "DAILY_STREAK_4",
  "DAILY_STREAK_5": "DAILY_STREAK_5",
  "DAILY_STREAK_6": "DAILY_STREAK_6",
  "DAILY_STREAK_7": "DAILY_STREAK_7",
  "DAILY_STREAK_8": "DAILY_STREAK_8",
  "FINISHER_1": "FINISHER_1",
  "FINISHER_2": "FINISHER_2",
  "FINISHER_3": "FINISHER_3",
  "FINISHER_4": "FINISHER_4"
};

const { Project, Session, LoginDate, Award, TargetByDay, WeeklyTarget } = initSchema(schema);

export {
  Project,
  Session,
  LoginDate,
  Award,
  ProjectType,
  ProjectStatus,
  AwardType,
  TargetByDay,
  WeeklyTarget
};