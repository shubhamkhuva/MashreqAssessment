import Dashboard from '../../screens/Dashboard';
import ErrorScreen from '../../screens/ErrorScreen';
import Login from '../../screens/Login';
import {PaperProvider, theme} from '../theme';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from '../../screens/Register';
import {Toasts} from '@backpackapp-io/react-native-toast';

function Setup(): React.JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="*" component={ErrorScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toasts />
    </PaperProvider>
  );
}
export default Setup;
