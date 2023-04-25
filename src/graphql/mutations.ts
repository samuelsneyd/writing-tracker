/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBook = /* GraphQL */ `
  mutation CreateBook(
    $input: CreateBookInput!
    $condition: ModelBookConditionInput
  ) {
    createBook(input: $input, condition: $condition) {
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
export const updateBook = /* GraphQL */ `
  mutation UpdateBook(
    $input: UpdateBookInput!
    $condition: ModelBookConditionInput
  ) {
    updateBook(input: $input, condition: $condition) {
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
export const deleteBook = /* GraphQL */ `
  mutation DeleteBook(
    $input: DeleteBookInput!
    $condition: ModelBookConditionInput
  ) {
    deleteBook(input: $input, condition: $condition) {
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
export const createWordCount = /* GraphQL */ `
  mutation CreateWordCount(
    $input: CreateWordCountInput!
    $condition: ModelWordCountConditionInput
  ) {
    createWordCount(input: $input, condition: $condition) {
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
export const updateWordCount = /* GraphQL */ `
  mutation UpdateWordCount(
    $input: UpdateWordCountInput!
    $condition: ModelWordCountConditionInput
  ) {
    updateWordCount(input: $input, condition: $condition) {
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
export const deleteWordCount = /* GraphQL */ `
  mutation DeleteWordCount(
    $input: DeleteWordCountInput!
    $condition: ModelWordCountConditionInput
  ) {
    deleteWordCount(input: $input, condition: $condition) {
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
export const createTimeWriting = /* GraphQL */ `
  mutation CreateTimeWriting(
    $input: CreateTimeWritingInput!
    $condition: ModelTimeWritingConditionInput
  ) {
    createTimeWriting(input: $input, condition: $condition) {
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
export const updateTimeWriting = /* GraphQL */ `
  mutation UpdateTimeWriting(
    $input: UpdateTimeWritingInput!
    $condition: ModelTimeWritingConditionInput
  ) {
    updateTimeWriting(input: $input, condition: $condition) {
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
export const deleteTimeWriting = /* GraphQL */ `
  mutation DeleteTimeWriting(
    $input: DeleteTimeWritingInput!
    $condition: ModelTimeWritingConditionInput
  ) {
    deleteTimeWriting(input: $input, condition: $condition) {
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
