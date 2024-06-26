//react-native-paper提供的物件
import { IconButton, Appbar, useTheme } from 'react-native-paper';

//普通宣告
import { StyleSheet, Text, View, StatusBar, ScrollView, Button, Image } from 'react-native';
//宣告自己的物件
import Manual from '../Component/Manual';
//引入store函式
import { useDispatch, useSelector } from 'react-redux';
import { selectcolorMode } from '../redux/colorModeSlice';

const HomeManualScreen = ({ navigation }) => {
    const theme = useTheme();//引入主題以使用主題
    const colorMode = useSelector(selectcolorMode);
    let StatusBarMode = colorMode.colorMode === "dark" ? "dark-content" : "light-content";
    return (
        <View style={{ ...styles.container, backgroundColor: theme.colors.surface }}>
            <Manual />
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

export default HomeManualScreen;