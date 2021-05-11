import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {CONTACT_LIST, CONTACT_DETAILS, CREATE_CONTACT, SETTINGS} from '../constants/routesNames';
import Contacts from '../screens/Contacts/index';
import ContactDetails from '../screens/ContactDetail/index';
import CreateContact from '../screens/CreateContact/index';
import Settings from '../screens/Settings/index';



const HomeStack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
      <HomeStack.Screen name={CONTACT_LIST} component={Contacts} />
      <HomeStack.Screen name={CONTACT_DETAILS} component={ContactDetails} />
      <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact} />
      <HomeStack.Screen name={SETTINGS} component={Settings} />
    </HomeStack.Navigator>
  );
}

export default HomeNavigator;