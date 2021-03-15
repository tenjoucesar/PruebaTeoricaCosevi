import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { MainButton } from 'Components/Buttons';

import PracticeTips from 'Screens/PracticesScreen/PracticeScreenInfo/PracticeTips'

const PracticeScreenInfo = ( { navigation, route } ) => (
  <ScrollView style={{backgroundColor: 'black',}}>
    <PracticeTips />
    <View style={styles.container}>
      <Text style={styles.infoText}>Recuerda que para Aprobar la prueba tienes que tener una nota de 80 puntos.</Text>
      <Text style={styles.infoText}>Eso quiere decir que no puedes fallar mas de 8 preguntas, mucha suerte.</Text>
      <MainButton onPress={() => navigation.navigate('PracticeScreen')}>
        Comenzar
      </MainButton>
    </View>
  </ScrollView>
);

export default PracticeScreenInfo;

const styles = StyleSheet.create({
  container: {
    minHeight: 400,
    paddingHorizontal: 20,
    display: 'flex',
    justifyContent: 'flex-start',
    paddingTop: 0,
    alignItems: 'center',
  },
  infoText: {
    color: 'white',
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center'
  },
});
