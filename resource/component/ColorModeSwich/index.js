import * as React from 'react';
//引入物件
import { Text, View, Image } from 'react-native';
import { Switch, useTheme, IconButton } from 'react-native-paper';
//引入風格
import styles from './styles';
//引入store函式
import { useDispatch, useSelector } from 'react-redux';
import { selectcolorMode } from '../../redux/colorModeSlice';
import { toggleColorMode } from '../../redux/colorModeSlice';

const ColorModeSwich = () => {
    //使用store
    const colorMode = useSelector(selectcolorMode);
    const dispatch = useDispatch();
    //使用theme
    const theme = useTheme();
    //開關用變數
    let switchState = colorMode.colorMode === "dark" ? false : true;
    //根據colorMode變更初始值
    const [isSwitchOn, setIsSwitchOn] = React.useState(switchState);
    const onToggleSwitch = () => {
        setIsSwitchOn(!isSwitchOn);
        dispatch(toggleColorMode());
    };
    return (
        <View style={styles.box}>
            <Text style={styles.text}>顏色主題</Text>
            <View style={styles.switchBox}>
                <IconButton icon={"star-four-points"} size={40} iconColor={theme.colors.onSurface} />
                <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color={theme.colors.primary} />
                <IconButton icon={"weather-sunny"} size={40} iconColor={theme.colors.onSurface} />
            </View>
        </View>
    );
}

export default ColorModeSwich;
//本物件位於設置頁，是調控顏色主題的開關