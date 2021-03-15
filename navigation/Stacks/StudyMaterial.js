import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const StudyMaterialScreenStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name='DesiredPetQuestionScreen'
      component={}
      options={{
        headerTitle: 'Vamos a buscarte un amigo',
        headerTitleAlign:'center',
      }}
    />
    <Stack.Screen
      name='DesiredLocationQuestionScreen'
      component={}
      options={{
        headerTitle: 'Selecciona una Provincia',
        headerTitleAlign:'center',
      }}
    />
  </Stack.Navigator>
);

export default StudyMaterialScreenStack;