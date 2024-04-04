import { PaperProvider } from 'react-native-paper';

//react-native-paper提供的物件
import { IconButton, Appbar, useTheme } from 'react-native-paper';

//普通宣告
import { StyleSheet, Text, View, StatusBar, ScrollView, Button } from 'react-native';

const HomeTopScreen = ({ navigation }) => {
    const theme = useTheme();//引入主題以使用主題
    return (
        <View>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar backgroundColor={theme.colors.secondary} barStyle={theme.colors.onSecondary} style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default HomeTopScreen;