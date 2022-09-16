import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, ReviewScreen } from '../screens';

const Stack = createNativeStackNavigator();
const HomeRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home Stack'
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Review'
        component={ReviewScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeRoutes;
