import { useCallback, useState, useRef } from 'react';
import { StyleSheet, Text, TextInput, View, Pressable, FlatList } from 'react-native';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { lightMode, darkMode } from '../colors';
import { fontTheme } from '../fonts';
import { useEffect } from 'react';

colorTheme = lightMode

const belowMinimumCharacters = {
  key: "belowEight",
  message: "Must have a minimum of 8 characters",
}
const mustIncludeSpecialCharacter = {
  key: "specialChar",
  message: "Must include a special character",
}
const passwordsMustMatch = {
  key: "notMatched",
  message: "Passwords must match",
}
const emailEmpty = {
  key: "emailEmpty",
  message: "Email is empty",
}
const emailInvalid = {
  key: "emailInvalid",
  message: "Email is invalid",
}

export const AccountCreationScreen = ({ navigation, fonts }) => {

  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [confirmedPassword, setConfirmedPassword] = useState("")
  const [errorList, setErrorList] = useState([])

  const firstRender = useRef(true)
  
  useEffect(() => {
    if (errorList.length == 0 && !firstRender.current) navigation.navigate("MainScreen")
  }, [errorList])

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
  }

  const confirmPasswordOnChange = (confirmedPassword) => {
    setConfirmedPassword(confirmedPassword)
  }

  const updateErrorList = () => {
    
    data = []
    if (userEmail.length < 1) data.push(emailEmpty)
    else if (!isEmailValid()) data.push(emailInvalid)
    if (userPassword == null || userPassword.length < 8) data.push(belowMinimumCharacters)
    if (!containsSpecialCharacter()) data.push(mustIncludeSpecialCharacter)
    if (confirmedPassword == null || userPassword !== confirmedPassword) data.push(passwordsMustMatch)
    firstRender.current = false
    setErrorList([...data])
  }

  function isEmailValid () {
    return (userEmail.length > 0
      && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(userEmail))
  }

  function containsSpecialCharacter () {
    return (/^(?=.*?[#?!@$%^&*-])/).test(userPassword)
  }

  const ErrorBubble = ({item}) => {
    if (errorList.length == 0) return null
    return(
    <View style={styles.errorBubbles}>
      <Text style={styles.errorMessage}>{item?.message}</Text>
    </View>
    )
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
            <FlatList
              data={errorList}
              renderItem={ErrorBubble}
              extraData={errorList}
            />
            <View style={styles.createAccountButtonContainer}>
              <Pressable onPress={updateErrorList}>
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
    },
    titleText: {
      alignSelf: 'center',
      fontFamily: 'ABeeZee',
      color: colorTheme.primary,
      fontSize: 22,
    },
    inputFieldContainer: {
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
      justifyContent: 'center',
    },
    errorBubbles: {
      backgroundColor: colorTheme.error,
      borderWidth: 1,
      overflow: 'hidden',
      padding: 4,
      margin: 5,
      borderRadius: 30,
      borderColor: colorTheme.error,
    },
    interactionArea: {
      flex: 8,
    }
})