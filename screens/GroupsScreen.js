import { useCallback } from 'react';
import { StyleSheet, Text, TextInput, View, Pressable, Dimensions, Image, ScrollView } from 'react-native';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { lightMode, darkMode } from '../colors';
import { fontTheme } from '../fonts';
import search from '../assets/assembly_search.png';
import slider from '../assets/assembly_slider.png';
import bookIcon from '../assets/assembly_icon_book.png';
import meetingIcon from '../assets/assembly_icon_meeting.png';
import sportsIcon from '../assets/assembly_icon_sports.png';
import partyIcon from '../assets/assembly_icon_party.png';
import plus from '../assets/assembly_plus.png';

colorTheme = lightMode

export const GroupsScreen = ({ navigation, fonts }) => {
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
        <SearchBar/>
        <View style = {{marginBottom: 120}}>
            <ScrollView>
                <Group className = {'Intro to Computer Science'} lastMessage = {'Vikrant Pulipati: I love this class!'} date = {"Jan 11, 2023"}/>
                <Group className = {'Morrow Suites 2023'} lastMessage = {'Vikrant Pulipati: I love this class!'} date = {"Jan 11, 2023"}/>
                <Group className = {'Creative Writing'} lastMessage = {'Vikrant Pulipati: I love this class!'} date = {"Jan 11, 2023"}/>
                <Group className = {'Intro to Discrete Structu...'} lastMessage = {'Vikrant Pulipati: I love this class!'} date = {"Jan 11, 2023"}/>
                <Group className = {'Spikeball Club 2023'} lastMessage = {'Vikrant Pulipati: I love this class!'} date = {"Jan 11, 2023"}/>
                <Group className = {'RUMAD 2023'} lastMessage = {'Vikrant Pulipati: I love this class!'} date = {"Jan 11, 2023"}/>
                <Group className = {'Linear Algebra'} lastMessage = {'Vikrant Pulipati: I love this class!'} date = {"Jan 11, 2023"}/>
            </ScrollView>
        </View>
        <PlusIcon/>
    </View>
  );
}

const SearchBar = () => {
    const onPress = () => console.log("yeet")
    return (
        <Pressable onPress={onPress}>
            <View style={styles.textBox}>
                <Image source={search} style={styles.searchIcon} />
                <TextInput style={styles.text}>Search your groups</TextInput>
            </View> 
        </Pressable>
    )
}

const Group = ({className, lastMessage, date}) => {
    return (
        <View style = {styles.rectangle} width={Dimensions.get('window').width} height={80}>
          <View style={styles.circle} />
          <Text style={styles.assemblyHeading}>{className}</Text>
          <Text style={styles.assemblySubheading}>{lastMessage}</Text>
          <Text style={styles.assemblyDate}>{date}</Text>
        </View>
    );
};

const TransparentRectangle = ({ width, height, children }) => {
    return (
      <View style={{
        width: width,
        height: height,
        backgroundColor: 'transparent',
      }}>
        {children}
      </View>
    );
  };



const PlusIcon = () => {
    const onPress = () => console.log("yeet")
    return (
        <View style={styles.plusIcon} >
            <Pressable onPress={onPress}>
                <Image source={plus}/>
            </Pressable>
        </View>
    );
};


const EventInfo = ({ title, desc}) => {
    return(
        <View>
            <Text style={styles.eventTitle}>{title}</Text>
            <Text style={styles.eventDesc}>{desc}</Text>
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
        paddingTop: 30,
    },
    assemblyHeading:{
        fontFamily: 'ABeeZee',
        color: colorTheme.textColor1,
        fontSize: 14,
        marginStart: 25,
        position: 'absolute', 
        top: 10, 
        left: 70,
    },
    assemblySubheading:{
      fontFamily: 'ABeeZee',
      color: colorTheme.textColor2,
      fontSize: 10,
      marginStart: 25,
      top: 32, 
      left: 70,
      marginRight: 90,
    },
    assemblyDate:{
        fontFamily: 'ABeeZee',
        color: colorTheme.textColor2,
        fontSize: 10,
        marginStart: 25,
        position: 'absolute', 
        top: 13, 
        right: 10,
      },
    textBox: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#D2D2D2',
        borderRadius: 20,
        paddingHorizontal: 30, 
        paddingVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 25,
    },
    text: {
        fontFamily: 'ABeeZee',
        fontSize: 12,
        paddingHorizontal: 50, 
        color: colorTheme.primary,
    },
    searchIcon:{
          width: '4%', height: '85%',
        //position: 'absolute', 
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
    rectangle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    eventTitle:{
        fontFamily: 'ABeeZee',
        fontSize: 15,
        marginLeft: 10, 
        marginBottom: 10, 
        width: 180
    },
    eventDesc:{
        fontFamily: 'ABeeZee',
        fontSize: 12,
        marginLeft: 10, 
        width:180,
    },
    plusIcon:{
        bottom: 20,
        right: 20,
        position: 'absolute'
    }
       
  });