/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
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
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncProjects = /* GraphQL */ `
  query SyncProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProjects(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getWordCount = /* GraphQL */ `
  query GetWordCount($id: ID!) {
    getWordCount(id: $id) {
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
export const listWordCounts = /* GraphQL */ `
  query ListWordCounts(
    $filter: ModelWordCountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWordCounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        words
        project {
          id
          name
          projectType
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
      nextToken
      startedAt
    }
  }
`;
export const syncWordCounts = /* GraphQL */ `
  query SyncWordCounts(
    $filter: ModelWordCountFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWordCounts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        words
        project {
          id
          name
          projectType
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
      nextToken
      startedAt
    }
  }
`;
export const getTimeWriting = /* GraphQL */ `
  query GetTimeWriting($id: ID!) {
    getTimeWriting(id: $id) {
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
export const listTimeWritings = /* GraphQL */ `
  query ListTimeWritings(
    $filter: ModelTimeWritingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTimeWritings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        minutes
        project {
          id
          name
          projectType
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
      nextToken
      startedAt
    }
  }
`;
export const syncTimeWritings = /* GraphQL */ `
  query SyncTimeWritings(
    $filter: ModelTimeWritingFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTimeWritings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        minutes
        project {
          id
          name
          projectType
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
      nextToken
      startedAt
    }
  }
`;
