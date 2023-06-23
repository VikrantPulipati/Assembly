import { useCallback } from 'react';
import { StyleSheet, Text, TextInput, View, Pressable, Dimensions, Image } from 'react-native';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

import { lightMode, darkMode } from '../colors';
import { fontTheme } from '../fonts';


colorTheme = lightMode

export const SettingsScreen = ({ navigation, fonts }) => {
  const [fontsLoaded] = useFonts (fontTheme);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded]);
  
  if (!fontsLoaded) {
    return null
  }
  
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
        <Text style={styles.assemblyTitle}>Profile</Text>
        <ProfilePreview/>
        <Text style={styles.assemblySubtitle}>Account Settings</Text>
        <MenuItem linkName={'Academic Information'} iconName={'graduation'}/>
        <MenuItem linkName={'Personal Information'} iconName={'notebook'}/>
        <MenuItem linkName={'Notifications'} iconName={'bell'}/>
        <MenuItem linkName={'Appearance'} iconName={'eye'}/>
        <Text style={styles.assemblySubtitle}>Support</Text>
        <MenuItem linkName={'Get help'} iconName={'question'}/>
        <MenuItem linkName={'Give us feedback'} iconName={'speech'}/>
    </View>
        
  );
}

const ProfilePreview = () => {
  const onPress = () => console.log("yeet")
  return (
      <Pressable onPress={onPress}>
        <TransparentRectangle width={Dimensions.get('window').width} height={80} borderWidth={1} borderColor={'#B5C2B7'}>
          <View style={styles.circle} />
          <Text style={styles.assemblyHeading}>Vikrant Pulipati</Text>
          <Text style={styles.assemblySubheading}>Show profile</Text>
          <Icon name={'arrow-right'} style={styles.headingArrow} />
        </TransparentRectangle>
        
      </Pressable>
  )
}

const MenuItem = ({ iconName, linkName }) => {
  const onPress = () => console.log("yeet")
  return (
      <Pressable onPress={onPress}>
        <BottomBorderBox height={45} width={Dimensions.get('window').width-50} borderWidth={1} borderColor={'#B5C2B7'}>
          <Icon name={iconName} style={{ color: colorTheme.textColor1, fontSize: 25,}} />
          <Text style={styles.link}>{linkName}</Text>
          <Icon name={'arrow-right'} style={styles.linkArrow} />
        </BottomBorderBox>
      </Pressable>
  )
}

const TransparentRectangle = ({ width, height, borderWidth, borderColor, children }) => {
  return (
    <View style={{
      width: width-40,
      height: height,
      backgroundColor: 'transparent',
      borderBottomWidth: borderWidth,
      borderBottomColor: borderColor,
      borderTopWidth: 0,
      borderTopColor: borderColor,
      justifyContent: 'flex-start',
      alignSelf: 'center',
    }}>
      {children}
    </View>
  );
};

const BottomBorderBox = ({ height, width, borderWidth, borderColor, children }) => {
  return (
    <View style={{
      height,
      width,
      borderBottomWidth: borderWidth,
      borderBottomColor: borderColor,
      alignItems: 'center',
      justifyContent: 'flex-start',
      alignSelf: 'center',
      flexDirection: 'row'
    }}>
      <View style={{ flex: 1, justifyContent: 'flex-start' }}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: 'flex-start',
        backgroundColor: colorTheme.background,
        paddingTop: 50,
    },
    //profile
    assemblyTitle: {
        fontFamily: 'ABeeZee',
        color: colorTheme.primary,
        fontSize: 25,
        marginStart: 25,
        marginBottom: 20,
        marginTop: 25,
    },
    assemblySubtitle: {
      fontFamily: 'ABeeZee',
      color: colorTheme.primary,
      fontSize: 20,
      marginStart: 25,
      marginTop: 25,
      marginBottom: 10,
    },
    circle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        position: 'absolute', 
        top: 8, 
        backgroundColor: "#D9D9D9",
    },
    assemblyHeading:{
        fontFamily: 'ABeeZee',
        color: colorTheme.textColor1,
        fontSize: 16,
        position: 'absolute', 
        top: 24, 
        left: 75,
    },
    assemblySubheading:{
      fontFamily: 'ABeeZee',
      color: colorTheme.textColor2,
      fontSize: 12,
      position: 'absolute', 
      top: 44, 
      left: 75,
    },
    link:{
      fontFamily: 'ABeeZee',
      color: colorTheme.textColor1,
      fontSize: 14,
      marginStart: 50,
      position: 'absolute', 
      top: 5, 
    },
    headingArrow:{
      width: '5%', height: '30%',
      position: 'absolute', 
      top: 28, 
      right: 5,
      fontSize: 20,
    },
    linkArrow:{
      width: '5%', height: '30%',
      position: 'absolute', 
      top: 5, 
      right: 0,
    },
    linkIcon:{
      width: '8%', height: '58%',
      position: 'absolute', 
      top: -10, 
      left: 0,
    },
       
  });