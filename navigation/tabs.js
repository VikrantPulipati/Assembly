import { WelcomeScreen } from '../screens/WelcomeScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { ExploreScreen } from '../screens/ExploreScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return(
    <Tab.Navigator>
      <Tab.Screen name = "Home" component = {WelcomeScreen}/>
      <Tab.Screen name = "Explore" component = {ExploreScreen}/>
      <Tab.Screen name = "Settings" component = {SettingsScreen}/>
    </Tab.Navigator>
  )
}

export default Tabs;