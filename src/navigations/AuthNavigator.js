import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {LOGIN, REGISTER} from '../constants/routesNames';
import Login from '../screens/Login/index';
import Register from '../screens/Register/index';



const AuthStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={LOGIN} component={Login} />
      <AuthStack.Screen name={REGISTER} component={Register} />
    </AuthStack.Navigator>
  );
}

export default AuthNavigator;