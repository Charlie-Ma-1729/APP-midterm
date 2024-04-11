import * as React from 'react';
import { useRef, useEffect } from 'react';
//引入物件
import { Text, View, Image, Pressable } from 'react-native';
import { Button, useTheme, IconButton, TextInput, Menu } from 'react-native-paper';
//引入風格
import styles from './styles';
//引入store函式
import { useDispatch, useSelector } from 'react-redux';
import { selectcolorMode } from '../../redux/colorModeSlice';
import { toggleColorMode } from '../../redux/colorModeSlice';

const FilterItem = () => {
    //宣告主題
    const theme = useTheme();
    //宣告表單基礎變數
    const [cardPack, setCardPack] = React.useState("");
    //控管選項功能
    const handleMenuPress = (value) => {
        setCardPack(value);
        closeMenu();
    };
    //menu顯示
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    return (
        <View style={styles.box}>
            <Menu
                //卡包menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={
                    <Pressable onPress={openMenu}>
                        <View style={{ ...styles.switchBox, backgroundColor: theme.colors.surface }}>
                            <Text style={{ ...styles.lable, backgroundColor: theme.colors.surface }}>卡包</Text>
                            <Text style={styles.placeHolder}>{cardPack}</Text>
                        </View>
                    </Pressable>}>
                <Menu.Item onPress={() => {
                    handleMenuPress(null);
                }} title="---" />
                <Menu.Item onPress={() => {
                    handleMenuPress("The World Is Changing");
                }} title="The World Is Changing" />
                <Menu.Item onPress={() => {
                    handleMenuPress("All along the watchtower");
                }} title="All along the watchtower" />
            </Menu>
        </View>
    );
}

export default FilterItem;