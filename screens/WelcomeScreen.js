import { useCallback } from 'react';
import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { colorTheme } from '../colors';
import { fontTheme } from '../fonts';

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
        />
        <Text style={styles.inputHeader}>Password:</Text>
        <TextInput
          style={styles.inputField}
          textContentType='password'
          secureTextEntry={true}
          placeholder="Password"
        />
        <Pressable onPress={onPress}>
          <Text style={styles.signInButton}>Sign In</Text>
        </Pressable>
      </View>

      <Text style={styles.newUserDisclaimer}>New to Assembly? <Text style={styles.signUpLink} onPress={onPress}>Click here.</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      flexGrow: 1,
      justifyContent: 'space-between',
      backgroundColor: '#fff',
      paddingTop: 100,
    },
    assemblyTitle: {
      alignSelf: 'center',
      fontFamily: 'Comfortaa',
      color: colorTheme.textColor1,
      fontSize: 54,
      marginBottom: 30,
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
      color: colorTheme.textColor1,
      fontSize: 18,
      marginStart: 25,
    },
    inputField: {
      backgroundColor: colorTheme.textInputBackground,
      marginTop: 10,
      marginBottom: 20,
      marginStart: 25,
      height: 40,
      marginEnd: 25,
      fontSize: 14,
      fontFamily: 'ABeeZee',
      color: colorTheme.textColor2,
      borderRadius: 28,
      padding: 10,
      paddingHorizontal: 20,
      
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
      elevation: 2,
    },
    signInButton: {
      alignSelf: 'flex-end',
      marginTop: 15,
      marginRight: 25,
      backgroundColor: colorTheme.textColor1,
      paddingHorizontal: 20,
      padding: 10,
      borderRadius: 30,
      fontFamily: 'ABeeZee',
      color: "#FFFFFF",
      fontSize: 20,
    },
    newUserDisclaimer: {
      alignSelf: 'flex-start',
      marginTop: 25,
      marginBottom: 40,
      marginLeft: 25,

      color: colorTheme.textColor1,
      fontFamily: 'ABeeZee',
      fontSize: 18,
    },
    signUpLink: {
      textDecorationLine: 'underline'
    }
  });