import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerContent from '../components/DrawerContent';

import ProfileScreen from '../screen/ProfileScreen';

const Drawer = createDrawerNavigator();

function Routes() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Article" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

export default Routes;