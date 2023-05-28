// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ProjectType = {
  "BOOK": "BOOK",
  "JOURNAL": "JOURNAL",
  "BLOG": "BLOG",
  "OTHER": "OTHER"
};

const { Project, Session, LoginDate } = initSchema(schema);

export {
  Project,
  Session,
  LoginDate,
  ProjectType
};