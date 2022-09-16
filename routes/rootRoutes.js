import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeRoutes from './homeRoutes';
import AboutRoutes from './aboutRoutes';

const Drawer = createDrawerNavigator();

const RootRoutes = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        useLegacyImplementation
        screenOptions={{
          headerStyle: {
            backgroundColor: '#eee',
            height: 70,
          },
        }}
      >
        <Drawer.Screen
          name='Home'
          component={HomeRoutes}
          options={{
            headerTitleAlign: 'center',
            headerTitle: 'Review App',
          }}
        />
        <Drawer.Screen
          name='About'
          component={AboutRoutes}
          options={{
            headerTitleAlign: 'center',
            headerTitle: 'Review App',
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootRoutes;
