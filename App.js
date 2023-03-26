import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { SettingsScreen } from './screens/SettingsScreen';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SettingsScreen" screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Settings Screen"
          component={SettingsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}