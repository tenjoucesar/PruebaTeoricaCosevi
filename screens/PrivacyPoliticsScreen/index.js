import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const TVCRScreen = ({navigation, route}) => (
  <View style={styles.container}>
    <Text style={[styles.politicText, {fontSize: 28}]}>POLÍTICA DE PRIVACIDAD</Text>
    <Text style={styles.politicText}>· La app contiene funciones sociales como por ejemplo chats que tienen como objetivo permitir compartir información entre los usuarios.</Text>
    <Text style={styles.politicText}>· En consecuencia la app puede solicitar al usuario que introduzca datos de carácter personal como por ejemplo fotografías o fecha de nacimiento.</Text>
    <Text style={styles.politicText}>· Estos datos de carácter personal se muestran a los otros usuarios de la app. Estos datos no se comparten con ninguna otra entidad o terceras organizaciones.</Text>
    <Text style={styles.politicText}>· El usuario puede eliminar sus datos de carácter personal dándose de baja de la app, mediante el enlace que hay para tal efecto en las opciones de perfil de usuario de la app.</Text>
    <Text style={styles.politicText}>· No se acepta la publicación de contenido sólo para adultos como, por ejemplo, imágenes con contenido sexual o imágenes de extrema violencia.</Text>
    <Text style={styles.politicText}>· Permitimos que terceras compañías publiquen anuncios y recopilen cierta información anónima cuando visite nuestra aplicación. Estas empresas pueden utilizar información anónima, como su ID de publicidad de Google, el tipo y la versión de su dispositivo, la actividad de navegación, la ubicación y otros datos técnicos relacionados con su dispositivo, a fin de proporcionar anuncios.</Text>
  </View>
);

export default TVCRScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  politicText: {
    color: 'white',
    fontSize: 14,
    marginBottom: 10,
  }
});
