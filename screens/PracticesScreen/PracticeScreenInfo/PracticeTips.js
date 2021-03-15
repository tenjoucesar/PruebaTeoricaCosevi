import React from 'react';
import { StyleSheet, Text, View, ImageBackground, } from 'react-native';
import jonaPractice from 'Images/jona-practice.jpg';

const PracticeTips = () => (
  <View style={styles.tipsContainer}>
    <View style={{ width: '60%', paddingHorizontal: 15, }}>
      <Text style={styles.mainTip}>Tips</Text>
      <View style={styles.rowContainer}>
        <Text style={[styles.tipText, {color: 'black' }]}>1-</Text>
        <Text style={[styles.tipText, { marginLeft: 8, color: 'red' }]}>Lee bien la pregunta</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={[styles.tipText, {color: 'black' }]}>2-</Text>
        <Text style={[styles.tipText, { marginLeft: 8, color: 'green' }]}>Calcula el tiempo para responder</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={[styles.tipText, {color: 'black' }]}>3-</Text>
        <Text style={[styles.tipText, { marginLeft: 8, color: 'blue' }]}>Si no sabes la respuesta de la pregunta descarta entre las opciones</Text>
      </View>
    </View>
    <ImageBackground source={jonaPractice} style={styles.cardImage} />
  </View>
);

export default PracticeTips;

const styles = StyleSheet.create({
  tipsContainer: {
    backgroundColor: 'white',
    marginLeft: 0,
    marginTop: 30,
    display: 'flex',
    flexDirection: 'row'
  },
  tipText: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'left'
  },
  mainTip: {
    color: 'black',
    fontSize: 28,
    marginBottom: 20,
  },
  rowContainer: {
    display: 'flex', flexDirection: 'row'
  },
  cardImage: {
    minWidth: 140,
    width: 170,
  },
});
