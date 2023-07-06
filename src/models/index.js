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

const AwardCategory = {
  "DAILY_STREAK": "DAILY_STREAK",
  "EARLY_BIRD": "EARLY_BIRD",
  "NIGHT_OWL": "NIGHT_OWL",
  "OVERACHIEVER": "OVERACHIEVER",
  "FINISHER": "FINISHER",
  "GENERAL": "GENERAL",
  "WRITER": "WRITER"
};

const AwardType = {
  "DAILY_STREAK_1": "DAILY_STREAK_1",
  "DAILY_STREAK_2": "DAILY_STREAK_2",
  "DAILY_STREAK_3": "DAILY_STREAK_3",
  "DAILY_STREAK_4": "DAILY_STREAK_4",
  "DAILY_STREAK_5": "DAILY_STREAK_5",
  "DAILY_STREAK_6": "DAILY_STREAK_6",
  "DAILY_STREAK_7": "DAILY_STREAK_7",
  "DAILY_STREAK_8": "DAILY_STREAK_8",
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
  "FINISHER_1": "FINISHER_1",
  "FINISHER_2": "FINISHER_2",
  "FINISHER_3": "FINISHER_3",
  "FINISHER_4": "FINISHER_4",
  "WRITER_1": "WRITER_1",
  "WRITER_2": "WRITER_2",
  "WRITER_3": "WRITER_3",
  "WRITER_4": "WRITER_4",
  "WRITER_5": "WRITER_5",
  "WRITER_6": "WRITER_6",
  "WRITER_7": "WRITER_7",
  "WRITER_8": "WRITER_8"
};

const { Project, Session, LoginDate, Award, TargetByDay, WeeklyTarget } = initSchema(schema);

export {
  Project,
  Session,
  LoginDate,
  Award,
  ProjectType,
  ProjectStatus,
  AwardCategory,
  AwardType,
  TargetByDay,
  WeeklyTarget
};