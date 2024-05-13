import { PaperProvider } from 'react-native-paper';

//react-native-paper提供的物件
import { IconButton, Appbar, useTheme } from 'react-native-paper';

//普通宣告
import { StyleSheet, Text, View, StatusBar, ScrollView, Button } from 'react-native';

import PerDeck from "../Component/PerDeck"
import NewDeck from '../Component/NewDeck';

const DeckTopScreen = ({ navigation }) => {
    const theme = useTheme();
    return (
        <View style={{ ...styles.container, backgroundColor: theme.colors.surface }}>
            <PerDeck />
            <NewDeck />
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