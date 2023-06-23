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

export const ExploreScreen = ({ navigation, fonts }) => {
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
                <Event title = {'Physics 203 Midterm Review'} desc = {'Discussing topics on exam as well as going over practice test and worksheets.'} time = {'7:00 PM'} image = {bookIcon}/>
                <Event title = {'RUMAD General Interest Meeting'} desc = {'Our first meeting of the year! Going over general club info + free pizza!'} time = {'8:00 PM'} image = {meetingIcon}/>
                <Event title = {'Rutgers vs. Michigan State Football'} desc = {'Watch your Scarlet Knights take on Michigan State at Jersey Mike’s Arena!'} time = {'7:15 PM'} image = {sportsIcon}/>
                <Event title = {'84 Guilden St. (1:3 or $10)'} desc = {'byob'} time = {'11:00 PM'} image = {partyIcon}/>
            </ScrollView>
        </View>
        <PlusIcon/>
    </View>
  );
}

const SearchBar = () => {
    const onPress = () => console.log("yeet")
    return (
        <View style={styles.searchBox}>
            <Image source={search} style={styles.searchIcon} />
            <TextInput 
                style={styles.text} 
                inputMode='search' 
                placeholder="Search events on campus"
                placeholderTextColor={colorTheme.primary}
            />
            <Image source={slider} style={styles.searchIcon} />
        </View> 
    )
}

const Event = ({ title, desc, time, image}) => {
    return (
        <View style={styles.roundedRectangle}>
            <EventIcon time = {time} image = {image}/>
            <EventInfo title = {title} desc = {desc}/>
        </View> 
    );
};

const EventIcon = ({time, image}) => {
    return(
        <View>
            <Image source={image} style={styles.eventImage} />
            <Text style={styles.eventTime}>{time}</Text>
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
        paddingTop: 50,
    },
    searchBox: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#D2D2D2',
        borderRadius: 28,
        paddingHorizontal: 20, 
        paddingVertical: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 25,
        marginHorizontal: 25,
        width: 320,
        backgroundColor: colorTheme.bubbleBackground,
    },
    text: {
        fontFamily: 'ABeeZee',
        fontSize: 12,
        paddingHorizontal: 25, 
        color: colorTheme.primary,
    },
    roundedRectangle: {
        flexDirection: 'row',
        backgroundColor: colorTheme.bubbleBackground,
        borderRadius: 20, 
        paddingHorizontal: 10,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
        width: 320,
    },
      
    searchIcon:{
        //width: '4%', height: '85%',
        //position: 'absolute',
        
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
    eventTime:{
        fontFamily: 'ABeeZee',
        fontSize: 15,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    plusIcon:{
        bottom: 20,
        right: 20,
        position: 'absolute'
    }
       
  });