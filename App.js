import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { ExploreScreen } from './screens/ExploreScreen';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ExploreScreen" screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Explore Screen"
          component={ExploreScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}