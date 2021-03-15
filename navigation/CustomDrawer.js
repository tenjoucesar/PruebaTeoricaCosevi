import React from 'react'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { View, Text, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

const CustomDrawerContent = ({navigation}) => (
  <View style={{flex: 1, backgroundColor: 'black'}}>
    <DrawerContentScrollView>
      <Text style={styles.title}>MENU</Text>
      <View style={styles.divisorLine} />
      <DrawerItem
        label="Inicio"
        labelStyle={{color: 'white', fontSize: 18}}
        icon={() => <Icon name="home" size={28} color="black" style={styles.icon} />}
        onPress={() => navigation.navigate('HomeMainScreen')}
      />
      <DrawerItem
        label="TV Costa Rica"
        labelStyle={{color: 'white', fontSize: 18}}
        icon={() => <Icon name="tv" size={24} color="black" style={styles.icon} />}
        onPress={() => navigation.navigate('TVCRScreen')}
      />
      <DrawerItem
        label="Política Privacidad"
        labelStyle={{color: 'white', fontSize: 18}}
        onPress={() => navigation.navigate('PrivacyPoliticsScreen')}
        icon={() => <Icon name="scroll" size={24} color="black" style={styles.icon}/>}
      />
    </DrawerContentScrollView>
  </View>
);

export default CustomDrawerContent;

const styles = StyleSheet.create({
  divisorLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#e2e2e2',
    marginTop: 15,
  },
  title: {
    textAlign: 'center',
    fontSize: 42,
    fontWeight: '700',
    marginTop: 10,
    marginRight: 10,
    color: 'white',
  },
  icon: {
    marginRight: -15,
    width: 30,
    color: 'white',
  },
});