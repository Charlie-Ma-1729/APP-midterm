import { PaperProvider } from 'react-native-paper';

//react-native-paper提供的物件
import { IconButton, Appbar, useTheme } from 'react-native-paper';

//普通宣告
import { StyleSheet, Text, View, StatusBar, ScrollView, Button, Image } from 'react-native';
//宣告自己的物件
import HomeButton from '../component/HomeButton';

const HomeTopScreen = ({ navigation }) => {
    const theme = useTheme();//引入主題以使用主題
    return (
        <View style={{ ...styles.container, backgroundColor: theme.colors.surface }}>
            <StatusBar backgroundColor={theme.colors.secondary} barStyle={theme.colors.onSecondary} style="auto" />
            <Image style={{ width: 328, height: 164, marginTop: 20 }} source={require("../../assets/images/news.jpg")} />
            <View style={styles.buttonContainer}>
                <HomeButton type={"big"} color={theme.colors.primary} icon={"gamepad-square"} label={"遊戲工具"} />
            </View>
            <View style={styles.buttonContainer}>
                <HomeButton type={"small"} color={theme.colors.secondary} icon={"book-open-variant"} label={"說明書"} />
                <HomeButton type={"small"} color={theme.colors.tertiary} icon={"history"} label={"更新歷史"} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    buttonContainer: {
        marginTop: 15,
        width: 328,
        height: 200,
        flexDirection: "row",
        justifyContent: "space-between"
    },
});

export default HomeTopScreen;