import React from 'react';
//react-native-paper提供的物件
import { IconButton, Appbar, useTheme, FAB } from 'react-native-paper';
//引入style
import styles from './styles';
//普通宣告
import { Text, View, StatusBar, ScrollView, Image } from 'react-native';
//引入圖片矩陣
import boardIconLight from "../../json/chronosIconLight.json"
import boardIconDark from "../../json/chronosIconDark.json"
//引入store函式
import { useDispatch, useSelector } from 'react-redux';
import { selectcolorMode } from '../../redux/colorModeSlice';

const ChronosRound = ({ parentWidth, parentHeight, radius }) => {
    const theme = useTheme();
    // 使用全域變數(顏色主題)
    const colorMode = useSelector(selectcolorMode).colorMode;
    // 生成中點位置
    const centerX = parentWidth / 2;
    const centerY = parentHeight / 2;
    // 生成環狀串列
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        // 根據顏色模式適用物件
        const pictures = colorMode === "light" ? boardIconLight : boardIconDark;
        const finalItems = pictures.map((value, index) => {
            // 生成單元位置，確保角度計算為弧度
            const angle = index * (2 * Math.PI / pictures.length);
            const x = centerX + Math.cos(angle) * radius - 25;
            const y = centerY + Math.sin(angle) * radius - 25;
            return (
                <View key={value.codeNum} style={{ position: 'absolute', left: x, top: y }}>
                    <Image style={{ ...styles.pic, transform: [{ rotate: `${value.spin}` }] }} source={{ uri: value.icon }} />
                </View>
            );
        });
        setItems(finalItems);
    }, [colorMode, centerX, centerY, radius]);

    return (
        <View style={{ width: parentWidth, height: parentHeight, position: 'relative' }}>
            {items}
        </View>
    );
};

export default ChronosRound;
//物件放在遊戲頁，因為克羅諾斯的形狀十分複雜，因此拆分圓環部分於此