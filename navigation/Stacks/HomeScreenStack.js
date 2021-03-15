import React from 'react'
import { Share } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Item, HeaderButtons } from 'react-navigation-header-buttons';
import HeaderButton from 'Components/Buttons';
import HomeScreen from 'Screens/HomeScreen';
import StudyMaterialScreen from 'Screens/StudyMaterialScreen';
import FacebookMOPTScreen from 'Screens/FacebookMOPTScreen';
import PruebaTeoricaMatriculaScreen from 'Screens/PruebaTeoricaMatriculaScreen';
import PrivacyPoliticsScreen from 'Screens/PrivacyPoliticsScreen';
import PracticeScreen from 'Screens/PracticesScreen/PracticeScreen';
import PracticeScreenInfo from 'Screens/PracticesScreen/PracticeScreenInfo';

const Stack = createStackNavigator();
const onShare = async () => {
  try {
    const result = await Share.share({
      message:'https://appgallery.huawei.com/#/app/C103055087?locale=es_US&source=appshare&subsource=C103055087',
      title: 'https://appgallery.huawei.com/#/app/C103055087?locale=es_US&source=appshare&subsource=C103055087',
      url: 'https://appgallery.huawei.com/#/app/C103055087?locale=es_US&source=appshare&subsource=C103055087'
    });

    // if (result.action === Share.sharedAction) {
    //   if (result.activityType) {
    //     //
    //     // shared with activity type of result.activityType
    //   } else {
    //     // shared
    //   }
    // } else if (result.action === Share.dismissedAction) {
    //   // dismissed
    // }
  } catch (error) {
    // alert(error.message);
  }
};

const HomeScreenStack = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: 'black', borderBottomWidth: 2, },
      headerTitle: '',
        headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="Menu"
              iconName="navicon"
              onPress={() => navigation.toggleDrawer()}
            />
          </HeaderButtons>
        ),
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="Menu"
              iconName="share-alt"
              onPress={onShare}
            />
          </HeaderButtons>
        ),
    }}
  >
    <Stack.Screen
      name='HomeMainScreen'
      component={HomeScreen}
    />
    <Stack.Screen
      name='StudyMaterialScreen'
      component={StudyMaterialScreen}
    />
    <Stack.Screen
      name='FacebookMOPTScreen'
      component={FacebookMOPTScreen}
    />
    <Stack.Screen
      name='PruebaTeoricaMatriculaScreen'
      component={PruebaTeoricaMatriculaScreen}
    />
    <Stack.Screen
      name='PrivacyPoliticsScreen'
      component={PrivacyPoliticsScreen}
    />
    <Stack.Screen
      name='PracticeScreen'
      component={PracticeScreen}
    />
    <Stack.Screen
      name='PracticeScreenInfo'
      component={PracticeScreenInfo}
    />
  </Stack.Navigator>
);

export default HomeScreenStack;
