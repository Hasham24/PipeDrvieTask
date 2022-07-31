import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {HomeScreen,PersonDetsilsScreen,ActivitiesScreen,DealsScreen} from '../screens'
import ScreenNames from './routes';

const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={ScreenNames.HOME} component={HomeScreen} />
        <Stack.Screen name={ScreenNames.PERSONDETAILS} component={PersonDetsilsScreen} />
        <Stack.Screen name={ScreenNames.ACTIVITIES} component={ActivitiesScreen} />
        <Stack.Screen name={ScreenNames.DEALS} component={DealsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
export { default as ScreenNames } from './routes';
