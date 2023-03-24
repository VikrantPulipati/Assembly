import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { AccountCreationScreen } from './screens/AccountCreationScreen';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen" screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Welcome Screen"
          component={WelcomeScreen}
        />
        <Stack.Screen
          name="Account Creation"
          component={AccountCreationScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}