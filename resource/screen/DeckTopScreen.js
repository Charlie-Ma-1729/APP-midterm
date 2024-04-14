import { PaperProvider } from 'react-native-paper';

//react-native-paper提供的物件
import { IconButton, Appbar } from 'react-native-paper';

//普通宣告
import { StyleSheet, Text, View, StatusBar, ScrollView, Button } from 'react-native';

import PerDeck from "../Component/PerDeck"

const DeckTopScreen = ({ navigation }) => {
    return (
        <View style={{backgroundColor:theme.colors.surface}}>
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