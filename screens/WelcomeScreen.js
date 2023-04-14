import { useCallback } from 'react';
import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { lightMode, darkMode } from '../colors';
import { fontTheme } from '../fonts';

colorTheme = lightMode

export const WelcomeScreen = ({ navigation, fonts }) => {

  const [fontsLoaded] = useFonts (fontTheme);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded]);
  
  if (!fontsLoaded) {
    return null
  }

  const onPress = () => console.log("Working")
  
  const navigateToAccountCreation = () => navigation.navigate("Account Creation")
  
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
        <View>
        <Text style={styles.assemblyTitle}>assembly</Text>
        
        <Text style={styles.inputHeader}>University Email:</Text>
        <TextInput
          style={styles.inputField}
          inputMode='email'
          textContentType='emailAddress'
          placeholder="University Email"
          placeholderTextColor={colorTheme.textColor2}
        />
        <Text style={styles.inputHeader}>Password:</Text>
        <TextInput
          style={styles.inputField}
          textContentType='password'
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor={colorTheme.textColor2}
        />
        <View style={styles.buttonContainer}>
          <Pressable onPress={onPress}>
            <Text style={styles.signInButton}>Sign In</Text>
          </Pressable>
        </View>
      </View>
      <Text style={styles.newUserDisclaimer}>New to Assembly? <Text style={styles.signUpLink} onPress={navigateToAccountCreation}>Click here.</Text></Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      flexGrow: 1,
      justifyContent: 'space-between',
      backgroundColor: colorTheme.background,
      paddingTop: 90,
      flexShrink: 0,
      padding: 25,
    },
    assemblyTitle: {
      alignSelf: 'center',
      fontFamily: 'Comfortaa',
      color: colorTheme.primary,
      fontSize: 54,
      marginBottom: 60,
    },
    logo: {
      marginTop: -30,
      marginRight: 115,
      alignSelf: 'center',
      width: 300,
      height: 225,
    },
    inputHeader: {
      fontFamily: 'ABeeZee',
      color: colorTheme.primary,
      fontSize: 18,
    },
    inputField: {
      backgroundColor: colorTheme.bubbleBackground,
      marginTop: 10,
      marginBottom: 20,
      height: 40,
      fontSize: 14,
      fontFamily: 'ABeeZee',
      color: colorTheme.textColor2,
      borderRadius: 28,
      padding: 10,
      paddingHorizontal: 20,
      borderColor: colorTheme.bubbleBorder,
      borderWidth: 1,
    },
    signInButton: {
      alignSelf: 'flex-end',
      paddingHorizontal: 20,
      padding: 10,
      borderRadius: 30,
      fontFamily: 'ABeeZee',
      color: colorTheme.buttonTextColor,
      fontSize: 20,
    },
    buttonContainer: {
      backgroundColor: colorTheme.primary,
      borderRadius: 30,
      alignSelf: 'flex-end',
      borderWidth: 1,
      marginTop: 40,
      borderColor: colorTheme.primary,
    },
    newUserDisclaimer: {
      alignSelf: 'flex-start',
      marginTop: 25,
      marginBottom: 40,
      color: colorTheme.primary,
      fontFamily: 'ABeeZee',
      fontSize: 18,
    },
    signUpLink: {
      textDecorationLine: 'underline'
    }
  });