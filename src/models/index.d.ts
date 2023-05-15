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

type WordCountMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TimeWritingMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LoginDateMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerProject = {
  readonly id: string;
  readonly name: string;
  readonly projectType: ProjectType | keyof typeof ProjectType;
  readonly wordCounts?: (WordCount | null)[] | null;
  readonly writingTimes?: (TimeWriting | null)[] | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProject = {
  readonly id: string;
  readonly name: string;
  readonly projectType: ProjectType | keyof typeof ProjectType;
  readonly wordCounts: AsyncCollection<WordCount>;
  readonly writingTimes: AsyncCollection<TimeWriting>;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Project = LazyLoading extends LazyLoadingDisabled ? EagerProject : LazyProject

export declare const Project: (new (init: ModelInit<Project, ProjectMetaData>) => Project) & {
  copyOf(source: Project, mutator: (draft: MutableModel<Project, ProjectMetaData>) => MutableModel<Project, ProjectMetaData> | void): Project;
}

type EagerWordCount = {
  readonly id: string;
  readonly words: number;
  readonly date: string;
  readonly project: Project;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWordCount = {
  readonly id: string;
  readonly words: number;
  readonly date: string;
  readonly project: AsyncItem<Project>;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type WordCount = LazyLoading extends LazyLoadingDisabled ? EagerWordCount : LazyWordCount

export declare const WordCount: (new (init: ModelInit<WordCount, WordCountMetaData>) => WordCount) & {
  copyOf(source: WordCount, mutator: (draft: MutableModel<WordCount, WordCountMetaData>) => MutableModel<WordCount, WordCountMetaData> | void): WordCount;
}

type EagerTimeWriting = {
  readonly id: string;
  readonly minutes: number;
  readonly date: string;
  readonly project: Project;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTimeWriting = {
  readonly id: string;
  readonly minutes: number;
  readonly date: string;
  readonly project: AsyncItem<Project>;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TimeWriting = LazyLoading extends LazyLoadingDisabled ? EagerTimeWriting : LazyTimeWriting

export declare const TimeWriting: (new (init: ModelInit<TimeWriting, TimeWritingMetaData>) => TimeWriting) & {
  copyOf(source: TimeWriting, mutator: (draft: MutableModel<TimeWriting, TimeWritingMetaData>) => MutableModel<TimeWriting, TimeWritingMetaData> | void): TimeWriting;
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