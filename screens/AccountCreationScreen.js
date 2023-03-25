import { useCallback } from 'react';
import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { lightMode, darkMode } from '../colors';
import { fontTheme } from '../fonts';

colorTheme = lightMode

export const AccountCreationScreen = ({ navigation, fonts }) => {
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
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Create your account</Text>
            </View>
            <View style={styles.inputFieldContainer}>
              <Text style={styles.inputFieldHeaders}>University Email:</Text>
              <TextInput
                style={styles.inputField}
                inputMode='email'
                textContentType='emailAddress'
                placeholder="Ex: ab123@scarletmail.rutgers.edu"
                placeholderTextColor={colorTheme.textColor2}
              />
              <Text style={styles.inputFieldHeaders}>Password:</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Enter password"
                placeholderTextColor={colorTheme.textColor2}/>
              <Text style={styles.inputFieldHeaders}>Re-enter Password:</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Enter password again"
                placeholderTextColor={colorTheme.textColor2}/>
            </View>
            <View style={styles.createAccountButtonContainer}>
              <Pressable>
                <Text>Create account</Text>
              </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: colorTheme.background,
      flex: 1,
      padding: 25,
      justifyContent: 'space-around',
    },
    titleContainer: {
      flex: 1,
      justifyContent: 'space-around',
    },
    titleText: {
      alignSelf: 'center',
      fontFamily: 'ABeeZee',
      color: colorTheme.primary,
      fontSize: 22,
    },
    inputFieldContainer: {
      flex: 2,
    },
    inputFieldHeaders: {
      fontFamily: 'ABeeZee',
      color: colorTheme.primary,
      fontSize: 15,
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
    createAccountButtonContainer: {
      flex: 2,
    }
})