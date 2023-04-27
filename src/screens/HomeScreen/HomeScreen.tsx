import * as React from 'react';
import { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { DataStore } from 'aws-amplify';
import { Book } from '../../models';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/types';


const saveBook = async () => {
  try {
    const book = await DataStore.save(
      new Book({
        name: 'This is a Book',
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

/**
 * Wipes the local data store only, leaving the cloud store untouched.
 */
const wipeDataStore = async () => {
  try {
    await DataStore.clear();
  } catch (error) {
    console.log('Error wiping data', error);
  }
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const sub = DataStore.observeQuery(Book, book => book).subscribe(({ items }) => {
      setBooks(items);
    });

    return () => {
      sub.unsubscribe();
    };
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Add Data" onPress={saveBook} />
      <Button title="Fetch Data" onPress={fetchBooks} />
      <Button title="Wipe Local Data" onPress={wipeDataStore} />
      <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
      {books.map(book => <Text key={book.id}>{book.name}</Text>)}
    </View>
  );
};

export default HomeScreen;
