import { useTheme } from 'react-native-paper';

//react-native-paper提供的物件
import { IconButton, Appbar, useTheme } from 'react-native-paper';

//普通宣告
import { StyleSheet, Text, View, StatusBar, ScrollView, Button } from 'react-native';

import DeckIn from "../Component/DeckIn"


const DeckInsideScreen = ({ navigation }) => {
    const theme = useTheme();
    return (
<<<<<<< HEAD

        <View style={{ backgroundColor: theme.colors.surface }}>
            <DeckIn />
=======
        <View style={{ ...styles.container,backgroundColor:theme.colors.surface}}>
            <DeckIn/>
>>>>>>> 6981e9f6f10c19d9bf665077fb2ffdff3014a975
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default DeckInsideScreen;