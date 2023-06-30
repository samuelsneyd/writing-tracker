import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum ProjectType {
  BOOK = "BOOK",
  JOURNAL = "JOURNAL",
  BLOG = "BLOG",
  OTHER = "OTHER"
}

export enum ProjectStatus {
  IN_PROGRESS = "IN_PROGRESS",
  ON_HOLD = "ON_HOLD",
  COMPLETED = "COMPLETED"
}

export enum AwardCategory {
  DAILY_STREAK = "DAILY_STREAK",
  EARLY_BIRD = "EARLY_BIRD",
  NIGHT_OWL = "NIGHT_OWL",
  OVERACHIEVER = "OVERACHIEVER",
  FINISHER = "FINISHER",
  GENERAL = "GENERAL"
}

export enum AwardType {
  DAILY_STREAK_1 = "DAILY_STREAK_1",
  DAILY_STREAK_2 = "DAILY_STREAK_2",
  DAILY_STREAK_3 = "DAILY_STREAK_3",
  DAILY_STREAK_4 = "DAILY_STREAK_4",
  DAILY_STREAK_5 = "DAILY_STREAK_5",
  DAILY_STREAK_6 = "DAILY_STREAK_6",
  DAILY_STREAK_7 = "DAILY_STREAK_7",
  DAILY_STREAK_8 = "DAILY_STREAK_8",
  EARLY_BIRD_1 = "EARLY_BIRD_1",
  EARLY_BIRD_2 = "EARLY_BIRD_2",
  EARLY_BIRD_3 = "EARLY_BIRD_3",
  EARLY_BIRD_4 = "EARLY_BIRD_4",
  NIGHT_OWL_1 = "NIGHT_OWL_1",
  NIGHT_OWL_2 = "NIGHT_OWL_2",
  NIGHT_OWL_3 = "NIGHT_OWL_3",
  NIGHT_OWL_4 = "NIGHT_OWL_4",
  OVERACHIEVER_1 = "OVERACHIEVER_1",
  OVERACHIEVER_2 = "OVERACHIEVER_2",
  OVERACHIEVER_3 = "OVERACHIEVER_3",
  OVERACHIEVER_4 = "OVERACHIEVER_4",
  FINISHER_1 = "FINISHER_1",
  FINISHER_2 = "FINISHER_2",
  FINISHER_3 = "FINISHER_3",
  FINISHER_4 = "FINISHER_4"
}

type EagerTargetByDay = {
  readonly enabled: boolean;
  readonly words: number;
}

type LazyTargetByDay = {
  readonly enabled: boolean;
  readonly words: number;
}

export declare type TargetByDay = LazyLoading extends LazyLoadingDisabled ? EagerTargetByDay : LazyTargetByDay

export declare const TargetByDay: (new (init: ModelInit<TargetByDay>) => TargetByDay)

type EagerWeeklyTarget = {
  readonly mon: TargetByDay;
  readonly tue: TargetByDay;
  readonly wed: TargetByDay;
  readonly thu: TargetByDay;
  readonly fri: TargetByDay;
  readonly sat: TargetByDay;
  readonly sun: TargetByDay;
}

type LazyWeeklyTarget = {
  readonly mon: TargetByDay;
  readonly tue: TargetByDay;
  readonly wed: TargetByDay;
  readonly thu: TargetByDay;
  readonly fri: TargetByDay;
  readonly sat: TargetByDay;
  readonly sun: TargetByDay;
}

export declare type WeeklyTarget = LazyLoading extends LazyLoadingDisabled ? EagerWeeklyTarget : LazyWeeklyTarget

export declare const WeeklyTarget: (new (init: ModelInit<WeeklyTarget>) => WeeklyTarget)

type ProjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SessionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LoginDateMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AwardMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerProject = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly type: ProjectType | keyof typeof ProjectType;
  readonly status: ProjectStatus | keyof typeof ProjectStatus;
  readonly initialWords: number;
  readonly overallWordTarget: number;
  readonly wordTarget: WeeklyTarget;
  readonly wordsPerPage: number;
  readonly sessions: (Session | null)[];
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProject = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly type: ProjectType | keyof typeof ProjectType;
  readonly status: ProjectStatus | keyof typeof ProjectStatus;
  readonly initialWords: number;
  readonly overallWordTarget: number;
  readonly wordTarget: WeeklyTarget;
  readonly wordsPerPage: number;
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

type EagerAward = {
  readonly id: string;
  readonly category: AwardCategory | keyof typeof AwardCategory;
  readonly type: AwardType | keyof typeof AwardType;
  readonly date: string;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAward = {
  readonly id: string;
  readonly category: AwardCategory | keyof typeof AwardCategory;
  readonly type: AwardType | keyof typeof AwardType;
  readonly date: string;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Award = LazyLoading extends LazyLoadingDisabled ? EagerAward : LazyAward

export declare const Award: (new (init: ModelInit<Award, AwardMetaData>) => Award) & {
  copyOf(source: Award, mutator: (draft: MutableModel<Award, AwardMetaData>) => MutableModel<Award, AwardMetaData> | void): Award;
}