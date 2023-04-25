/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBook = /* GraphQL */ `
  query GetBook($id: ID!) {
    getBook(id: $id) {
      id
      name
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
          bookWordCountsId
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
          bookTimeSpentWritingId
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
export const listBooks = /* GraphQL */ `
  query ListBooks(
    $filter: ModelBookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
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
export const syncBooks = /* GraphQL */ `
  query SyncBooks(
    $filter: ModelBookFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBooks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
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
      book {
        id
        name
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
      bookWordCountsId
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
        book {
          id
          name
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
        bookWordCountsId
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
        book {
          id
          name
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
        bookWordCountsId
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
      book {
        id
        name
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
      bookTimeSpentWritingId
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
        book {
          id
          name
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
        bookTimeSpentWritingId
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
        book {
          id
          name
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
        bookTimeSpentWritingId
      }
      nextToken
      startedAt
    }
  }
`;
