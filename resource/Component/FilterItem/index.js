import * as React from 'react';
import { useRef, useEffect } from 'react';
//引入物件
import { Text, View, Pressable, ScrollView } from 'react-native';
import { Button, useTheme, Menu } from 'react-native-paper';
//引入風格
import styles from './styles';
//navigation提供的物件
import { useNavigation, useRoute } from '@react-navigation/native';
//引入store函式
import { useDispatch, useSelector } from 'react-redux';
import { selectcolorMode } from '../../redux/colorModeSlice';
import { toggleColorMode } from '../../redux/colorModeSlice';

const FilterItem = ({ size, label, placeHolder = "---", menuList }) => {
    //宣告主題
    const theme = useTheme();
    //創建navigation變數
    const navigation = useNavigation();
    const route = useRoute();
    //宣告表單控制的變數
    const [content, setContent] = React.useState(placeHolder);

    //被選取時變更顏色
    const [colorType, setColorType] = React.useState(theme.colors.outline);
    //被選取時更改框線大小
    const [borderWidth, setBorderWidth] = React.useState(1);
    const focusCheck = () => {
        if (visible === true) {
            setColorType(theme.colors.primary);
            setBorderWidth(2);
        }
        else {
            setColorType(theme.colors.outline);
            setBorderWidth(1);
        }
    }
    useEffect(focusCheck, visible);

    //控管選項功能
    const handleMenuPress = (value) => {
        setContent(value);
        //被點擊後向螢幕回報
        // 確保 setContent 完成後再設置 navigation params
        setTimeout(() => {
            navigation.setParams({ action: label, value: value });
            closeMenu();
        }, 0);
    };

    // 用於渲染menuItem的函式
    const renderMenuItems = () => {
        return menuList.map((item, index) => (
            <Menu.Item
                key={index}
                onPress={() => {
                    handleMenuPress(item);
                }}
                title={item}
            />
        ));
    };

    //menu顯示
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    //根據size切換大小
    const type = size === "big" ? styles.menuArcBig : styles.menuArcSmall;

    return (
        <View>
            <Menu
                //卡包menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={
                    <Pressable onPress={openMenu}>
                        <View style={{ ...type, backgroundColor: theme.colors.surface, borderWidth: borderWidth, borderColor: colorType }}>
                            <Text style={{ ...styles.lable, backgroundColor: theme.colors.surface, color: colorType }}>
                                {label}
                            </Text>
                            <Text style={{ ...styles.placeHolder, color: theme.colors.onSurface }}>    {content}
                            </Text>
                        </View>
                    </Pressable>}>
                <ScrollView style={styles.scroll}>
                    <Menu.Item onPress={() => {
                        handleMenuPress(null);
                    }} title="---" />
                    {renderMenuItems()}
                </ScrollView>
            </Menu>
        </View>
    );
}

export default FilterItem;
//此物件Filter的子物件，是由於text field的性能限制，製作了用於生成menu的物件