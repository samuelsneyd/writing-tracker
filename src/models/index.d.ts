import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

type BookMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type WordCountMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TimeWritingMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerBook = {
  readonly id: string;
  readonly name: string;
  readonly wordCounts?: (WordCount | null)[] | null;
  readonly TimeSpentWriting?: (TimeWriting | null)[] | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBook = {
  readonly id: string;
  readonly name: string;
  readonly wordCounts: AsyncCollection<WordCount>;
  readonly TimeSpentWriting: AsyncCollection<TimeWriting>;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Book = LazyLoading extends LazyLoadingDisabled ? EagerBook : LazyBook

export declare const Book: (new (init: ModelInit<Book, BookMetaData>) => Book) & {
  copyOf(source: Book, mutator: (draft: MutableModel<Book, BookMetaData>) => MutableModel<Book, BookMetaData> | void): Book;
}

type EagerWordCount = {
  readonly id: string;
  readonly words: number;
  readonly book?: Book | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWordCount = {
  readonly id: string;
  readonly words: number;
  readonly book: AsyncItem<Book | undefined>;
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
  readonly book?: Book | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTimeWriting = {
  readonly id: string;
  readonly minutes: number;
  readonly book: AsyncItem<Book | undefined>;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TimeWriting = LazyLoading extends LazyLoadingDisabled ? EagerTimeWriting : LazyTimeWriting

export declare const TimeWriting: (new (init: ModelInit<TimeWriting, TimeWritingMetaData>) => TimeWriting) & {
  copyOf(source: TimeWriting, mutator: (draft: MutableModel<TimeWriting, TimeWritingMetaData>) => MutableModel<TimeWriting, TimeWritingMetaData> | void): TimeWriting;
}