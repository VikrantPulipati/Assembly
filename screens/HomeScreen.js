import { StyleSheet, View, Text} from "react-native"

export const HomeScreen = () => {
    return (
        <View style={styles.container}><Text style={styles.disclaimerText}>Coming Soon!</Text></View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    disclaimerText: {
        fontSize: 30,
    },
})