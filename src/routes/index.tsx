import React, { useLayoutEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, PersonDetsilsScreen, ActivitiesScreen, DealsScreen } from '../screens';
import { useNetInfo } from "@react-native-community/netinfo";
import { useDispatch } from 'react-redux';
import ScreenNames from './routes';
import { removePerson } from '../store/slices/person';
const Stack = createNativeStackNavigator();
const Routes = () => {
  const disptach = useDispatch()
  const netInfo = useNetInfo();
  useLayoutEffect(() => {
    if (netInfo?.isConnected) {
      disptach(removePerson())
    }
  }, [])
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
