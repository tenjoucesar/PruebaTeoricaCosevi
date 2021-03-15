import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';

const FacebookMOPTScreen = ({navigation, route}) => (
  <View style={styles.container}>
    <WebView
        source={{ uri: 'https://www.facebook.com/MOPTcostarica/' }}
        style={{ marginTop: 20 }}
      />
  </View>
);

export default FacebookMOPTScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});
