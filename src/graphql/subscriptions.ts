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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject(
    $filter: ModelSubscriptionProjectFilterInput
    $owner: String
  ) {
    onUpdateProject(filter: $filter, owner: $owner) {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject(
    $filter: ModelSubscriptionProjectFilterInput
    $owner: String
  ) {
    onDeleteProject(filter: $filter, owner: $owner) {
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
      __typename
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
      __typename
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
      __typename
    }
  }
`;
export const onCreateAward = /* GraphQL */ `
  subscription OnCreateAward(
    $filter: ModelSubscriptionAwardFilterInput
    $owner: String
  ) {
    onCreateAward(filter: $filter, owner: $owner) {
      id
      category
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
export const onUpdateAward = /* GraphQL */ `
  subscription OnUpdateAward(
    $filter: ModelSubscriptionAwardFilterInput
    $owner: String
  ) {
    onUpdateAward(filter: $filter, owner: $owner) {
      id
      category
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
export const onDeleteAward = /* GraphQL */ `
  subscription OnDeleteAward(
    $filter: ModelSubscriptionAwardFilterInput
    $owner: String
  ) {
    onDeleteAward(filter: $filter, owner: $owner) {
      id
      category
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
