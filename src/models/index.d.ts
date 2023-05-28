import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum ProjectType {
  BOOK = "BOOK",
  JOURNAL = "JOURNAL",
  BLOG = "BLOG",
  OTHER = "OTHER"
}

type ProjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SessionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LoginDateMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerProject = {
  readonly id: string;
  readonly name: string;
  readonly projectType: ProjectType | keyof typeof ProjectType;
  readonly sessions?: (Session | null)[] | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProject = {
  readonly id: string;
  readonly name: string;
  readonly projectType: ProjectType | keyof typeof ProjectType;
  readonly sessions: AsyncCollection<Session>;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Project = LazyLoading extends LazyLoadingDisabled ? EagerProject : LazyProject

export declare const Project: (new (init: ModelInit<Project, ProjectMetaData>) => Project) & {
  copyOf(source: Project, mutator: (draft: MutableModel<Project, ProjectMetaData>) => MutableModel<Project, ProjectMetaData> | void): Project;
}

type EagerSession = {
  readonly id: string;
  readonly words: number;
  readonly minutes: number;
  readonly date: string;
  readonly project: Project;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySession = {
  readonly id: string;
  readonly words: number;
  readonly minutes: number;
  readonly date: string;
  readonly project: AsyncItem<Project>;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Session = LazyLoading extends LazyLoadingDisabled ? EagerSession : LazySession

export declare const Session: (new (init: ModelInit<Session, SessionMetaData>) => Session) & {
  copyOf(source: Session, mutator: (draft: MutableModel<Session, SessionMetaData>) => MutableModel<Session, SessionMetaData> | void): Session;
}

type EagerLoginDate = {
  readonly id: string;
  readonly date: string;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLoginDate = {
  readonly id: string;
  readonly date: string;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type LoginDate = LazyLoading extends LazyLoadingDisabled ? EagerLoginDate : LazyLoginDate

export declare const LoginDate: (new (init: ModelInit<LoginDate, LoginDateMetaData>) => LoginDate) & {
  copyOf(source: LoginDate, mutator: (draft: MutableModel<LoginDate, LoginDateMetaData>) => MutableModel<LoginDate, LoginDateMetaData> | void): LoginDate;
}