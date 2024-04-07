import * as React from 'react';
//引入物件
import { Text, View, Image } from 'react-native';
import { Switch, useTheme, IconButton } from 'react-native-paper';
//引入風格
import styles from './styles';


const HomeButton = ({ type, color, icon, label }) => {
    const theme = useTheme();
    //根據需求適用不同的容器大小style
    let tarType = styles.bigType;
    if (type === "big") {
        tarType = styles.bigType;
    } else if (type === "small") {
        tarType = styles.smallType;
    }
    return (
        <View style={{ ...tarType, backgroundColor: color }}>
            <IconButton icon={icon} size={75} iconColor={theme.colors.onPrimary} />
            <Text style={{ ...styles.text, color: theme.colors.onPrimary }}>{label}</Text>
        </View>
    );
}

export default HomeButton;
//本元件用於主頁，顯示一個簡單的按鈕
