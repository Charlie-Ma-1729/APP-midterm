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
//引入自己的元素
import FilterItem from '../FilterItem';

const Filter = () => {
    //宣告主題
    const theme = useTheme();
    //宣告表單基礎變數
    const [cardName, setCardName] = React.useState("");
    return (
        <View style={styles.box}>
            <TextInput
                style={styles.cardNameBlock}
                mode="outlined"
                label="卡名搜尋"
                placeholder="請輸入卡片名稱"
                value={cardName}
                onChangeText={cardName => setCardName(cardName)}
            />
            <FilterItem />
        </View>
    );
}

export default Filter;
//本物件位於搜尋-過濾頁，主畫面中的唯一元件