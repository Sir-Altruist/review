import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AboutScreen } from '../screens';

const Stack = createNativeStackNavigator();
const AboutRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='About Route'
        component={AboutScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AboutRoutes;
