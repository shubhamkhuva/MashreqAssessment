import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';
import Register from '../screens/Register';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ROUTER_PATH} from './routers';

const Stack = createStackNavigator<any>();

const Navigations = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name={ROUTER_PATH.LOGIN} component={Login} />
          <Stack.Screen name={ROUTER_PATH.REGISTER} component={Register} />
          <Stack.Screen name={ROUTER_PATH.DASHBOARD} component={Dashboard} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Navigations;
