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

type EagerProject = {
  readonly id: string;
  readonly name: string;
  readonly projectType: ProjectType | keyof typeof ProjectType;
  readonly wordCounts?: (WordCount | null)[] | null;
  readonly TimeSpentWriting?: (TimeWriting | null)[] | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProject = {
  readonly id: string;
  readonly name: string;
  readonly projectType: ProjectType | keyof typeof ProjectType;
  readonly wordCounts: AsyncCollection<WordCount>;
  readonly TimeSpentWriting: AsyncCollection<TimeWriting>;
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
  readonly project?: Project | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWordCount = {
  readonly id: string;
  readonly words: number;
  readonly project: AsyncItem<Project | undefined>;
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
  readonly project?: Project | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTimeWriting = {
  readonly id: string;
  readonly minutes: number;
  readonly project: AsyncItem<Project | undefined>;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TimeWriting = LazyLoading extends LazyLoadingDisabled ? EagerTimeWriting : LazyTimeWriting

export declare const TimeWriting: (new (init: ModelInit<TimeWriting, TimeWritingMetaData>) => TimeWriting) & {
  copyOf(source: TimeWriting, mutator: (draft: MutableModel<TimeWriting, TimeWritingMetaData>) => MutableModel<TimeWriting, TimeWritingMetaData> | void): TimeWriting;
}