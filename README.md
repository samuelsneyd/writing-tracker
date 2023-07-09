# Writing Tracker

A native mobile application for writers and authors to set writing goals, track their words written and time spent
writing over time, and share achievements.

Writing Tracker is a productivity tool designed to assist writers in setting and achieving their word count goals.
It is aimed at indie authors and writers who wish to enhance their writing habits and productivity.

## Features

- Track words against your writing projects: books, stories, journals, blogs, and more
- Set daily, weekly, or monthly word count goals
- Track your progress towards your writing goals with detailed graphs and statistics
- Receive awards, badges, notifications, and reminders to keep you motivated and on track
- Analyze your writing statistics to gain insights into your productivity
- View your writing history and track your progress over time
- Customize your writing environment with themes and preferences

## Platforms

WritingTracker is a native mobile and tablet app developed using React Native.
It will be available for the following platforms:

- iOS
- Android

NOTE - this is still a work in progress and not yet released.
This page will be updated with download links when it's available.

## Technical Details

Tools and libraries used include:

- TypeScript
- React Native
- UI Kitten
- AWS (serverless)
    - Amplify
    - Lambda
    - DynamoDB
    - AppSync
    - GraphQL
    - Cognito

All backend services are hosted on AWS with Amplify, offering a streamlined setup and configuration process.
The backend will use serverless hosting, which will have minimal upfront cost while allowing future growth.
This hosting choice provides flexibility for future growth as the user base and application features expand.

# For devs

Install dependencies

    npm install

Start the Metro server

    npm start

Update and re-provision AWS backend services

    amplify push

## Tools

### React Native

React Native is the primary framework for creating native iOS and Android applications, with a TypeScript codebase.
The app was initialized with the React Native CLI, and does not use Expo.

### AWS Amplify

Amplify wraps several useful AWS services for mobile or web applications, and semi-automates provisioning AWS resources.

#### DataStore and Models

Querying the database goes through the DataStore API, which queries the local SQLite database.
The DataStore syncs with the AWS backend in the background via the defined AppSync APIs and has built-in offline
data-sync capabilities.
If the local device is offline, it will wait until it comes back online before querying the backend.

Database models are defined via a GraphQL schema.

Edit data store schemas in `amplify/backend/api/schema.graph.ql` then run

    amplify codegen && amplify codegen models

This auto-generates the models' code and type declarations.

#### DynamoDB

Amplify serializers the schema to a local SQLite database on the local device, and a DynamoDB no-SQL backend database
with an AppSync GraphQL API via auto-generated Cloud Formation templates.

#### Cognito

User authentication is all handled via Cognito, with users stored in User Pools.
Authentication and user pools are integrated with the database models.

## About the Author

WritingTracker is developed and maintained by Samuel Sneyd, a software developer living in Australia.
