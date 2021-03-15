import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import TVCRScreen from 'Screens/TVCRScreen';

const Stack = createStackNavigator();

const TVCRScreenStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name='TVCRScreen'
      component={TVCRScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default TVCRScreenStack;