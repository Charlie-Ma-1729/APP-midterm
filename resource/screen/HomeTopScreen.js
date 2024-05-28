//react-native-paper提供的物件
import { IconButton, Appbar, useTheme } from 'react-native-paper';

//普通宣告
import { StyleSheet, Text, View, StatusBar, ScrollView, Button, Image, Pressable } from 'react-native';
//宣告自己的物件
import HomeButton from '../Component/HomeButton';
//引入store函式
import { useDispatch, useSelector } from 'react-redux';
import { selectcolorMode } from '../redux/colorModeSlice';

const HomeTopScreen = ({ navigation }) => {
    const theme = useTheme();//引入主題以使用主題
    const colorMode = useSelector(selectcolorMode);
    let StatusBarMode = colorMode.colorMode === "dark" ? "dark-content" : "light-content";
    return (
        <View style={{ ...styles.container, backgroundColor: theme.colors.surface }}>
            <StatusBar backgroundColor={theme.colors.secondary} barStyle={StatusBarMode} style="auto" />
            <Image style={{ width: 328, height: 164, marginTop: 20 }} source={require("../../assets/images/news.jpg")} />
            <View style={styles.buttonContainer}>
                <Pressable onPress={() => { navigation.navigate("遊戲") }}>
                    <HomeButton type={"big"} color={theme.colors.primary} icon={"gamepad-square"} label={"遊戲工具"} />
                </Pressable>
            </View>
            <View style={styles.buttonContainer}>
                <Pressable onPress={() => { navigation.navigate("說明書") }}>
                    <HomeButton type={"small"} color={theme.colors.secondary} icon={"book-open-variant"} label={"說明書"} />
                </Pressable>
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