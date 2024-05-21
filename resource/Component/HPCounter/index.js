import * as React from 'react';
//引入物件
import { Text, View, Image, Pressable } from 'react-native';
import { Switch, useTheme, IconButton } from 'react-native-paper';
//引入風格
import styles from './styles';
const HPCounter = () => {
    const theme = useTheme();
    return (
        <View style={{ ...styles.box }}>
            <Pressable style={{ ...styles.plus10, backgroundColor: theme.colors.secondaryContainer }}>
                <IconButton icon={"triangle"} size={20} iconColor={theme.colors.onSecondaryContainer} />
            </Pressable>
            <View style={styles.numField}>
                <Text style={styles.textNum}>{100}</Text>
            </View>
            <Pressable style={{ ...styles.plus10, backgroundColor: theme.colors.secondaryContainer, transform: [{ rotate: '180deg' }], }}>
                <IconButton icon={"triangle"} size={20} iconColor={theme.colors.onSecondaryContainer} />
            </Pressable>
        </View>
    );
}

export default HPCounter;
//此物件為於遊戲工具頁面，可以計算血量