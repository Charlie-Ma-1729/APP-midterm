import React from 'react';
//react-native-paper提供的物件
import { IconButton, Appbar, useTheme, FAB } from 'react-native-paper';
//引入style
import styles from './styles';
//普通宣告
import { Text, View, StatusBar, ScrollView, Image } from 'react-native';


const MyBottomSheetChip = ({ lable, num }) => {
    const theme = useTheme();
    return (
        <View style={{ ...styles.box, backgroundColor: theme.colors.primary }}>
            <View style={styles.lableBox}>
                <Text style={{ ...styles.text, color: theme.colors.onPrimary }}>{lable}</Text>
            </View>
            <View style={styles.numBox}>
                <Text style={{ ...styles.text, color: theme.colors.onPrimary }}>{num}</Text>
            </View>
        </View>
    );
}

export default MyBottomSheetChip;
//這個是MyBottomSheet的子物件，用來顯示單卡六圍資訊