import React from 'react';
import { StyleSheet } from 'react-native';

import { WebView } from 'react-native-webview';

const StudyMaterialScreen = ({navigation, route}) => (
  <WebView
    source={{ uri: 'https://drive.google.com/file/d/14ux5kbcNXTvGDy9HAJgBq00AAPnKqEia/view' }}
    style={{ marginTop: 20 }}
  />
);

export default StudyMaterialScreen;

const styles = StyleSheet.create({
  container: {
    height: 480,
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#F7D739',
    marginBottom: 20,
    minWidth: 250,
    // Convert this to ViewPort Width hook at future
    width: 280,
  },
  cardText: {
    fontSize: 20,
    margin: 'auto',
    marginLeft: 28,
    marginRight: 20,
    color: 'black',
    fontWeight: '700',
    textAlign: 'center',
  },
  cardImage: {
    minWidth: 140,
  },
});
