import { PaperProvider } from 'react-native-paper';

//react-native-paper提供的物件
import { IconButton, Appbar } from 'react-native-paper';

//普通宣告
import { StyleSheet, Text, View, StatusBar, ScrollView, Button } from 'react-native';

import PerDeckS from '../Component/PerDeck';

const DeckTopScreen = ({ navigation }) => {
    return (
<<<<<<< HEAD
        <View>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
=======
        <PaperProvider>
            <PerDeckS/>
        </PaperProvider>
>>>>>>> 810770fc74406992a0108f214b65599c6d1b54df
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default DeckTopScreen;