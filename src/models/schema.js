export const schema = {
    "models": {
        "Project": {
            "name": "Project",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "title": {
                    "name": "title",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "ProjectType"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": {
                        "enum": "ProjectStatus"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "initialWords": {
                    "name": "initialWords",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "overallWordTarget": {
                    "name": "overallWordTarget",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "wordTarget": {
                    "name": "wordTarget",
                    "isArray": false,
                    "type": {
                        "nonModel": "WeeklyTarget"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "wordsPerPage": {
                    "name": "wordsPerPage",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "sessions": {
                    "name": "sessions",
                    "isArray": true,
                    "type": {
                        "model": "Session"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "projectSessionsId"
                    }
                },
                "owner": {
                    "name": "owner",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Projects",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "userPools",
                                "ownerField": "owner",
                                "allow": "owner",
                                "identityClaim": "cognito:username",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Session": {
            "name": "Session",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "words": {
                    "name": "words",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "minutes": {
                    "name": "minutes",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "date": {
                    "name": "date",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "project": {
                    "name": "project",
                    "isArray": false,
                    "type": {
                        "model": "Project"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "projectSessionsId"
                    }
                },
                "owner": {
                    "name": "owner",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Sessions",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "userPools",
                                "ownerField": "owner",
                                "allow": "owner",
                                "identityClaim": "cognito:username",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "LoginDate": {
            "name": "LoginDate",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "date": {
                    "name": "date",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "owner": {
                    "name": "owner",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "LoginDates",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "userPools",
                                "ownerField": "owner",
                                "allow": "owner",
                                "identityClaim": "cognito:username",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Award": {
            "name": "Award",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "category": {
                    "name": "category",
                    "isArray": false,
                    "type": {
                        "enum": "AwardCategory"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "AwardType"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "date": {
                    "name": "date",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "owner": {
                    "name": "owner",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Awards",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "userPools",
                                "ownerField": "owner",
                                "allow": "owner",
                                "identityClaim": "cognito:username",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "ProjectType": {
            "name": "ProjectType",
            "values": [
                "BOOK",
                "JOURNAL",
                "BLOG",
                "OTHER"
            ]
        },
        "ProjectStatus": {
            "name": "ProjectStatus",
            "values": [
                "IN_PROGRESS",
                "ON_HOLD",
                "COMPLETED"
            ]
        },
        "AwardCategory": {
            "name": "AwardCategory",
            "values": [
                "DAILY_STREAK",
                "EARLY_BIRD",
                "NIGHT_OWL",
                "OVERACHIEVER",
                "FINISHER",
                "GENERAL",
                "WRITER"
            ]
        },
        "AwardType": {
            "name": "AwardType",
            "values": [
                "DAILY_STREAK_1",
                "DAILY_STREAK_2",
                "DAILY_STREAK_3",
                "DAILY_STREAK_4",
                "DAILY_STREAK_5",
                "DAILY_STREAK_6",
                "DAILY_STREAK_7",
                "DAILY_STREAK_8",
                "EARLY_BIRD_1",
                "EARLY_BIRD_2",
                "EARLY_BIRD_3",
                "EARLY_BIRD_4",
                "NIGHT_OWL_1",
                "NIGHT_OWL_2",
                "NIGHT_OWL_3",
                "NIGHT_OWL_4",
                "OVERACHIEVER_1",
                "OVERACHIEVER_2",
                "OVERACHIEVER_3",
                "OVERACHIEVER_4",
                "FINISHER_1",
                "FINISHER_2",
                "FINISHER_3",
                "FINISHER_4",
                "WRITER_1",
                "WRITER_2",
                "WRITER_3",
                "WRITER_4",
                "WRITER_5",
                "WRITER_6",
                "WRITER_7",
                "WRITER_8"
            ]
        }
    },
    "nonModels": {
        "TargetByDay": {
            "name": "TargetByDay",
            "fields": {
                "enabled": {
                    "name": "enabled",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "words": {
                    "name": "words",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "WeeklyTarget": {
            "name": "WeeklyTarget",
            "fields": {
                "mon": {
                    "name": "mon",
                    "isArray": false,
                    "type": {
                        "nonModel": "TargetByDay"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "tue": {
                    "name": "tue",
                    "isArray": false,
                    "type": {
                        "nonModel": "TargetByDay"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "wed": {
                    "name": "wed",
                    "isArray": false,
                    "type": {
                        "nonModel": "TargetByDay"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "thu": {
                    "name": "thu",
                    "isArray": false,
                    "type": {
                        "nonModel": "TargetByDay"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "fri": {
                    "name": "fri",
                    "isArray": false,
                    "type": {
                        "nonModel": "TargetByDay"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "sat": {
                    "name": "sat",
                    "isArray": false,
                    "type": {
                        "nonModel": "TargetByDay"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "sun": {
                    "name": "sun",
                    "isArray": false,
                    "type": {
                        "nonModel": "TargetByDay"
                    },
                    "isRequired": true,
                    "attributes": []
                }
            }
        }
    },
    "codegenVersion": "3.4.4",
    "version": "1f73c6fc0e87e974cb476eab804294e8"
};