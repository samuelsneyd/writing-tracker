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
      name
      description
      projectType
      status
      wordTarget {
        mon {
          enabled
          words
        }
        tue {
          enabled
          words
        }
        wed {
          enabled
          words
        }
        thu {
          enabled
          words
        }
        fri {
          enabled
          words
        }
        sat {
          enabled
          words
        }
        sun {
          enabled
          words
        }
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
        }
        nextToken
        startedAt
      }
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      name
      description
      projectType
      status
      wordTarget {
        mon {
          enabled
          words
        }
        tue {
          enabled
          words
        }
        wed {
          enabled
          words
        }
        thu {
          enabled
          words
        }
        fri {
          enabled
          words
        }
        sat {
          enabled
          words
        }
        sun {
          enabled
          words
        }
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
        }
        nextToken
        startedAt
      }
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      name
      description
      projectType
      status
      wordTarget {
        mon {
          enabled
          words
        }
        tue {
          enabled
          words
        }
        wed {
          enabled
          words
        }
        thu {
          enabled
          words
        }
        fri {
          enabled
          words
        }
        sat {
          enabled
          words
        }
        sun {
          enabled
          words
        }
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
        }
        nextToken
        startedAt
      }
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        name
        description
        projectType
        status
        wordsPerPage
        sessions {
          nextToken
          startedAt
        }
        owner
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      projectSessionsId
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
        name
        description
        projectType
        status
        wordsPerPage
        sessions {
          nextToken
          startedAt
        }
        owner
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      projectSessionsId
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
        name
        description
        projectType
        status
        wordsPerPage
        sessions {
          nextToken
          startedAt
        }
        owner
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      projectSessionsId
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
    }
  }
`;
