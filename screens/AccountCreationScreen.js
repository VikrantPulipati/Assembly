import { useCallback, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Pressable, FlatList } from 'react-native';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { lightMode, darkMode } from '../colors';
import { fontTheme } from '../fonts';

colorTheme = lightMode

const belowMinimumCharacters = "Must have a minimum of 8 characters"
const mustIncludeSpecialCharacter = "Must include a special character"
const passwordsMustMatch = "Passwords must match"

export const AccountCreationScreen = ({ navigation, fonts }) => {

    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [confirmedPassword, setConfirmedPassword] = useState("")
    const [errorList, setErrorList] = useState([])

    const [fontsLoaded] = useFonts (fontTheme);

    const onLayoutRootView = useCallback(async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync()
      }
    }, [fontsLoaded]);
    
    if (!fontsLoaded) {
      return null
    }

    

    const passwordInputOnChange = (password) => {
      setUserPassword(password)
      //updateErrorList()
    }

    const confirmPasswordOnChange = (confirmedPassword) => {
      setConfirmedPassword(confirmedPassword)
      //updateErrorList()
    }

    const ErrorList = () => {
      data = []
      if (userPassword == null || userPassword.length < 8) data.put({
        key: "passwordTooShort",
        message: belowMinimumCharacters
      })
      if (!containsSpecialCharacter()) data.put({
        key: "needsSpecialCharacter",
        message: mustIncludeSpecialCharacter
      })
      if (confirmedPassword == null || userPassword !== confirmedPassword) data.put({
        key: "passwordsDontMatch",
        message: passwordsMustMatch
      })
      console.log(data)
      const ErrorBubble = ({errorMessage}) => {
        <View style={styles.errorBubbles}>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        </View>
      }
      return (
        <FlatList
          data={data}
          renderItem={({errorMessage}) => <ErrorBubble errorMessage={errorMessage.message}/>}
          keyExtractor={errorMessage => errorMessage.key}/>
      )
      // return (
      //   <View
      //     style={styles.flexBox}>
      //     {data.map((errorMessage) => {
      //       return (

      //       )
      //     })}
      //   </View>
      // )
    }

    function containsSpecialCharacter () {
      return (/^(?=.*[!@#$%^&*])$/).test(userPassword)
    }

    const createAccountOnPress = () => {
      updateErrorList()
      // FILL IN THE REST
    }

    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Create your account</Text>
            </View>
            <View style={styles.interactionArea}>
              <View style={styles.inputFieldContainer}>
                <Text style={styles.inputFieldHeaders}>University Email:</Text>
                <TextInput
                  id="emailInput"
                  style={styles.inputField}
                  inputMode='email'
                  textContentType='emailAddress'
                  placeholder="Ex: ab123@scarletmail.rutgers.edu"
                  placeholderTextColor={colorTheme.textColor2}
                  onChangeText={email => setUserEmail(email)}
                />
                <Text style={styles.inputFieldHeaders}>Password:</Text>
                <TextInput
                  id="passwordInput"
                  style={styles.inputField}
                  textContentType='password'
                  placeholder="Enter password"
                  placeholderTextColor={colorTheme.textColor2}
                  onChangeText={password => passwordInputOnChange(password)}
                />
                <Text style={styles.inputFieldHeaders}>Re-enter Password:</Text>
                <TextInput
                  id="passwordConfirmInput"
                  style={styles.inputField}
                  textContentType='password'
                  placeholder="Enter password again"
                  placeholderTextColor={colorTheme.textColor2}
                  onChangeText={confirmedPassword => confirmPasswordOnChange(confirmedPassword)}/>
              </View>
              <ErrorList/>
              <View style={styles.createAccountButtonContainer}>
                <Pressable onPress={createAccountOnPress}>
                <View style={styles.createAccountButton}>
                  <Text style={styles.createAccountButtonText}>Create account</Text>
                </View>
                </Pressable>
              </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: colorTheme.background,
      flex: 1,
      padding: 25,
      justifyContent: 'flex-start',
      flexShrink: 0,
      flexDirection: 'column'
    },
    titleContainer: {
      flex: 2,
      justifyContent: 'space-around',
      //backgroundColor: 'brown',
    },
    titleText: {
      alignSelf: 'center',
      fontFamily: 'ABeeZee',
      color: colorTheme.primary,
      fontSize: 22,
    },
    inputFieldContainer: {
      //flex: 5,
      //backgroundColor: 'orange',
      flexDirection: 'column',
      justifyContent: 'center',
      marginBottom: 20,
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
      //flex: 3,
      //backgroundColor: 'grey',
      marginTop: 40,
    },
    createAccountButtonText: {
      paddingHorizontal: 20,
      padding: 10,
      fontFamily: 'ABeeZee',
      color: colorTheme.buttonTextColor,
      fontSize: 20,
    },
    createAccountButton: {
      backgroundColor: colorTheme.primary,
      alignSelf: 'flex-end',
      borderWidth: 1,
      borderColor: colorTheme.primary,
      borderRadius: 30,
      
    },
    errorMessage: {
      color: colorTheme.buttonTextColor,
      borderRadius: 28,
      alignSelf: 'center',
      fontFamily: 'ABeeZee',
    },
    flexBox: {
      //flex: 2,
      //backgroundColor: 'coral',
      justifyContent: 'center',
    },
    errorBubbles: {
      backgroundColor: colorTheme.error,
      borderWidth: 1,
      overflow: 'hidden',
      padding: 4,
      margin: 5,
      borderRadius: 12,
      borderColor: colorTheme.error,
    },
    interactionArea: {
      flex: 8,
    }
})