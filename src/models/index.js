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

const { Project, Session, LoginDate, TargetByDay, WeeklyTarget } = initSchema(schema);

export {
  Project,
  Session,
  LoginDate,
  ProjectType,
  ProjectStatus,
  TargetByDay,
  WeeklyTarget
};