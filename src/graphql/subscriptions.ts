/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBook = /* GraphQL */ `
  subscription OnCreateBook(
    $filter: ModelSubscriptionBookFilterInput
    $owner: String
  ) {
    onCreateBook(filter: $filter, owner: $owner) {
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
export const onUpdateBook = /* GraphQL */ `
  subscription OnUpdateBook(
    $filter: ModelSubscriptionBookFilterInput
    $owner: String
  ) {
    onUpdateBook(filter: $filter, owner: $owner) {
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
export const onDeleteBook = /* GraphQL */ `
  subscription OnDeleteBook(
    $filter: ModelSubscriptionBookFilterInput
    $owner: String
  ) {
    onDeleteBook(filter: $filter, owner: $owner) {
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
export const onCreateWordCount = /* GraphQL */ `
  subscription OnCreateWordCount(
    $filter: ModelSubscriptionWordCountFilterInput
    $owner: String
  ) {
    onCreateWordCount(filter: $filter, owner: $owner) {
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
export const onUpdateWordCount = /* GraphQL */ `
  subscription OnUpdateWordCount(
    $filter: ModelSubscriptionWordCountFilterInput
    $owner: String
  ) {
    onUpdateWordCount(filter: $filter, owner: $owner) {
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
export const onDeleteWordCount = /* GraphQL */ `
  subscription OnDeleteWordCount(
    $filter: ModelSubscriptionWordCountFilterInput
    $owner: String
  ) {
    onDeleteWordCount(filter: $filter, owner: $owner) {
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
export const onCreateTimeWriting = /* GraphQL */ `
  subscription OnCreateTimeWriting(
    $filter: ModelSubscriptionTimeWritingFilterInput
    $owner: String
  ) {
    onCreateTimeWriting(filter: $filter, owner: $owner) {
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
export const onUpdateTimeWriting = /* GraphQL */ `
  subscription OnUpdateTimeWriting(
    $filter: ModelSubscriptionTimeWritingFilterInput
    $owner: String
  ) {
    onUpdateTimeWriting(filter: $filter, owner: $owner) {
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
export const onDeleteTimeWriting = /* GraphQL */ `
  subscription OnDeleteTimeWriting(
    $filter: ModelSubscriptionTimeWritingFilterInput
    $owner: String
  ) {
    onDeleteTimeWriting(filter: $filter, owner: $owner) {
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
