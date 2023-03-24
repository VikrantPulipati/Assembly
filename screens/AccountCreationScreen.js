import { useCallback } from 'react';
import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { colorTheme } from '../colors';
import { fontTheme } from '../fonts';

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
            <Text>Create your account</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
    },
})