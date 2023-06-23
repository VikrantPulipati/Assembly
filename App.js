import * as SplashScreen from 'expo-splash-screen';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { AccountCreationScreen } from './screens/AccountCreationScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { ExploreScreen } from './screens/ExploreScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { lightMode, darkMode } from './colors';
import { HomeScreen } from './screens/HomeScreen';
import { GroupsScreen } from './screens/GroupsScreen';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';

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
            return <Octicons name='home' style={{ color: colorTheme.primary, fontSize: size }}/>;
          } else if (route.name === 'Explore') {
            iconName = focused ? 'example-settings-icon' : 'example-settings-icon';
            return <Fontisto name='search' style={{ color: colorTheme.primary, fontSize: size-2}} />;
          } else if (route.name === 'Groups') {
            iconName = focused ? 'example-welcome-icon' : 'example-welcome-icon';
            return <Feather name='users' style={{ color: colorTheme.primary, fontSize: size}} />;
          } else if (route.name === 'Profile') {
            iconName = focused ? 'example-welcome-icon' : 'example-welcome-icon';
            return <Feather name='user' style={{ color: colorTheme.primary, fontSize: size}} />;
          }

         
          
        },
      })}
      tabBarActiveTintColor = {colorTheme.textColor2}
      tabBarInactiveTintColor = 'gray'
  
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Explore" component={ExploreScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Groups" component={GroupsScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Profile" component={SettingsScreen} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainScreen" component={MyTabs} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}></Stack.Screen>
        <Stack.Screen name="AccountCreationScreen" component={AccountCreationScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}