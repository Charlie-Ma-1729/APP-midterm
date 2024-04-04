import { PaperProvider } from 'react-native-paper';

//react-native-paper提供的物件
import { IconButton, Appbar } from 'react-native-paper';

//普通宣告
import { StyleSheet, Text, View, StatusBar, ScrollView, Button } from 'react-native';

const DeckTopScreen = ({ navigation }) => {
    return (
        <PaperProvider>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default DeckTopScreen;