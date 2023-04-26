import { useCallback } from 'react';
import { StyleSheet, Text, TextInput, View, Pressable, Dimensions, Image } from 'react-native';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { lightMode, darkMode } from '../colors';
import { fontTheme } from '../fonts';
import arrow from '../assets/assembly_arrow.png';
import bell from '../assets/assembly_bell.png';
import cap from '../assets/assembly_cap.png';
import palette from '../assets/assembly_palette.png';
import pencil from '../assets/assembly_pencil.png';
import profile from '../assets/assembly_profile.png';
import question from '../assets/assembly_question.png';

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
        <MenuItem linkName={'Academic Information'} imgName={cap}/>
        <MenuItem linkName={'Personal Information'} imgName={profile}/>
        <MenuItem linkName={'Notifications'} imgName={bell}/>
        <MenuItem linkName={'Appearance'} imgName={palette}/>
        <Text style={styles.assemblySubtitle}>Support</Text>
        <MenuItem linkName={'Get help'} imgName={question}/>
        <MenuItem linkName={'Give us feedback'} imgName={pencil}/>
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
          <Image source={arrow} style={styles.headingArrow} />
        </TransparentRectangle>
        
      </Pressable>
  )
}

const MenuItem = ({ imgName, linkName }) => {
  const onPress = () => console.log("yeet")
  return (
      <Pressable onPress={onPress}>
        <BottomBorderBox height={45} width={Dimensions.get('window').width-50} borderWidth={1} borderColor={'#B5C2B7'}>
          <Image source={imgName} style={styles.linkIcon} />
          <Text style={styles.link}>{linkName}</Text>
          <Image source={arrow} style={styles.linkArrow} />
        </BottomBorderBox>
      </Pressable>
  )
}

const TransparentRectangle = ({ width, height, borderWidth, borderColor, children }) => {
  return (
    <View style={{
      width: width,
      height: height,
      backgroundColor: 'transparent',
      borderBottomWidth: borderWidth,
      borderBottomColor: borderColor,
      borderTopWidth: borderWidth,
      borderTopColor: borderColor,

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
    assemblyTitle: {
        fontFamily: 'ABeeZee',
        color: colorTheme.primary,
        fontSize: 25,
        marginStart: 25,
        marginBottom: 20,
    },
    assemblySubtitle: {
      fontFamily: 'ABeeZee',
      color: colorTheme.primary,
      fontSize: 18,
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

        marginStart: 25,
        backgroundColor: "#D9D9D9",
    },
    assemblyHeading:{
        fontFamily: 'ABeeZee',
        color: colorTheme.textColor1,
        fontSize: 14,
        marginStart: 25,
        position: 'absolute', 
        top: 24, 
        left: 80,
    },
    assemblySubheading:{
      fontFamily: 'ABeeZee',
      color: colorTheme.textColor2,
      fontSize: 10,
      marginStart: 25,
      position: 'absolute', 
      top: 44, 
      left: 80,
    },
    link:{
      fontFamily: 'ABeeZee',
      color: colorTheme.textColor1,
      fontSize: 14,
      marginStart: 50,
      position: 'absolute', 
      top: -6, 
    },
    headingArrow:{
      width: '5%', height: '30%',
      position: 'absolute', 
      top: 28, 
      right: 20,
    },
    linkArrow:{
      width: '5%', height: '30%',
      position: 'absolute', 
      top: -6, 
      right: 0,
    },
    linkIcon:{
      width: '8%', height: '58%',
      position: 'absolute', 
      top: -10, 
      left: 0,
    },
       
  });