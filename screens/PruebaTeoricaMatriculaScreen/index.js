import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const PruebaTeoricaMatriculaScreen = ({navigation, route}) => (
  <View style={styles.container}>
    <WebView
        source={{ uri: 'https://servicios.educacionvial.go.cr/formularios/MatriculaPruebaTeorica' }}
        style={{ marginTop: 20 }}
      />
  </View>
);

export default PruebaTeoricaMatriculaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});
