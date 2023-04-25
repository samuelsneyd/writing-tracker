import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';
import { withAuthenticator } from 'aws-amplify-react-native';
import { DataStore } from 'aws-amplify';
import { Book } from './models';

const saveBook = async () => {
  try {
    const book = await DataStore.save(
      new Book({
        name: 'A New Book',
      }),
    );
    console.log('Book saved successfully!', book);
  } catch (error) {
    console.log('Error saving book', error);
  }
};

const fetchBooks = async () => {
  try {
    const books = await DataStore.query(Book);
    console.log('Posts retrieved successfully!', JSON.stringify(books, null, 2));
  } catch (error) {
    console.log('Error retrieving books', error);
  }
};

const App = () => {
  return (
    <NavigationContainer>
      <View>
        <Text>Hello there.</Text>
        <Button title="Add Data" onPress={saveBook} />
        <Button title="Fetch Data" onPress={fetchBooks} />
      </View>
    </NavigationContainer>
  );
};

export default withAuthenticator(App);
