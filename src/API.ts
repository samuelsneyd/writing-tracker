/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBookInput = {
  id?: string | null,
  name: string,
  owner?: string | null,
  _version?: number | null,
};

export type ModelBookConditionInput = {
  name?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelBookConditionInput | null > | null,
  or?: Array< ModelBookConditionInput | null > | null,
  not?: ModelBookConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Book = {
  __typename: "Book",
  id: string,
  name: string,
  wordCounts?: ModelWordCountConnection | null,
  TimeSpentWriting?: ModelTimeWritingConnection | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelWordCountConnection = {
  __typename: "ModelWordCountConnection",
  items:  Array<WordCount | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type WordCount = {
  __typename: "WordCount",
  id: string,
  words: number,
  book?: Book | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  bookWordCountsId?: string | null,
};

export type ModelTimeWritingConnection = {
  __typename: "ModelTimeWritingConnection",
  items:  Array<TimeWriting | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type TimeWriting = {
  __typename: "TimeWriting",
  id: string,
  minutes: number,
  book?: Book | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  bookTimeSpentWritingId?: string | null,
};

export type UpdateBookInput = {
  id: string,
  name?: string | null,
  owner?: string | null,
  _version?: number | null,
};

export type DeleteBookInput = {
  id: string,
  _version?: number | null,
};

export type CreateWordCountInput = {
  id?: string | null,
  words: number,
  owner?: string | null,
  _version?: number | null,
  bookWordCountsId?: string | null,
};

export type ModelWordCountConditionInput = {
  words?: ModelIntInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelWordCountConditionInput | null > | null,
  or?: Array< ModelWordCountConditionInput | null > | null,
  not?: ModelWordCountConditionInput | null,
  bookWordCountsId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateWordCountInput = {
  id: string,
  words?: number | null,
  owner?: string | null,
  _version?: number | null,
  bookWordCountsId?: string | null,
};

export type DeleteWordCountInput = {
  id: string,
  _version?: number | null,
};

export type CreateTimeWritingInput = {
  id?: string | null,
  minutes: number,
  owner?: string | null,
  _version?: number | null,
  bookTimeSpentWritingId?: string | null,
};

export type ModelTimeWritingConditionInput = {
  minutes?: ModelIntInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelTimeWritingConditionInput | null > | null,
  or?: Array< ModelTimeWritingConditionInput | null > | null,
  not?: ModelTimeWritingConditionInput | null,
  bookTimeSpentWritingId?: ModelIDInput | null,
};

export type UpdateTimeWritingInput = {
  id: string,
  minutes?: number | null,
  owner?: string | null,
  _version?: number | null,
  bookTimeSpentWritingId?: string | null,
};

export type DeleteTimeWritingInput = {
  id: string,
  _version?: number | null,
};

export type ModelBookFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelBookFilterInput | null > | null,
  or?: Array< ModelBookFilterInput | null > | null,
  not?: ModelBookFilterInput | null,
};

export type ModelBookConnection = {
  __typename: "ModelBookConnection",
  items:  Array<Book | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelWordCountFilterInput = {
  id?: ModelIDInput | null,
  words?: ModelIntInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelWordCountFilterInput | null > | null,
  or?: Array< ModelWordCountFilterInput | null > | null,
  not?: ModelWordCountFilterInput | null,
  bookWordCountsId?: ModelIDInput | null,
};

export type ModelTimeWritingFilterInput = {
  id?: ModelIDInput | null,
  minutes?: ModelIntInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelTimeWritingFilterInput | null > | null,
  or?: Array< ModelTimeWritingFilterInput | null > | null,
  not?: ModelTimeWritingFilterInput | null,
  bookTimeSpentWritingId?: ModelIDInput | null,
};

export type ModelSubscriptionBookFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBookFilterInput | null > | null,
  or?: Array< ModelSubscriptionBookFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionWordCountFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  words?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionWordCountFilterInput | null > | null,
  or?: Array< ModelSubscriptionWordCountFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionTimeWritingFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  minutes?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionTimeWritingFilterInput | null > | null,
  or?: Array< ModelSubscriptionTimeWritingFilterInput | null > | null,
};

export type CreateBookMutationVariables = {
  input: CreateBookInput,
  condition?: ModelBookConditionInput | null,
};

export type CreateBookMutation = {
  createBook?:  {
    __typename: "Book",
    id: string,
    name: string,
    wordCounts?:  {
      __typename: "ModelWordCountConnection",
      items:  Array< {
        __typename: "WordCount",
        id: string,
        words: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        bookWordCountsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    TimeSpentWriting?:  {
      __typename: "ModelTimeWritingConnection",
      items:  Array< {
        __typename: "TimeWriting",
        id: string,
        minutes: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        bookTimeSpentWritingId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateBookMutationVariables = {
  input: UpdateBookInput,
  condition?: ModelBookConditionInput | null,
};

export type UpdateBookMutation = {
  updateBook?:  {
    __typename: "Book",
    id: string,
    name: string,
    wordCounts?:  {
      __typename: "ModelWordCountConnection",
      items:  Array< {
        __typename: "WordCount",
        id: string,
        words: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        bookWordCountsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    TimeSpentWriting?:  {
      __typename: "ModelTimeWritingConnection",
      items:  Array< {
        __typename: "TimeWriting",
        id: string,
        minutes: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        bookTimeSpentWritingId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteBookMutationVariables = {
  input: DeleteBookInput,
  condition?: ModelBookConditionInput | null,
};

export type DeleteBookMutation = {
  deleteBook?:  {
    __typename: "Book",
    id: string,
    name: string,
    wordCounts?:  {
      __typename: "ModelWordCountConnection",
      items:  Array< {
        __typename: "WordCount",
        id: string,
        words: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        bookWordCountsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    TimeSpentWriting?:  {
      __typename: "ModelTimeWritingConnection",
      items:  Array< {
        __typename: "TimeWriting",
        id: string,
        minutes: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        bookTimeSpentWritingId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateWordCountMutationVariables = {
  input: CreateWordCountInput,
  condition?: ModelWordCountConditionInput | null,
};

export type CreateWordCountMutation = {
  createWordCount?:  {
    __typename: "WordCount",
    id: string,
    words: number,
    book?:  {
      __typename: "Book",
      id: string,
      name: string,
      wordCounts?:  {
        __typename: "ModelWordCountConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      TimeSpentWriting?:  {
        __typename: "ModelTimeWritingConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    bookWordCountsId?: string | null,
  } | null,
};

export type UpdateWordCountMutationVariables = {
  input: UpdateWordCountInput,
  condition?: ModelWordCountConditionInput | null,
};

export type UpdateWordCountMutation = {
  updateWordCount?:  {
    __typename: "WordCount",
    id: string,
    words: number,
    book?:  {
      __typename: "Book",
      id: string,
      name: string,
      wordCounts?:  {
        __typename: "ModelWordCountConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      TimeSpentWriting?:  {
        __typename: "ModelTimeWritingConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    bookWordCountsId?: string | null,
  } | null,
};

export type DeleteWordCountMutationVariables = {
  input: DeleteWordCountInput,
  condition?: ModelWordCountConditionInput | null,
};

export type DeleteWordCountMutation = {
  deleteWordCount?:  {
    __typename: "WordCount",
    id: string,
    words: number,
    book?:  {
      __typename: "Book",
      id: string,
      name: string,
      wordCounts?:  {
        __typename: "ModelWordCountConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      TimeSpentWriting?:  {
        __typename: "ModelTimeWritingConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    bookWordCountsId?: string | null,
  } | null,
};

export type CreateTimeWritingMutationVariables = {
  input: CreateTimeWritingInput,
  condition?: ModelTimeWritingConditionInput | null,
};

export type CreateTimeWritingMutation = {
  createTimeWriting?:  {
    __typename: "TimeWriting",
    id: string,
    minutes: number,
    book?:  {
      __typename: "Book",
      id: string,
      name: string,
      wordCounts?:  {
        __typename: "ModelWordCountConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      TimeSpentWriting?:  {
        __typename: "ModelTimeWritingConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    bookTimeSpentWritingId?: string | null,
  } | null,
};

export type UpdateTimeWritingMutationVariables = {
  input: UpdateTimeWritingInput,
  condition?: ModelTimeWritingConditionInput | null,
};

export type UpdateTimeWritingMutation = {
  updateTimeWriting?:  {
    __typename: "TimeWriting",
    id: string,
    minutes: number,
    book?:  {
      __typename: "Book",
      id: string,
      name: string,
      wordCounts?:  {
        __typename: "ModelWordCountConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      TimeSpentWriting?:  {
        __typename: "ModelTimeWritingConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    bookTimeSpentWritingId?: string | null,
  } | null,
};

export type DeleteTimeWritingMutationVariables = {
  input: DeleteTimeWritingInput,
  condition?: ModelTimeWritingConditionInput | null,
};

export type DeleteTimeWritingMutation = {
  deleteTimeWriting?:  {
    __typename: "TimeWriting",
    id: string,
    minutes: number,
    book?:  {
      __typename: "Book",
      id: string,
      name: string,
      wordCounts?:  {
        __typename: "ModelWordCountConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      TimeSpentWriting?:  {
        __typename: "ModelTimeWritingConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    bookTimeSpentWritingId?: string | null,
  } | null,
};

export type GetBookQueryVariables = {
  id: string,
};

export type GetBookQuery = {
  getBook?:  {
    __typename: "Book",
    id: string,
    name: string,
    wordCounts?:  {
      __typename: "ModelWordCountConnection",
      items:  Array< {
        __typename: "WordCount",
        id: string,
        words: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        bookWordCountsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    TimeSpentWriting?:  {
      __typename: "ModelTimeWritingConnection",
      items:  Array< {
        __typename: "TimeWriting",
        id: string,
        minutes: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        bookTimeSpentWritingId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListBooksQueryVariables = {
  filter?: ModelBookFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBooksQuery = {
  listBooks?:  {
    __typename: "ModelBookConnection",
    items:  Array< {
      __typename: "Book",
      id: string,
      name: string,
      wordCounts?:  {
        __typename: "ModelWordCountConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      TimeSpentWriting?:  {
        __typename: "ModelTimeWritingConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncBooksQueryVariables = {
  filter?: ModelBookFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncBooksQuery = {
  syncBooks?:  {
    __typename: "ModelBookConnection",
    items:  Array< {
      __typename: "Book",
      id: string,
      name: string,
      wordCounts?:  {
        __typename: "ModelWordCountConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      TimeSpentWriting?:  {
        __typename: "ModelTimeWritingConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetWordCountQueryVariables = {
  id: string,
};

export type GetWordCountQuery = {
  getWordCount?:  {
    __typename: "WordCount",
    id: string,
    words: number,
    book?:  {
      __typename: "Book",
      id: string,
      name: string,
      wordCounts?:  {
        __typename: "ModelWordCountConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      TimeSpentWriting?:  {
        __typename: "ModelTimeWritingConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    bookWordCountsId?: string | null,
  } | null,
};

export type ListWordCountsQueryVariables = {
  filter?: ModelWordCountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWordCountsQuery = {
  listWordCounts?:  {
    __typename: "ModelWordCountConnection",
    items:  Array< {
      __typename: "WordCount",
      id: string,
      words: number,
      book?:  {
        __typename: "Book",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      bookWordCountsId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncWordCountsQueryVariables = {
  filter?: ModelWordCountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncWordCountsQuery = {
  syncWordCounts?:  {
    __typename: "ModelWordCountConnection",
    items:  Array< {
      __typename: "WordCount",
      id: string,
      words: number,
      book?:  {
        __typename: "Book",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      bookWordCountsId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTimeWritingQueryVariables = {
  id: string,
};

export type GetTimeWritingQuery = {
  getTimeWriting?:  {
    __typename: "TimeWriting",
    id: string,
    minutes: number,
    book?:  {
      __typename: "Book",
      id: string,
      name: string,
      wordCounts?:  {
        __typename: "ModelWordCountConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      TimeSpentWriting?:  {
        __typename: "ModelTimeWritingConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    bookTimeSpentWritingId?: string | null,
  } | null,
};

export type ListTimeWritingsQueryVariables = {
  filter?: ModelTimeWritingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTimeWritingsQuery = {
  listTimeWritings?:  {
    __typename: "ModelTimeWritingConnection",
    items:  Array< {
      __typename: "TimeWriting",
      id: string,
      minutes: number,
      book?:  {
        __typename: "Book",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      bookTimeSpentWritingId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTimeWritingsQueryVariables = {
  filter?: ModelTimeWritingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTimeWritingsQuery = {
  syncTimeWritings?:  {
    __typename: "ModelTimeWritingConnection",
    items:  Array< {
      __typename: "TimeWriting",
      id: string,
      minutes: number,
      book?:  {
        __typename: "Book",
        id: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      bookTimeSpentWritingId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateBookSubscriptionVariables = {
  filter?: ModelSubscriptionBookFilterInput | null,
  owner?: string | null,
};

export type OnCreateBookSubscription = {
  onCreateBook?:  {
    __typename: "Book",
    id: string,
    name: string,
    wordCounts?:  {
      __typename: "ModelWordCountConnection",
      items:  Array< {
        __typename: "WordCount",
        id: string,
        words: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        bookWordCountsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    TimeSpentWriting?:  {
      __typename: "ModelTimeWritingConnection",
      items:  Array< {
        __typename: "TimeWriting",
        id: string,
        minutes: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        bookTimeSpentWritingId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateBookSubscriptionVariables = {
  filter?: ModelSubscriptionBookFilterInput | null,
  owner?: string | null,
};

export type OnUpdateBookSubscription = {
  onUpdateBook?:  {
    __typename: "Book",
    id: string,
    name: string,
    wordCounts?:  {
      __typename: "ModelWordCountConnection",
      items:  Array< {
        __typename: "WordCount",
        id: string,
        words: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        bookWordCountsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    TimeSpentWriting?:  {
      __typename: "ModelTimeWritingConnection",
      items:  Array< {
        __typename: "TimeWriting",
        id: string,
        minutes: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        bookTimeSpentWritingId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteBookSubscriptionVariables = {
  filter?: ModelSubscriptionBookFilterInput | null,
  owner?: string | null,
};

export type OnDeleteBookSubscription = {
  onDeleteBook?:  {
    __typename: "Book",
    id: string,
    name: string,
    wordCounts?:  {
      __typename: "ModelWordCountConnection",
      items:  Array< {
        __typename: "WordCount",
        id: string,
        words: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        bookWordCountsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    TimeSpentWriting?:  {
      __typename: "ModelTimeWritingConnection",
      items:  Array< {
        __typename: "TimeWriting",
        id: string,
        minutes: number,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        bookTimeSpentWritingId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateWordCountSubscriptionVariables = {
  filter?: ModelSubscriptionWordCountFilterInput | null,
  owner?: string | null,
};

export type OnCreateWordCountSubscription = {
  onCreateWordCount?:  {
    __typename: "WordCount",
    id: string,
    words: number,
    book?:  {
      __typename: "Book",
      id: string,
      name: string,
      wordCounts?:  {
        __typename: "ModelWordCountConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      TimeSpentWriting?:  {
        __typename: "ModelTimeWritingConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    bookWordCountsId?: string | null,
  } | null,
};

export type OnUpdateWordCountSubscriptionVariables = {
  filter?: ModelSubscriptionWordCountFilterInput | null,
  owner?: string | null,
};

export type OnUpdateWordCountSubscription = {
  onUpdateWordCount?:  {
    __typename: "WordCount",
    id: string,
    words: number,
    book?:  {
      __typename: "Book",
      id: string,
      name: string,
      wordCounts?:  {
        __typename: "ModelWordCountConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      TimeSpentWriting?:  {
        __typename: "ModelTimeWritingConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    bookWordCountsId?: string | null,
  } | null,
};

export type OnDeleteWordCountSubscriptionVariables = {
  filter?: ModelSubscriptionWordCountFilterInput | null,
  owner?: string | null,
};

export type OnDeleteWordCountSubscription = {
  onDeleteWordCount?:  {
    __typename: "WordCount",
    id: string,
    words: number,
    book?:  {
      __typename: "Book",
      id: string,
      name: string,
      wordCounts?:  {
        __typename: "ModelWordCountConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      TimeSpentWriting?:  {
        __typename: "ModelTimeWritingConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    bookWordCountsId?: string | null,
  } | null,
};

export type OnCreateTimeWritingSubscriptionVariables = {
  filter?: ModelSubscriptionTimeWritingFilterInput | null,
  owner?: string | null,
};

export type OnCreateTimeWritingSubscription = {
  onCreateTimeWriting?:  {
    __typename: "TimeWriting",
    id: string,
    minutes: number,
    book?:  {
      __typename: "Book",
      id: string,
      name: string,
      wordCounts?:  {
        __typename: "ModelWordCountConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      TimeSpentWriting?:  {
        __typename: "ModelTimeWritingConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    bookTimeSpentWritingId?: string | null,
  } | null,
};

export type OnUpdateTimeWritingSubscriptionVariables = {
  filter?: ModelSubscriptionTimeWritingFilterInput | null,
  owner?: string | null,
};

export type OnUpdateTimeWritingSubscription = {
  onUpdateTimeWriting?:  {
    __typename: "TimeWriting",
    id: string,
    minutes: number,
    book?:  {
      __typename: "Book",
      id: string,
      name: string,
      wordCounts?:  {
        __typename: "ModelWordCountConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      TimeSpentWriting?:  {
        __typename: "ModelTimeWritingConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    bookTimeSpentWritingId?: string | null,
  } | null,
};

export type OnDeleteTimeWritingSubscriptionVariables = {
  filter?: ModelSubscriptionTimeWritingFilterInput | null,
  owner?: string | null,
};

export type OnDeleteTimeWritingSubscription = {
  onDeleteTimeWriting?:  {
    __typename: "TimeWriting",
    id: string,
    minutes: number,
    book?:  {
      __typename: "Book",
      id: string,
      name: string,
      wordCounts?:  {
        __typename: "ModelWordCountConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      TimeSpentWriting?:  {
        __typename: "ModelTimeWritingConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    bookTimeSpentWritingId?: string | null,
  } | null,
};
