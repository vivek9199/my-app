/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './App/Screens'
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import reduxStore from './App/Redux/reduxConfig';
import { RootSiblingParent } from 'react-native-root-siblings';

const Stack = createStackNavigator();
const store = reduxStore()


const App = () => {
  return (
    <RootSiblingParent>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} 
             options={{
              headerShown: true,
              title: 'Home',
              headerStyle: { backgroundColor: '#fff' },
              headerTitleStyle: {
                alignSelf: "center",
              },
            }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </RootSiblingParent>
  );
};

export default App;
