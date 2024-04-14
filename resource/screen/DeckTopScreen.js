import { PaperProvider, useTheme } from 'react-native-paper';

//react-native-paper提供的物件
import { IconButton, Appbar, useTheme } from 'react-native-paper';

//普通宣告
import { StyleSheet, Text, View, StatusBar, ScrollView, Button } from 'react-native';

import PerDeck from "../Component/PerDeck"

const DeckTopScreen = ({ navigation }) => {
    const theme = useTheme();
    return (
<<<<<<< HEAD
        <View style={{ backgroundColor: theme.colors.surface }}>
=======
        <View style={{ ...styles.container,backgroundColor:theme.colors.surface}}>
>>>>>>> 6981e9f6f10c19d9bf665077fb2ffdff3014a975
            <PerDeck />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default DeckTopScreen;