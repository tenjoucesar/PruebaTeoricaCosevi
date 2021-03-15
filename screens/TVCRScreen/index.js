import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const TVCRScreen = ({navigation, route}) => (
  <View style={styles.container}>
    <WebView
        source={{ uri: 'https://appgallery.huawei.com/app/C103273903' }}
        style={{ marginTop: 20 }}
      />
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
});
