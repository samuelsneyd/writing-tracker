import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { withAuthenticator } from 'aws-amplify-react-native';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import DetailsScreen from './screens/DetailsScreen/DetailsScreen';
import { RootStackParamList } from './types/types';


const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ title: 'Overview' }} component={HomeScreen} />
        <Stack.Screen name="Details" options={{ title: 'Details' }} component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default withAuthenticator(App);
