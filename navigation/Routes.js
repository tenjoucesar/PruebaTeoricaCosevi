import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerContent from './CustomDrawer';
import HomeScreenStack from './Stacks/HomeScreenStack';
import TVCRScreenStack from './Stacks/TVCRScreenStack';
const Drawer = createDrawerNavigator();

const Routes = () => (
  <>
    <Drawer.Navigator
      initialRouteName='HomeScreen'
      headerMode="screen"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name='HomeScreen' component={HomeScreenStack}/>
      <Drawer.Screen name='TVCRScreen' component={TVCRScreenStack}/>
    </Drawer.Navigator>
  </>
);

export default Routes;