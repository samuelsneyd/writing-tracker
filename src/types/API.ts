/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProjectInput = {
  id?: string | null,
  title: string,
  description: string,
  type: ProjectType,
  status: ProjectStatus,
  initialWords: number,
  overallWordTarget: number,
  wordTarget: WeeklyTargetInput,
  wordsPerPage: number,
  owner?: string | null,
  _version?: number | null,
};

export enum ProjectType {
  BOOK = "BOOK",
  JOURNAL = "JOURNAL",
  BLOG = "BLOG",
  OTHER = "OTHER",
}


export enum ProjectStatus {
  IN_PROGRESS = "IN_PROGRESS",
  ON_HOLD = "ON_HOLD",
  COMPLETED = "COMPLETED",
}


export type WeeklyTargetInput = {
  mon: TargetByDayInput,
  tue: TargetByDayInput,
  wed: TargetByDayInput,
  thu: TargetByDayInput,
  fri: TargetByDayInput,
  sat: TargetByDayInput,
  sun: TargetByDayInput,
};

export type TargetByDayInput = {
  enabled: boolean,
  words: number,
};

export type ModelProjectConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  type?: ModelProjectTypeInput | null,
  status?: ModelProjectStatusInput | null,
  initialWords?: ModelIntInput | null,
  overallWordTarget?: ModelIntInput | null,
  wordsPerPage?: ModelIntInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelProjectConditionInput | null > | null,
  or?: Array< ModelProjectConditionInput | null > | null,
  not?: ModelProjectConditionInput | null,
  _deleted?: ModelBooleanInput | null,
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

