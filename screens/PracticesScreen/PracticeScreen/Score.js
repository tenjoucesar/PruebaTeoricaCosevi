import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MainButton } from 'Components/Buttons';

const ScoreComponent = ({navigation, score}) => {
  const scoreObtained = (score/40) * 100;
  return(
    <View style={styles.container}>
      <Text style={styles.infoText}>
        Gracias por completar el examen
      </Text>
      <Text style={styles.infoText}>
        Tu calificación es de:
      </Text>
      <Text style={styles.infoText}>
        <Text style={styles.redText}>{scoreObtained}</Text> puntos de
        <Text style={styles.redText}> 100 </Text>
        posibles
      </Text>
      <MainButton onPress={() => navigation.navigate('PracticeScreenInfo')}>
        Realizar otro examen
      </MainButton>
    </View>
  )
}

export default ScoreComponent

const styles = StyleSheet.create({
  container: {
		marginTop: 40,
  },
  infoText: {
    color: 'white',
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center'
  },
  redText: {
    color: 'red',
  },
});
