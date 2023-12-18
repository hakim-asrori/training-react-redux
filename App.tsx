/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import Home from './app/containers/Home';
import User from './app/containers/user/User';
import UserCreate from './app/containers/user/UserCreate';
import UserDetail from './app/containers/user/UserDetail';
import store from './app/redux/store/Index'

const HomeStack = createNativeStackNavigator()

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <HomeStack.Navigator initialRouteName='User'>
          <HomeStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <HomeStack.Screen name="User" component={User} options={{ headerShown: false }} />
          <HomeStack.Screen name="UserCreate" component={UserCreate} options={{ title: 'Add New User' }} />
          <HomeStack.Screen name="UserDetail" component={UserDetail} options={{ title: 'Detail User' }} />
        </HomeStack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;
