import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomHeaderCustom = (props) => (
  <HeaderButton
    {...props}
    IconComponent={Icon}
    iconSize={23}
    color='white'
  />
);

export default CustomHeaderCustom;

export const MainButton = ({ children, onPress, disabled }) => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} disabled={disabled}>
      <View style={disabled ? styles.disabledBtn : styles.button}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

export const ExamnButton = ({ children, onPress, disabled, wrongAnswer, correctAnswer }) => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} disabled={disabled}>
      <View style={disabled ? styles.disabledBtn : styles.examnButton}>
        {disabled && wrongAnswer && <Icon name='times-circle' size={30} color='red' style={styles.icon}/>}
        {disabled && correctAnswer && <Icon name='check-circle' size={30} color='green' style={styles.icon}/>}
        {!disabled && <Text style={styles.examnButtonText}>{children}</Text>}
        {disabled && correctAnswer &&<Text style={styles.examnButtonTextDisabled}>{children}</Text>}
      </View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  button: {
    backgroundColor: '#3D3D3D',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
  },
  examnButton: {
    backgroundColor: '#3D3D3D',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  icon: {
    alignSelf: 'center'
  },
  disabledBtn: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#eaeaea',
  },
  buttonText: {
    color: 'white',
    fontSize: 32,
    textAlign: 'center'
  },
  examnButtonText: {
    color: 'white',
    fontSize: 22,
    textTransform: 'capitalize',
    textAlign: 'center'
  },
  examnButtonTextDisabled: {
    color: 'black',
    fontSize: 22,
    textTransform: 'capitalize',
    textAlign: 'center'
  }
});