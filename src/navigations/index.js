import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import DrawerNavigator from './DrawerNavigator';

const AppNavContainer = () => {

  const isLoggedIn = false;

  return (
    <NavigationContainer>

      {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}

    </NavigationContainer>
  )
}

export default AppNavContainer;