export type ModelProjectStatusInput = {
  eq?: ProjectStatus | null,
  ne?: ProjectStatus | null,
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

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Project = {
  __typename: "Project",
  id: string,
  title: string,
  description: string,
  type: ProjectType,
  status: ProjectStatus,
  initialWords: number,
  overallWordTarget: number,
  wordTarget: WeeklyTarget,
  wordsPerPage: number,
  sessions?: ModelSessionConnection | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type WeeklyTarget = {
  __typename: "WeeklyTarget",
  mon: TargetByDay,
  tue: TargetByDay,
  wed: TargetByDay,
  thu: TargetByDay,
  fri: TargetByDay,
  sat: TargetByDay,
  sun: TargetByDay,
};

export type TargetByDay = {
  __typename: "TargetByDay",
  enabled: boolean,
  words: number,
};

export type ModelSessionConnection = {
  __typename: "ModelSessionConnection",
  items:  Array<Session | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Session = {
  __typename: "Session",
  id: string,
  words: number,
  minutes: number,
  date: string,
  project: Project,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  projectSessionsId: string,
};

export type UpdateProjectInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  type?: ProjectType | null,
  status?: ProjectStatus | null,
  initialWords?: number | null,
  overallWordTarget?: number | null,
  wordTarget?: WeeklyTargetInput | null,
  wordsPerPage?: number | null,
  owner?: string | null,
  _version?: number | null,
};

export type DeleteProjectInput = {
  id: string,
  _version?: number | null,
};

export type CreateSessionInput = {
  id?: string | null,
  words: number,
  minutes: number,
  date: string,
  owner?: string | null,
  _version?: number | null,
  projectSessionsId: string,
};

export type ModelSessionConditionInput = {
  words?: ModelIntInput | null,
  minutes?: ModelIntInput | null,
  date?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelSessionConditionInput | null > | null,
  or?: Array< ModelSessionConditionInput | null > | null,
  not?: ModelSessionConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  projectSessionsId?: ModelIDInput | null,
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

export type UpdateSessionInput = {
  id: string,
  words?: number | null,
  minutes?: number | null,
  date?: string | null,
  owner?: string | null,
  _version?: number | null,
  projectSessionsId?: string | null,
};

export type DeleteSessionInput = {
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
  _deleted?: ModelBooleanInput | null,
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

export type CreateAwardInput = {
  id?: string | null,
  category: AwardCategory,
  type: AwardType,
  date: string,
  owner?: string | null,
  _version?: number | null,
};

export enum AwardCategory {
  DAILY_STREAK = "DAILY_STREAK",
  EARLY_BIRD = "EARLY_BIRD",
  NIGHT_OWL = "NIGHT_OWL",
  OVERACHIEVER = "OVERACHIEVER",
  FINISHER = "FINISHER",
  GENERAL = "GENERAL",
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
  FINISHER_4 = "FINISHER_4",
}


export type ModelAwardConditionInput = {
  category?: ModelAwardCategoryInput | null,
  type?: ModelAwardTypeInput | null,
  date?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelAwardConditionInput | null > | null,
  or?: Array< ModelAwardConditionInput | null > | null,
  not?: ModelAwardConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelAwardCategoryInput = {
  eq?: AwardCategory | null,
  ne?: AwardCategory | null,
};

export type ModelAwardTypeInput = {
  eq?: AwardType | null,
  ne?: AwardType | null,
};

export type Award = {
  __typename: "Award",
  id: string,
  category: AwardCategory,
  type: AwardType,
  date: string,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateAwardInput = {
  id: string,
  category?: AwardCategory | null,
  type?: AwardType | null,
  date?: string | null,
  owner?: string | null,
  _version?: number | null,
};

export type DeleteAwardInput = {
  id: string,
  _version?: number | null,
};

export type ModelProjectFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  type?: ModelProjectTypeInput | null,
  status?: ModelProjectStatusInput | null,
  initialWords?: ModelIntInput | null,
  overallWordTarget?: ModelIntInput | null,
  wordsPerPage?: ModelIntInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelProjectFilterInput | null > | null,
  or?: Array< ModelProjectFilterInput | null > | null,
  not?: ModelProjectFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelProjectConnection = {
  __typename: "ModelProjectConnection",
  items:  Array<Project | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSessionFilterInput = {
  id?: ModelIDInput | null,
  words?: ModelIntInput | null,
  minutes?: ModelIntInput | null,
  date?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelSessionFilterInput | null > | null,
  or?: Array< ModelSessionFilterInput | null > | null,
  not?: ModelSessionFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  projectSessionsId?: ModelIDInput | null,
};

export type ModelLoginDateFilterInput = {
  id?: ModelIDInput | null,
  date?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelLoginDateFilterInput | null > | null,
  or?: Array< ModelLoginDateFilterInput | null > | null,
  not?: ModelLoginDateFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelLoginDateConnection = {
  __typename: "ModelLoginDateConnection",
  items:  Array<LoginDate | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelAwardFilterInput = {
  id?: ModelIDInput | null,
  category?: ModelAwardCategoryInput | null,
  type?: ModelAwardTypeInput | null,
  date?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelAwardFilterInput | null > | null,
  or?: Array< ModelAwardFilterInput | null > | null,
  not?: ModelAwardFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelAwardConnection = {
  __typename: "ModelAwardConnection",
  items:  Array<Award | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionProjectFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  initialWords?: ModelSubscriptionIntInput | null,
  overallWordTarget?: ModelSubscriptionIntInput | null,
  wordsPerPage?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionProjectFilterInput | null > | null,
  or?: Array< ModelSubscriptionProjectFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
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

export type ModelSubscriptionSessionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  words?: ModelSubscriptionIntInput | null,
  minutes?: ModelSubscriptionIntInput | null,
  date?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSessionFilterInput | null > | null,
  or?: Array< ModelSubscriptionSessionFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionLoginDateFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionLoginDateFilterInput | null > | null,
  or?: Array< ModelSubscriptionLoginDateFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionAwardFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  category?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  date?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAwardFilterInput | null > | null,
  or?: Array< ModelSubscriptionAwardFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type CreateProjectMutationVariables = {
  input: CreateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type CreateProjectMutation = {
  createProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    description: string,
    type: ProjectType,
    status: ProjectStatus,
    initialWords: number,
    overallWordTarget: number,
    wordTarget:  {
      __typename: "WeeklyTarget",
      mon:  {
        __typename: "TargetByDay",
        enabled: boolean,
        words: number,
      },
      tue:  {
        __typename: "TargetByDay",
        enabled: boolean,
        words: number,
      },
      wed:  {
        __typename: "TargetByDay",
        enabled: boolean,
        words: number,
      },
      thu:  {
        __typename: "TargetByDay",
        enabled: boolean,
        words: number,
      },
      fri:  {
        __typename: "TargetByDay",
        enabled: boolean,
        words: number,
      },
      sat:  {
        __typename: "TargetByDay",
        enabled: boolean,
        words: number,
      },
      sun:  {
        __typename: "TargetByDay",
        enabled: boolean,
        words: number,
      },
    },
    wordsPerPage: number,
    sessions?:  {
      __typename: "ModelSessionConnection",
      items:  Array< {
        __typename: "Session",
        id: string,
        words: number,
        minutes: number,
        date: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        projectSessionsId: string,
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
    title: string,
    description: string,
    type: ProjectType,
    status: ProjectStatus,
    initialWords: number,
    overallWordTarget: number,
    wordTarget:  {
      __typename: "WeeklyTarget",
      mon:  {
        __typename: "TargetByDay",
        enabled: boolean,
        words: number,
      },
      tue:  {
        __typename: "TargetByDay",
        enabled: boolean,
        words: number,
      },
      wed:  {
        __typename: "TargetByDay",
        enabled: boolean,
        words: number,
      },
      thu:  {
        __typename: "TargetByDay",
        enabled: boolean,
        words: number,
      },
      fri:  {
        __typename: "TargetByDay",
        enabled: boolean,
        words: number,
      },
      sat:  {
        __typename: "TargetByDay",
        enabled: boolean,
        words: number,
      },
      sun:  {
        __typename: "TargetByDay",
        enabled: boolean,
        words: number,
      },
    },
    wordsPerPage: number,
    sessions?:  {
      __typename: "ModelSessionConnection",
      items:  Array< {
        __typename: "Session",
        id: string,
        words: number,
        minutes: number,
        date: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        projectSessionsId: string,
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
    title: string,
    description: string,
    type: ProjectType,
    status: ProjectStatus,
    initialWords: number,
    overallWordTarget: number,
    wordTarget:  {
      __typename: "WeeklyTarget",
      mon:  {
        __typename: "TargetByDay",
        enabled: boolean,
        words: number,
      },
      tue:  {
        __typename: "TargetByDay",
        enabled: boolean,
        words: number,
      },
      wed:  {
        __typename: "TargetByDay",
        enabled: boolean,
        words: number,
      },
      thu:  {
        __typename: "TargetByDay",
        enabled: boolean,
        words: number,
      },
      fri:  {
        __typename: "TargetByDay",
        enabled: boolean,
        words: number,
      },
      sat:  {
        __typename: "TargetByDay",
        enabled: boolean,
        words: number,
      },
      sun:  {
        __typename: "TargetByDay",
        enabled: boolean,
        words: number,
      },
    },
    wordsPerPage: number,
    sessions?:  {
      __typename: "ModelSessionConnection",
      items:  Array< {
        __typename: "Session",
        id: string,
        words: number,
        minutes: number,
        date: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        projectSessionsId: string,
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

export type CreateSessionMutationVariables = {
  input: CreateSessionInput,
  condition?: ModelSessionConditionInput | null,
};

export type CreateSessionMutation = {
  createSession?:  {
    __typename: "Session",
    id: string,
    words: number,
    minutes: number,
    date: string,
    project:  {
      __typename: "Project",
      id: string,
      title: string,
      description: string,
      type: ProjectType,
      status: ProjectStatus,
      initialWords: number,
      overallWordTarget: number,
      wordTarget:  {
        __typename: "WeeklyTarget",
      },
      wordsPerPage: number,
      sessions?:  {
        __typename: "ModelSessionConnection",
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
    projectSessionsId: string,
  } | null,
};

export type UpdateSessionMutationVariables = {
  input: UpdateSessionInput,
  condition?: ModelSessionConditionInput | null,
};

export type UpdateSessionMutation = {
  updateSession?:  {
    __typename: "Session",
    id: string,
    words: number,
    minutes: number,
    date: string,
    project:  {
      __typename: "Project",
      id: string,
      title: string,
      description: string,
      type: ProjectType,
      status: ProjectStatus,
      initialWords: number,
      overallWordTarget: number,
      wordTarget:  {
        __typename: "WeeklyTarget",
      },
      wordsPerPage: number,
      sessions?:  {
        __typename: "ModelSessionConnection",
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
    projectSessionsId: string,
  } | null,
};

export type DeleteSessionMutationVariables = {
  input: DeleteSessionInput,
  condition?: ModelSessionConditionInput | null,
};

export type DeleteSessionMutation = {
  deleteSession?:  {
    __typename: "Session",
    id: string,
    words: number,
    minutes: number,
    date: string,
    project:  {
      __typename: "Project",
      id: string,
      title: string,
      description: string,
      type: ProjectType,
      status: ProjectStatus,
      initialWords: number,
      overallWordTarget: number,
      wordTarget:  {
        __typename: "WeeklyTarget",
      },
      wordsPerPage: number,
      sessions?:  {
        __typename: "ModelSessionConnection",
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
    projectSessionsId: string,
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

export type CreateAwardMutationVariables = {
  input: CreateAwardInput,
  condition?: ModelAwardConditionInput | null,
};

export type CreateAwardMutation = {
  createAward?:  {
    __typename: "Award",
    id: string,
    category: AwardCategory,
    type: AwardType,
    date: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateAwardMutationVariables = {
  input: UpdateAwardInput,
  condition?: ModelAwardConditionInput | null,
};

export type UpdateAwardMutation = {
  updateAward?:  {
    __typename: "Award",
    id: string,
    category: AwardCategory,
    type: AwardType,
    date: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteAwardMutationVariables = {
  input: DeleteAwardInput,
  condition?: ModelAwardConditionInput | null,
};

export type DeleteAwardMutation = {
  deleteAward?:  {
    __typename: "Award",
    id: string,
    category: AwardCategory,
    type: AwardType,
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
    title: string,
    description: string,
    type: ProjectType,
    status: ProjectStatus,
    initialWords: number,
    overallWordTarget: number,
    wordTarget:  {
      __typename: "WeeklyTarget",
      mon:  {
        __typename: "TargetByDay",
        enabled: boolean,
        words: number,
      },
      tue:  {
        __typename: "TargetByDay",
        enabled: boolean,
        words: number,
      },
      wed:  {
        __typename: "TargetByDay",
        enabled: boolean,
        words: number,
      },
      thu:  {
        __typename: "TargetByDay",
        enabled: boolean,
        words: number,
      },
      fri:  {
        __typename: "TargetByDay",
        enabled: boolean,
        words: number,
      },
      sat:  {
        __typename: "TargetByDay",
        enabled: boolean,
        words: number,
      },
      sun:  {
        __typename: "TargetByDay",
        enabled: boolean,
        words: number,
      },
    },
    wordsPerPage: number,
    sessions?:  {
      __typename: "ModelSessionConnection",
      items:  Array< {
        __typename: "Session",
        id: string,
        words: number,
        minutes: number,
        date: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        projectSessionsId: string,
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
      title: string,
      description: string,
      type: ProjectType,
      status: ProjectStatus,
      initialWords: number,
      overallWordTarget: number,
      wordTarget:  {
        __typename: "WeeklyTarget",
      },
      wordsPerPage: number,
      sessions?:  {
        __typename: "ModelSessionConnection",
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
      title: string,
      description: string,
      type: ProjectType,
      status: ProjectStatus,
      initialWords: number,
      overallWordTarget: number,
      wordTarget:  {
        __typename: "WeeklyTarget",
      },
      wordsPerPage: number,
      sessions?:  {
        __typename: "ModelSessionConnection",
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

export type GetSessionQueryVariables = {
  id: string,
};

export type GetSessionQuery = {
  getSession?:  {
    __typename: "Session",
    id: string,
    words: number,
    minutes: number,
    date: string,
    project:  {
      __typename: "Project",
      id: string,
      title: string,
      description: string,
      type: ProjectType,
      status: ProjectStatus,
      initialWords: number,
      overallWordTarget: number,
      wordTarget:  {
        __typename: "WeeklyTarget",
      },
      wordsPerPage: number,
      sessions?:  {
        __typename: "ModelSessionConnection",
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
    projectSessionsId: string,
  } | null,
};

export type ListSessionsQueryVariables = {
  filter?: ModelSessionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSessionsQuery = {
  listSessions?:  {
    __typename: "ModelSessionConnection",
    items:  Array< {
      __typename: "Session",
      id: string,
      words: number,
      minutes: number,
      date: string,
      project:  {
        __typename: "Project",
        id: string,
        title: string,
        description: string,
        type: ProjectType,
        status: ProjectStatus,
        initialWords: number,
        overallWordTarget: number,
        wordsPerPage: number,
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
      projectSessionsId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSessionsQueryVariables = {
  filter?: ModelSessionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSessionsQuery = {
  syncSessions?:  {
    __typename: "ModelSessionConnection",
    items:  Array< {
      __typename: "Session",
      id: string,
      words: number,
      minutes: number,
      date: string,
      project:  {
        __typename: "Project",
        id: string,
        title: string,
        description: string,
        type: ProjectType,
        status: ProjectStatus,
        initialWords: number,
        overallWordTarget: number,
        wordsPerPage: number,
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
      projectSessionsId: string,
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

export type GetAwardQueryVariables = {
  id: string,
};

export type GetAwardQuery = {
  getAward?:  {
    __typename: "Award",
    id: string,
    category: AwardCategory,
    type: AwardType,
    date: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListAwardsQueryVariables = {
  filter?: ModelAwardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAwardsQuery = {
  listAwards?:  {
    __typename: "ModelAwardConnection",
    items:  Array< {
      __typename: "Award",
      id: string,
      category: AwardCategory,
      type: AwardType,
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

export type SyncAwardsQueryVariables = {
  filter?: ModelAwardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAwardsQuery = {
  syncAwards?:  {
    __typename: "ModelAwardConnection",
    items:  Array< {
      __typename: "Award",
      id: string,
      category: AwardCategory,
      type: AwardType,
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
    title: string,
    description: string,
    type: ProjectType,
    status: ProjectStatus,
    initialWords: number,
    overallWordTarget: number,
    wordTarget:  {
      __typename: "WeeklyTarget",
      mon:  {
        __typename: "TargetByDay",
        enabled: boolean,
        words: number,
      },
      tue:  {
        __typename: "TargetByDay",
        enabled: boolean,
        words: number,
      },
      wed:  {
        __typename: "TargetByDay",
        enabled: boolean,
        words: number,
      },
      thu:  {
        __typename: "TargetByDay",
        enabled: boolean,
        words: number,
      },
      fri:  {
        __typename: "TargetByDay",
        enabled: boolean,
        words: number,
      },
      sat:  {
        __typename: "TargetByDay",
        enabled: boolean,
        words: number,
      },
      sun:  {
        __typename: "TargetByDay",
        enabled: boolean,
        words: number,
      },
    },
    wordsPerPage: number,
    sessions?:  {
      __typename: "ModelSessionConnection",
      items:  Array< {
        __typename: "Session",
        id: string,
        words: number,
        minutes: number,
        date: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        projectSessionsId: string,
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
    title: string,
    description: string,
    type: ProjectType,
    status: ProjectStatus,
    initialWords: number,
    overallWordTarget: number,
    wordTarget:  {
      __typename: "WeeklyTarget",
      mon:  {
        __typename: "TargetByDay",
        enabled: boolean,
        words: number,
      },
      tue:  {
        __typename: "TargetByDay",
        enabled: boolean,
        words: number,
      },
      wed:  {
        __typename: "TargetByDay",
        enabled: boolean,
        words: number,
      },
      thu:  {
        __typename: "TargetByDay",
        enabled: boolean,
        words: number,
      },
      fri:  {
        __typename: "TargetByDay",
        enabled: boolean,
        words: number,
      },
      sat:  {
        __typename: "TargetByDay",
        enabled: boolean,
        words: number,
      },
      sun:  {
        __typename: "TargetByDay",
        enabled: boolean,
        words: number,
      },
    },
    wordsPerPage: number,
    sessions?:  {
      __typename: "ModelSessionConnection",
      items:  Array< {
        __typename: "Session",
        id: string,
        words: number,
        minutes: number,
        date: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        projectSessionsId: string,
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
    title: string,
    description: string,
    type: ProjectType,
    status: ProjectStatus,
    initialWords: number,
    overallWordTarget: number,
    wordTarget:  {
      __typename: "WeeklyTarget",
      mon:  {
        __typename: "TargetByDay",
        enabled: boolean,
        words: number,
      },
      tue:  {
        __typename: "TargetByDay",
        enabled: boolean,
        words: number,
      },
      wed:  {
        __typename: "TargetByDay",
        enabled: boolean,
        words: number,
      },
      thu:  {
        __typename: "TargetByDay",
        enabled: boolean,
        words: number,
      },
      fri:  {
        __typename: "TargetByDay",
        enabled: boolean,
        words: number,
      },
      sat:  {
        __typename: "TargetByDay",
        enabled: boolean,
        words: number,
      },
      sun:  {
        __typename: "TargetByDay",
        enabled: boolean,
        words: number,
      },
    },
    wordsPerPage: number,
    sessions?:  {
      __typename: "ModelSessionConnection",
      items:  Array< {
        __typename: "Session",
        id: string,
        words: number,
        minutes: number,
        date: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        projectSessionsId: string,
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

export type OnCreateSessionSubscriptionVariables = {
  filter?: ModelSubscriptionSessionFilterInput | null,
  owner?: string | null,
};

export type OnCreateSessionSubscription = {
  onCreateSession?:  {
    __typename: "Session",
    id: string,
    words: number,
    minutes: number,
    date: string,
    project:  {
      __typename: "Project",
      id: string,
      title: string,
      description: string,
      type: ProjectType,
      status: ProjectStatus,
      initialWords: number,
      overallWordTarget: number,
      wordTarget:  {
        __typename: "WeeklyTarget",
      },
      wordsPerPage: number,
      sessions?:  {
        __typename: "ModelSessionConnection",
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
    projectSessionsId: string,
  } | null,
};

export type OnUpdateSessionSubscriptionVariables = {
  filter?: ModelSubscriptionSessionFilterInput | null,
  owner?: string | null,
};

export type OnUpdateSessionSubscription = {
  onUpdateSession?:  {
    __typename: "Session",
    id: string,
    words: number,
    minutes: number,
    date: string,
    project:  {
      __typename: "Project",
      id: string,
      title: string,
      description: string,
      type: ProjectType,
      status: ProjectStatus,
      initialWords: number,
      overallWordTarget: number,
      wordTarget:  {
        __typename: "WeeklyTarget",
      },
      wordsPerPage: number,
      sessions?:  {
        __typename: "ModelSessionConnection",
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
    projectSessionsId: string,
  } | null,
};

export type OnDeleteSessionSubscriptionVariables = {
  filter?: ModelSubscriptionSessionFilterInput | null,
  owner?: string | null,
};

export type OnDeleteSessionSubscription = {
  onDeleteSession?:  {
    __typename: "Session",
    id: string,
    words: number,
    minutes: number,
    date: string,
    project:  {
      __typename: "Project",
      id: string,
      title: string,
      description: string,
      type: ProjectType,
      status: ProjectStatus,
      initialWords: number,
      overallWordTarget: number,
      wordTarget:  {
        __typename: "WeeklyTarget",
      },
      wordsPerPage: number,
      sessions?:  {
        __typename: "ModelSessionConnection",
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
    projectSessionsId: string,
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

export type OnCreateAwardSubscriptionVariables = {
  filter?: ModelSubscriptionAwardFilterInput | null,
  owner?: string | null,
};

export type OnCreateAwardSubscription = {
  onCreateAward?:  {
    __typename: "Award",
    id: string,
    category: AwardCategory,
    type: AwardType,
    date: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateAwardSubscriptionVariables = {
  filter?: ModelSubscriptionAwardFilterInput | null,
  owner?: string | null,
};

export type OnUpdateAwardSubscription = {
  onUpdateAward?:  {
    __typename: "Award",
    id: string,
    category: AwardCategory,
    type: AwardType,
    date: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteAwardSubscriptionVariables = {
  filter?: ModelSubscriptionAwardFilterInput | null,
  owner?: string | null,
};

export type OnDeleteAwardSubscription = {
  onDeleteAward?:  {
    __typename: "Award",
    id: string,
    category: AwardCategory,
    type: AwardType,
    date: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
