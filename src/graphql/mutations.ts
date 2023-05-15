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
      projectType
      wordCounts {
        items {
          id
          words
          date
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
      writingTimes {
        items {
          id
          minutes
          date
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          projectWritingTimesId
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
      projectType
      wordCounts {
        items {
          id
          words
          date
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
      writingTimes {
        items {
          id
          minutes
          date
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          projectWritingTimesId
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
      projectType
      wordCounts {
        items {
          id
          words
          date
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
      writingTimes {
        items {
          id
          minutes
          date
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          projectWritingTimesId
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
      date
      project {
        id
        name
        projectType
        wordCounts {
          nextToken
          startedAt
        }
        writingTimes {
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
export const updateWordCount = /* GraphQL */ `
  mutation UpdateWordCount(
    $input: UpdateWordCountInput!
    $condition: ModelWordCountConditionInput
  ) {
    updateWordCount(input: $input, condition: $condition) {
      id
      words
      date
      project {
        id
        name
        projectType
        wordCounts {
          nextToken
          startedAt
        }
        writingTimes {
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
export const deleteWordCount = /* GraphQL */ `
  mutation DeleteWordCount(
    $input: DeleteWordCountInput!
    $condition: ModelWordCountConditionInput
  ) {
    deleteWordCount(input: $input, condition: $condition) {
      id
      words
      date
      project {
        id
        name
        projectType
        wordCounts {
          nextToken
          startedAt
        }
        writingTimes {
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
export const createTimeWriting = /* GraphQL */ `
  mutation CreateTimeWriting(
    $input: CreateTimeWritingInput!
    $condition: ModelTimeWritingConditionInput
  ) {
    createTimeWriting(input: $input, condition: $condition) {
      id
      minutes
      date
      project {
        id
        name
        projectType
        wordCounts {
          nextToken
          startedAt
        }
        writingTimes {
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
      projectWritingTimesId
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
      date
      project {
        id
        name
        projectType
        wordCounts {
          nextToken
          startedAt
        }
        writingTimes {
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
      projectWritingTimesId
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
      date
      project {
        id
        name
        projectType
        wordCounts {
          nextToken
          startedAt
        }
        writingTimes {
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
      projectWritingTimesId
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
