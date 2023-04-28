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
      wordCounts {
        items {
          id
          words
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          projectWordCountsId
        }
        nextToken
        startedAt
      }
      TimeSpentWriting {
        items {
          id
          minutes
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          projectTimeSpentWritingId
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
      wordCounts {
        items {
          id
          words
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          projectWordCountsId
        }
        nextToken
        startedAt
      }
      TimeSpentWriting {
        items {
          id
          minutes
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          projectTimeSpentWritingId
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
      wordCounts {
        items {
          id
          words
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          projectWordCountsId
        }
        nextToken
        startedAt
      }
      TimeSpentWriting {
        items {
          id
          minutes
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          projectTimeSpentWritingId
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
export const onCreateWordCount = /* GraphQL */ `
  subscription OnCreateWordCount(
    $filter: ModelSubscriptionWordCountFilterInput
    $owner: String
  ) {
    onCreateWordCount(filter: $filter, owner: $owner) {
      id
      words
      project {
        id
        name
        projectType
        wordCounts {
          nextToken
          startedAt
        }
        TimeSpentWriting {
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
      projectWordCountsId
    }
  }
`;
export const onUpdateWordCount = /* GraphQL */ `
  subscription OnUpdateWordCount(
    $filter: ModelSubscriptionWordCountFilterInput
    $owner: String
  ) {
    onUpdateWordCount(filter: $filter, owner: $owner) {
      id
      words
      project {
        id
        name
        projectType
        wordCounts {
          nextToken
          startedAt
        }
        TimeSpentWriting {
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
      projectWordCountsId
    }
  }
`;
export const onDeleteWordCount = /* GraphQL */ `
  subscription OnDeleteWordCount(
    $filter: ModelSubscriptionWordCountFilterInput
    $owner: String
  ) {
    onDeleteWordCount(filter: $filter, owner: $owner) {
      id
      words
      project {
        id
        name
        projectType
        wordCounts {
          nextToken
          startedAt
        }
        TimeSpentWriting {
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
      projectWordCountsId
    }
  }
`;
export const onCreateTimeWriting = /* GraphQL */ `
  subscription OnCreateTimeWriting(
    $filter: ModelSubscriptionTimeWritingFilterInput
    $owner: String
  ) {
    onCreateTimeWriting(filter: $filter, owner: $owner) {
      id
      minutes
      project {
        id
        name
        projectType
        wordCounts {
          nextToken
          startedAt
        }
        TimeSpentWriting {
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
      projectTimeSpentWritingId
    }
  }
`;
export const onUpdateTimeWriting = /* GraphQL */ `
  subscription OnUpdateTimeWriting(
    $filter: ModelSubscriptionTimeWritingFilterInput
    $owner: String
  ) {
    onUpdateTimeWriting(filter: $filter, owner: $owner) {
      id
      minutes
      project {
        id
        name
        projectType
        wordCounts {
          nextToken
          startedAt
        }
        TimeSpentWriting {
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
      projectTimeSpentWritingId
    }
  }
`;
export const onDeleteTimeWriting = /* GraphQL */ `
  subscription OnDeleteTimeWriting(
    $filter: ModelSubscriptionTimeWritingFilterInput
    $owner: String
  ) {
    onDeleteTimeWriting(filter: $filter, owner: $owner) {
      id
      minutes
      project {
        id
        name
        projectType
        wordCounts {
          nextToken
          startedAt
        }
        TimeSpentWriting {
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
      projectTimeSpentWritingId
    }
  }
`;
