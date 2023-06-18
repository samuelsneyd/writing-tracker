/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
      id
      title
      description
      type
      status
      initialWords
      overallWordTarget
      wordTarget {
        mon {
          enabled
          words
          __typename
        }
        tue {
          enabled
          words
          __typename
        }
        wed {
          enabled
          words
          __typename
        }
        thu {
          enabled
          words
          __typename
        }
        fri {
          enabled
          words
          __typename
        }
        sat {
          enabled
          words
          __typename
        }
        sun {
          enabled
          words
          __typename
        }
        __typename
      }
      wordsPerPage
      sessions {
        items {
          id
          words
          minutes
          date
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          projectSessionsId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
      id
      title
      description
      type
      status
      initialWords
      overallWordTarget
      wordTarget {
        mon {
          enabled
          words
          __typename
        }
        tue {
          enabled
          words
          __typename
        }
        wed {
          enabled
          words
          __typename
        }
        thu {
          enabled
          words
          __typename
        }
        fri {
          enabled
          words
          __typename
        }
        sat {
          enabled
          words
          __typename
        }
        sun {
          enabled
          words
          __typename
        }
        __typename
      }
      wordsPerPage
      sessions {
        items {
          id
          words
          minutes
          date
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          projectSessionsId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
      id
      title
      description
      type
      status
      initialWords
      overallWordTarget
      wordTarget {
        mon {
          enabled
          words
          __typename
        }
        tue {
          enabled
          words
          __typename
        }
        wed {
          enabled
          words
          __typename
        }
        thu {
          enabled
          words
          __typename
        }
        fri {
          enabled
          words
          __typename
        }
        sat {
          enabled
          words
          __typename
        }
        sun {
          enabled
          words
          __typename
        }
        __typename
      }
      wordsPerPage
      sessions {
        items {
          id
          words
          minutes
          date
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          projectSessionsId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createSession = /* GraphQL */ `
  mutation CreateSession(
    $input: CreateSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    createSession(input: $input, condition: $condition) {
      id
      words
      minutes
      date
      project {
        id
        title
        description
        type
        status
        initialWords
        overallWordTarget
        wordTarget {
          __typename
        }
        wordsPerPage
        sessions {
          nextToken
          startedAt
          __typename
        }
        owner
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      projectSessionsId
      __typename
    }
  }
`;
export const updateSession = /* GraphQL */ `
  mutation UpdateSession(
    $input: UpdateSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    updateSession(input: $input, condition: $condition) {
      id
      words
      minutes
      date
      project {
        id
        title
        description
        type
        status
        initialWords
        overallWordTarget
        wordTarget {
          __typename
        }
        wordsPerPage
        sessions {
          nextToken
          startedAt
          __typename
        }
        owner
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      projectSessionsId
      __typename
    }
  }
`;
export const deleteSession = /* GraphQL */ `
  mutation DeleteSession(
    $input: DeleteSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    deleteSession(input: $input, condition: $condition) {
      id
      words
      minutes
      date
      project {
        id
        title
        description
        type
        status
        initialWords
        overallWordTarget
        wordTarget {
          __typename
        }
        wordsPerPage
        sessions {
          nextToken
          startedAt
          __typename
        }
        owner
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      projectSessionsId
      __typename
    }
  }
`;
export const createLoginDate = /* GraphQL */ `
  mutation CreateLoginDate(
    $input: CreateLoginDateInput!
    $condition: ModelLoginDateConditionInput
  ) {
    createLoginDate(input: $input, condition: $condition) {
      id
      date
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateLoginDate = /* GraphQL */ `
  mutation UpdateLoginDate(
    $input: UpdateLoginDateInput!
    $condition: ModelLoginDateConditionInput
  ) {
    updateLoginDate(input: $input, condition: $condition) {
      id
      date
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteLoginDate = /* GraphQL */ `
  mutation DeleteLoginDate(
    $input: DeleteLoginDateInput!
    $condition: ModelLoginDateConditionInput
  ) {
    deleteLoginDate(input: $input, condition: $condition) {
      id
      date
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createAward = /* GraphQL */ `
  mutation CreateAward(
    $input: CreateAwardInput!
    $condition: ModelAwardConditionInput
  ) {
    createAward(input: $input, condition: $condition) {
      id
      type
      date
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateAward = /* GraphQL */ `
  mutation UpdateAward(
    $input: UpdateAwardInput!
    $condition: ModelAwardConditionInput
  ) {
    updateAward(input: $input, condition: $condition) {
      id
      type
      date
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteAward = /* GraphQL */ `
  mutation DeleteAward(
    $input: DeleteAwardInput!
    $condition: ModelAwardConditionInput
  ) {
    deleteAward(input: $input, condition: $condition) {
      id
      type
      date
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
