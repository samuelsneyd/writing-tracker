/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProjectInput = {
  id?: string | null,
  name: string,
  projectType: ProjectType,
  owner?: string | null,
  _version?: number | null,
};

export enum ProjectType {
  BOOK = "BOOK",
  JOURNAL = "JOURNAL",
  BLOG = "BLOG",
  OTHER = "OTHER",
}


export type ModelProjectConditionInput = {
  name?: ModelStringInput | null,
  projectType?: ModelProjectTypeInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelProjectConditionInput | null > | null,
  or?: Array< ModelProjectConditionInput | null > | null,
  not?: ModelProjectConditionInput | null,
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

export type ModelProjectTypeInput = {
  eq?: ProjectType | null,
  ne?: ProjectType | null,
};

export type Project = {
  __typename: "Project",
  id: string,
  name: string,
  projectType: ProjectType,
  wordCounts?: ModelWordCountConnection | null,
  writingTimes?: ModelTimeWritingConnection | null,
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
  date: string,
  project: Project,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  projectWordCountsId?: string | null,
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
  date: string,
  project: Project,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  projectWritingTimesId?: string | null,
};

export type UpdateProjectInput = {
  id: string,
  name?: string | null,
  projectType?: ProjectType | null,
  owner?: string | null,
  _version?: number | null,
};

export type DeleteProjectInput = {
  id: string,
  _version?: number | null,
};

export type CreateWordCountInput = {
  id?: string | null,
  words: number,
  date: string,
  owner?: string | null,
  _version?: number | null,
  projectWordCountsId?: string | null,
};

export type ModelWordCountConditionInput = {
  words?: ModelIntInput | null,
  date?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelWordCountConditionInput | null > | null,
  or?: Array< ModelWordCountConditionInput | null > | null,
  not?: ModelWordCountConditionInput | null,
  projectWordCountsId?: ModelIDInput | null,
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
  date?: string | null,
  owner?: string | null,
  _version?: number | null,
  projectWordCountsId?: string | null,
};

export type DeleteWordCountInput = {
  id: string,
  _version?: number | null,
};

export type CreateTimeWritingInput = {
  id?: string | null,
  minutes: number,
  date: string,
  owner?: string | null,
  _version?: number | null,
  projectWritingTimesId?: string | null,
};

export type ModelTimeWritingConditionInput = {
  minutes?: ModelIntInput | null,
  date?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelTimeWritingConditionInput | null > | null,
  or?: Array< ModelTimeWritingConditionInput | null > | null,
  not?: ModelTimeWritingConditionInput | null,
  projectWritingTimesId?: ModelIDInput | null,
};

export type UpdateTimeWritingInput = {
  id: string,
  minutes?: number | null,
  date?: string | null,
  owner?: string | null,
  _version?: number | null,
  projectWritingTimesId?: string | null,
};

export type DeleteTimeWritingInput = {
  id: string,
  _version?: number | null,
};

export type CreateLoginDateInput = {
  id?: string | null,
  date: string,
  owner?: string | null,
  _version?: number | null,
};

export type ModelLoginDateConditionInput = {
  date?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelLoginDateConditionInput | null > | null,
  or?: Array< ModelLoginDateConditionInput | null > | null,
  not?: ModelLoginDateConditionInput | null,
};

export type LoginDate = {
  __typename: "LoginDate",
  id: string,
  date: string,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateLoginDateInput = {
  id: string,
  date?: string | null,
  owner?: string | null,
  _version?: number | null,
};

export type DeleteLoginDateInput = {
  id: string,
  _version?: number | null,
};

export type ModelProjectFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  projectType?: ModelProjectTypeInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelProjectFilterInput | null > | null,
  or?: Array< ModelProjectFilterInput | null > | null,
  not?: ModelProjectFilterInput | null,
};

export type ModelProjectConnection = {
  __typename: "ModelProjectConnection",
  items:  Array<Project | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelWordCountFilterInput = {
  id?: ModelIDInput | null,
  words?: ModelIntInput | null,
  date?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelWordCountFilterInput | null > | null,
  or?: Array< ModelWordCountFilterInput | null > | null,
  not?: ModelWordCountFilterInput | null,
  projectWordCountsId?: ModelIDInput | null,
};

export type ModelTimeWritingFilterInput = {
  id?: ModelIDInput | null,
  minutes?: ModelIntInput | null,
  date?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelTimeWritingFilterInput | null > | null,
  or?: Array< ModelTimeWritingFilterInput | null > | null,
  not?: ModelTimeWritingFilterInput | null,
  projectWritingTimesId?: ModelIDInput | null,
};

export type ModelLoginDateFilterInput = {
  id?: ModelIDInput | null,
  date?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelLoginDateFilterInput | null > | null,
  or?: Array< ModelLoginDateFilterInput | null > | null,
  not?: ModelLoginDateFilterInput | null,
};

export type ModelLoginDateConnection = {
  __typename: "ModelLoginDateConnection",
  items:  Array<LoginDate | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionProjectFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  projectType?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProjectFilterInput | null > | null,
  or?: Array< ModelSubscriptionProjectFilterInput | null > | null,
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
  date?: ModelSubscriptionStringInput | null,
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
  date?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTimeWritingFilterInput | null > | null,
  or?: Array< ModelSubscriptionTimeWritingFilterInput | null > | null,
};

export type ModelSubscriptionLoginDateFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionLoginDateFilterInput | null > | null,
  or?: Array< ModelSubscriptionLoginDateFilterInput | null > | null,
};

export type CreateProjectMutationVariables = {
  input: CreateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type CreateProjectMutation = {
  createProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    projectType: ProjectType,
    wordCounts?:  {
      __typename: "ModelWordCountConnection",
      items:  Array< {
        __typename: "WordCount",
        id: string,
        words: number,
        date: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        projectWordCountsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    writingTimes?:  {
      __typename: "ModelTimeWritingConnection",
      items:  Array< {
        __typename: "TimeWriting",
        id: string,
        minutes: number,
        date: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        projectWritingTimesId?: string | null,
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

export type UpdateProjectMutationVariables = {
  input: UpdateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type UpdateProjectMutation = {
  updateProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    projectType: ProjectType,
    wordCounts?:  {
      __typename: "ModelWordCountConnection",
      items:  Array< {
        __typename: "WordCount",
        id: string,
        words: number,
        date: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        projectWordCountsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    writingTimes?:  {
      __typename: "ModelTimeWritingConnection",
      items:  Array< {
        __typename: "TimeWriting",
        id: string,
        minutes: number,
        date: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        projectWritingTimesId?: string | null,
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

export type DeleteProjectMutationVariables = {
  input: DeleteProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type DeleteProjectMutation = {
  deleteProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    projectType: ProjectType,
    wordCounts?:  {
      __typename: "ModelWordCountConnection",
      items:  Array< {
        __typename: "WordCount",
        id: string,
        words: number,
        date: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        projectWordCountsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    writingTimes?:  {
      __typename: "ModelTimeWritingConnection",
      items:  Array< {
        __typename: "TimeWriting",
        id: string,
        minutes: number,
        date: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        projectWritingTimesId?: string | null,
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
    date: string,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      projectType: ProjectType,
      wordCounts?:  {
        __typename: "ModelWordCountConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      writingTimes?:  {
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
    },
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectWordCountsId?: string | null,
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
    date: string,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      projectType: ProjectType,
      wordCounts?:  {
        __typename: "ModelWordCountConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      writingTimes?:  {
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
    },
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectWordCountsId?: string | null,
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
    date: string,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      projectType: ProjectType,
      wordCounts?:  {
        __typename: "ModelWordCountConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      writingTimes?:  {
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
    },
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectWordCountsId?: string | null,
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
    date: string,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      projectType: ProjectType,
      wordCounts?:  {
        __typename: "ModelWordCountConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      writingTimes?:  {
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
    },
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectWritingTimesId?: string | null,
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
    date: string,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      projectType: ProjectType,
      wordCounts?:  {
        __typename: "ModelWordCountConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      writingTimes?:  {
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
    },
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectWritingTimesId?: string | null,
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
    date: string,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      projectType: ProjectType,
      wordCounts?:  {
        __typename: "ModelWordCountConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      writingTimes?:  {
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
    },
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectWritingTimesId?: string | null,
  } | null,
};

export type CreateLoginDateMutationVariables = {
  input: CreateLoginDateInput,
  condition?: ModelLoginDateConditionInput | null,
};

export type CreateLoginDateMutation = {
  createLoginDate?:  {
    __typename: "LoginDate",
    id: string,
    date: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateLoginDateMutationVariables = {
  input: UpdateLoginDateInput,
  condition?: ModelLoginDateConditionInput | null,
};

export type UpdateLoginDateMutation = {
  updateLoginDate?:  {
    __typename: "LoginDate",
    id: string,
    date: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteLoginDateMutationVariables = {
  input: DeleteLoginDateInput,
  condition?: ModelLoginDateConditionInput | null,
};

export type DeleteLoginDateMutation = {
  deleteLoginDate?:  {
    __typename: "LoginDate",
    id: string,
    date: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetProjectQueryVariables = {
  id: string,
};

export type GetProjectQuery = {
  getProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    projectType: ProjectType,
    wordCounts?:  {
      __typename: "ModelWordCountConnection",
      items:  Array< {
        __typename: "WordCount",
        id: string,
        words: number,
        date: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        projectWordCountsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    writingTimes?:  {
      __typename: "ModelTimeWritingConnection",
      items:  Array< {
        __typename: "TimeWriting",
        id: string,
        minutes: number,
        date: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        projectWritingTimesId?: string | null,
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

export type ListProjectsQueryVariables = {
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProjectsQuery = {
  listProjects?:  {
    __typename: "ModelProjectConnection",
    items:  Array< {
      __typename: "Project",
      id: string,
      name: string,
      projectType: ProjectType,
      wordCounts?:  {
        __typename: "ModelWordCountConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      writingTimes?:  {
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

export type SyncProjectsQueryVariables = {
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProjectsQuery = {
  syncProjects?:  {
    __typename: "ModelProjectConnection",
    items:  Array< {
      __typename: "Project",
      id: string,
      name: string,
      projectType: ProjectType,
      wordCounts?:  {
        __typename: "ModelWordCountConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      writingTimes?:  {
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
    date: string,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      projectType: ProjectType,
      wordCounts?:  {
        __typename: "ModelWordCountConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      writingTimes?:  {
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
    },
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectWordCountsId?: string | null,
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
      date: string,
      project:  {
        __typename: "Project",
        id: string,
        name: string,
        projectType: ProjectType,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      projectWordCountsId?: string | null,
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
      date: string,
      project:  {
        __typename: "Project",
        id: string,
        name: string,
        projectType: ProjectType,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      projectWordCountsId?: string | null,
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
    date: string,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      projectType: ProjectType,
      wordCounts?:  {
        __typename: "ModelWordCountConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      writingTimes?:  {
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
    },
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectWritingTimesId?: string | null,
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
      date: string,
      project:  {
        __typename: "Project",
        id: string,
        name: string,
        projectType: ProjectType,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      projectWritingTimesId?: string | null,
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
      date: string,
      project:  {
        __typename: "Project",
        id: string,
        name: string,
        projectType: ProjectType,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      projectWritingTimesId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetLoginDateQueryVariables = {
  id: string,
};

export type GetLoginDateQuery = {
  getLoginDate?:  {
    __typename: "LoginDate",
    id: string,
    date: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListLoginDatesQueryVariables = {
  filter?: ModelLoginDateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLoginDatesQuery = {
  listLoginDates?:  {
    __typename: "ModelLoginDateConnection",
    items:  Array< {
      __typename: "LoginDate",
      id: string,
      date: string,
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

export type SyncLoginDatesQueryVariables = {
  filter?: ModelLoginDateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncLoginDatesQuery = {
  syncLoginDates?:  {
    __typename: "ModelLoginDateConnection",
    items:  Array< {
      __typename: "LoginDate",
      id: string,
      date: string,
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

export type OnCreateProjectSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFilterInput | null,
  owner?: string | null,
};

export type OnCreateProjectSubscription = {
  onCreateProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    projectType: ProjectType,
    wordCounts?:  {
      __typename: "ModelWordCountConnection",
      items:  Array< {
        __typename: "WordCount",
        id: string,
        words: number,
        date: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        projectWordCountsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    writingTimes?:  {
      __typename: "ModelTimeWritingConnection",
      items:  Array< {
        __typename: "TimeWriting",
        id: string,
        minutes: number,
        date: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        projectWritingTimesId?: string | null,
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

export type OnUpdateProjectSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFilterInput | null,
  owner?: string | null,
};

export type OnUpdateProjectSubscription = {
  onUpdateProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    projectType: ProjectType,
    wordCounts?:  {
      __typename: "ModelWordCountConnection",
      items:  Array< {
        __typename: "WordCount",
        id: string,
        words: number,
        date: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        projectWordCountsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    writingTimes?:  {
      __typename: "ModelTimeWritingConnection",
      items:  Array< {
        __typename: "TimeWriting",
        id: string,
        minutes: number,
        date: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        projectWritingTimesId?: string | null,
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

export type OnDeleteProjectSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFilterInput | null,
  owner?: string | null,
};

export type OnDeleteProjectSubscription = {
  onDeleteProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    projectType: ProjectType,
    wordCounts?:  {
      __typename: "ModelWordCountConnection",
      items:  Array< {
        __typename: "WordCount",
        id: string,
        words: number,
        date: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        projectWordCountsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    writingTimes?:  {
      __typename: "ModelTimeWritingConnection",
      items:  Array< {
        __typename: "TimeWriting",
        id: string,
        minutes: number,
        date: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        projectWritingTimesId?: string | null,
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
    date: string,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      projectType: ProjectType,
      wordCounts?:  {
        __typename: "ModelWordCountConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      writingTimes?:  {
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
    },
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectWordCountsId?: string | null,
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
    date: string,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      projectType: ProjectType,
      wordCounts?:  {
        __typename: "ModelWordCountConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      writingTimes?:  {
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
    },
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectWordCountsId?: string | null,
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
    date: string,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      projectType: ProjectType,
      wordCounts?:  {
        __typename: "ModelWordCountConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      writingTimes?:  {
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
    },
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectWordCountsId?: string | null,
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
    date: string,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      projectType: ProjectType,
      wordCounts?:  {
        __typename: "ModelWordCountConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      writingTimes?:  {
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
    },
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectWritingTimesId?: string | null,
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
    date: string,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      projectType: ProjectType,
      wordCounts?:  {
        __typename: "ModelWordCountConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      writingTimes?:  {
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
    },
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectWritingTimesId?: string | null,
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
    date: string,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      projectType: ProjectType,
      wordCounts?:  {
        __typename: "ModelWordCountConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      writingTimes?:  {
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
    },
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    projectWritingTimesId?: string | null,
  } | null,
};

export type OnCreateLoginDateSubscriptionVariables = {
  filter?: ModelSubscriptionLoginDateFilterInput | null,
  owner?: string | null,
};

export type OnCreateLoginDateSubscription = {
  onCreateLoginDate?:  {
    __typename: "LoginDate",
    id: string,
    date: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateLoginDateSubscriptionVariables = {
  filter?: ModelSubscriptionLoginDateFilterInput | null,
  owner?: string | null,
};

export type OnUpdateLoginDateSubscription = {
  onUpdateLoginDate?:  {
    __typename: "LoginDate",
    id: string,
    date: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteLoginDateSubscriptionVariables = {
  filter?: ModelSubscriptionLoginDateFilterInput | null,
  owner?: string | null,
};

export type OnDeleteLoginDateSubscription = {
  onDeleteLoginDate?:  {
    __typename: "LoginDate",
    id: string,
    date: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
