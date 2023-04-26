import * as SplashScreen from 'expo-splash-screen';
import {  View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { ExploreScreen } from './screens/ExploreScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tabs from './navigation/tabs';
import { lightMode, darkMode } from './colors';

colorTheme = lightMode

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route  }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'example-explore-icon' : 'example-explore-icon';
            return <Image source={require('./assets/assembly_home.png')} style={{ width: size, height: size }} />;
          } else if (route.name === 'Explore') {
            iconName = focused ? 'example-settings-icon' : 'example-settings-icon';
            return <Image source={require('./assets/assembly_search.png')} style={{ width: size, height: size }} />;
          } else if (route.name === 'Groups') {
            iconName = focused ? 'example-welcome-icon' : 'example-welcome-icon';
            return <Image source={require('./assets/assembly_groups.png')} style={{ width: size, height: size }} />;
          } else if (route.name === 'Profile') {
            iconName = focused ? 'example-welcome-icon' : 'example-welcome-icon';
            return <Image source={require('./assets/assembly_blueprofile.png')} style={{ width: size, height: size }} />;
          }

         
          
        },
      })}
      tabBarActiveTintColor = {colorTheme.textColor2}
      tabBarInactiveTintColor = 'gray'
  
    >
      <Tab.Screen name="Home" component={WelcomeScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Explore" component={ExploreScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Groups" component={SettingsScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Profile" component={SettingsScreen} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MyTabs" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MyTabs" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}