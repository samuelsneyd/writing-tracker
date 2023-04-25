export const schema = {
  'models': {
    'Book': {
      'name': 'Book',
      'fields': {
        'id': {
          'name': 'id',
          'isArray': false,
          'type': 'ID',
          'isRequired': true,
          'attributes': [],
        },
        'name': {
          'name': 'name',
          'isArray': false,
          'type': 'String',
          'isRequired': true,
          'attributes': [],
        },
        'wordCounts': {
          'name': 'wordCounts',
          'isArray': true,
          'type': {
            'model': 'WordCount',
          },
          'isRequired': false,
          'attributes': [],
          'isArrayNullable': true,
          'association': {
            'connectionType': 'HAS_MANY',
            'associatedWith': 'bookWordCountsId',
          },
        },
        'TimeSpentWriting': {
          'name': 'TimeSpentWriting',
          'isArray': true,
          'type': {
            'model': 'TimeWriting',
          },
          'isRequired': false,
          'attributes': [],
          'isArrayNullable': true,
          'association': {
            'connectionType': 'HAS_MANY',
            'associatedWith': 'bookTimeSpentWritingId',
          },
        },
        'createdAt': {
          'name': 'createdAt',
          'isArray': false,
          'type': 'AWSDateTime',
          'isRequired': false,
          'attributes': [],
          'isReadOnly': true,
        },
        'updatedAt': {
          'name': 'updatedAt',
          'isArray': false,
          'type': 'AWSDateTime',
          'isRequired': false,
          'attributes': [],
          'isReadOnly': true,
        },
      },
      'syncable': true,
      'pluralName': 'Books',
      'attributes': [
        {
          'type': 'model',
          'properties': {},
        },
      ],
    },
    'WordCount': {
      'name': 'WordCount',
      'fields': {
        'id': {
          'name': 'id',
          'isArray': false,
          'type': 'ID',
          'isRequired': true,
          'attributes': [],
        },
        'words': {
          'name': 'words',
          'isArray': false,
          'type': 'Int',
          'isRequired': true,
          'attributes': [],
        },
        'book': {
          'name': 'book',
          'isArray': false,
          'type': {
            'model': 'Book',
          },
          'isRequired': false,
          'attributes': [],
          'association': {
            'connectionType': 'BELONGS_TO',
            'targetName': 'bookWordCountsId',
          },
        },
        'createdAt': {
          'name': 'createdAt',
          'isArray': false,
          'type': 'AWSDateTime',
          'isRequired': false,
          'attributes': [],
          'isReadOnly': true,
        },
        'updatedAt': {
          'name': 'updatedAt',
          'isArray': false,
          'type': 'AWSDateTime',
          'isRequired': false,
          'attributes': [],
          'isReadOnly': true,
        },
      },
      'syncable': true,
      'pluralName': 'WordCounts',
      'attributes': [
        {
          'type': 'model',
          'properties': {},
        },
      ],
    },
    'TimeWriting': {
      'name': 'TimeWriting',
      'fields': {
        'id': {
          'name': 'id',
          'isArray': false,
          'type': 'ID',
          'isRequired': true,
          'attributes': [],
        },
        'minutes': {
          'name': 'minutes',
          'isArray': false,
          'type': 'Int',
          'isRequired': true,
          'attributes': [],
        },
        'book': {
          'name': 'book',
          'isArray': false,
          'type': {
            'model': 'Book',
          },
          'isRequired': false,
          'attributes': [],
          'association': {
            'connectionType': 'BELONGS_TO',
            'targetName': 'bookTimeSpentWritingId',
          },
        },
        'createdAt': {
          'name': 'createdAt',
          'isArray': false,
          'type': 'AWSDateTime',
          'isRequired': false,
          'attributes': [],
          'isReadOnly': true,
        },
        'updatedAt': {
          'name': 'updatedAt',
          'isArray': false,
          'type': 'AWSDateTime',
          'isRequired': false,
          'attributes': [],
          'isReadOnly': true,
        },
      },
      'syncable': true,
      'pluralName': 'TimeWritings',
      'attributes': [
        {
          'type': 'model',
          'properties': {},
        },
      ],
    },
  },
  'enums': {},
  'nonModels': {},
  'codegenVersion': '3.4.2',
  'version': '2fd3bf3ec00d477473c1e06eb2063d09',
};
