/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject(
    $filter: ModelSubscriptionProjectFilterInput
    $owner: String
  ) {
    onCreateProject(filter: $filter, owner: $owner) {
      id
      name
      projectType
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject(
    $filter: ModelSubscriptionProjectFilterInput
    $owner: String
  ) {
    onUpdateProject(filter: $filter, owner: $owner) {
      id
      name
      projectType
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject(
    $filter: ModelSubscriptionProjectFilterInput
    $owner: String
  ) {
    onDeleteProject(filter: $filter, owner: $owner) {
      id
      name
      projectType
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
export const onCreateSession = /* GraphQL */ `
  subscription OnCreateSession(
    $filter: ModelSubscriptionSessionFilterInput
    $owner: String
  ) {
    onCreateSession(filter: $filter, owner: $owner) {
      id
      words
      minutes
      date
      project {
        id
        name
        projectType
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
export const onUpdateSession = /* GraphQL */ `
  subscription OnUpdateSession(
    $filter: ModelSubscriptionSessionFilterInput
    $owner: String
  ) {
    onUpdateSession(filter: $filter, owner: $owner) {
      id
      words
      minutes
      date
      project {
        id
        name
        projectType
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
export const onDeleteSession = /* GraphQL */ `
  subscription OnDeleteSession(
    $filter: ModelSubscriptionSessionFilterInput
    $owner: String
  ) {
    onDeleteSession(filter: $filter, owner: $owner) {
      id
      words
      minutes
      date
      project {
        id
        name
        projectType
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
export const onCreateLoginDate = /* GraphQL */ `
  subscription OnCreateLoginDate(
    $filter: ModelSubscriptionLoginDateFilterInput
    $owner: String
  ) {
    onCreateLoginDate(filter: $filter, owner: $owner) {
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
export const onUpdateLoginDate = /* GraphQL */ `
  subscription OnUpdateLoginDate(
    $filter: ModelSubscriptionLoginDateFilterInput
    $owner: String
  ) {
    onUpdateLoginDate(filter: $filter, owner: $owner) {
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
export const onDeleteLoginDate = /* GraphQL */ `
  subscription OnDeleteLoginDate(
    $filter: ModelSubscriptionLoginDateFilterInput
    $owner: String
  ) {
    onDeleteLoginDate(filter: $filter, owner: $owner) {
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
