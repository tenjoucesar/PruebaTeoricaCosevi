import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView, useWindowDimensions } from 'react-native';

import ObtenerCita from 'Images/obtener-cita.png'
import Practicas from 'Images/practicas.png'
import MaterialEstudio from 'Images/material-estudio.png';
import facebookImage from 'Images/facebook.png';

const HomeScreen = ({navigation, route}) => {
  const halfWidth = useWindowDimensions().width / 2 - 30;
  const windowHeight = useWindowDimensions().height;
  return (
    <ScrollView style={{flex: 1, }}>


      <View style={[styles.container, {height: windowHeight}]}>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Prueba Teórica CR</Text>
        </View>

          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={{width: halfWidth, marginRight: 5}}
              onPress={() => navigation.navigate('StudyMaterialScreen')}
            >
              <ImageBackground source={MaterialEstudio} style={styles.cardImage}/>
              <Text style={styles.cardText}>Material de Estudio</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{width: halfWidth}}
              onPress={() => navigation.navigate('PracticeScreenInfo')}
            >
              <ImageBackground source={Practicas} style={styles.cardImage}/>
              <Text style={styles.cardText}>Practicas</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.rowContainer}>
            <TouchableOpacity style={{width: halfWidth, marginRight: 5}}
              onPress={() => navigation.navigate('PruebaTeoricaMatriculaScreen')}
            >
              <ImageBackground source={ObtenerCita} style={styles.cardImage}/>
              <Text style={styles.cardText}>Obtener Cita</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width: halfWidth}}
              onPress={() => navigation.navigate('FacebookMOPTScreen')}
            >
              <ImageBackground source={facebookImage} style={styles.cardImage}/>
              <Text style={styles.cardText}>Oficial MOPT</Text>
            </TouchableOpacity>
          </View>
      </View>
    </ScrollView>
  )
};

export default HomeScreen;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  banner: {
    backgroundColor: '#F7D739',
    display: 'flex',
    height: 50,
  },
  bannerText: {
    fontSize: 30,
    textAlign: 'center',
  },
  rowContainer: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  cardText: {
    fontSize: 20,
    margin: 20,
    color: 'white',
    textAlign: 'center'
  },
  cardImage: {
    width: 'auto',
    height: 100
  },
});
