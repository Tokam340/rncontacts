import 'react-native-gesture-handler';
import * as  React from 'react';
import AppNavContainer from './src/navigations/index';
import GlobalProvider from './src/context/Provider';

export default function App() {
  return (
    <GlobalProvider>
      <AppNavContainer/>
    </GlobalProvider>
  )
}
