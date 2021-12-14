import React from 'react'
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import Context from './context'
import Routes from './routes';

function AppHome() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar style="auto" />
        <Context>
          <Routes />
        </Context>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default AppHome;