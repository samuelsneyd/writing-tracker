import { ProjectStatus, ProjectType, WeeklyTarget } from '../types/API';

/**
 * Type when serializing a Project via serializeModel(project).
 * Type must be updated manually after any schema changes.
 */
export type SerializedProject = {
  id: string;
  title: string;
  description: string;
  type: ProjectType;
  status: ProjectStatus;
  initialWords: number;
  overallWordTarget: number;
  wordTarget: WeeklyTarget;
  wordsPerPage: number;
  owner?: string | null;
  updatedAt?: string | null;
  createdAt?: string | null;
  _deleted?: boolean | null;
  _lastChangedAt?: number | null;
  _version?: number | null;
};

/**
 * Type when serializing a Session via serializeModel(session).
 * Type must be updated manually after any schema changes.
 */
export type SerializedSession = {
  id: string;
  date: string;
  minutes: number;
  words: number;
  projectSessionsId: string;
  owner: string | null;
  updatedAt?: string | null;
  createdAt?: string | null;
  _deleted?: boolean | null;
  _lastChangedAt?: number | null;
  _version?: number | null;
};
