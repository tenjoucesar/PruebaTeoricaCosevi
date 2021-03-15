  
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './Routes';

const StacksCollection = () =>(
  <NavigationContainer>
    <Routes />
  </NavigationContainer>
);

export default StacksCollection;