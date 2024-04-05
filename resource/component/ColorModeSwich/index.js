import * as React from 'react';
//引入物件
import { Text, View, Image } from 'react-native';
import { Switch, useTheme, IconButton } from 'react-native-paper';
//引入風格
import styles from './styles';
//引入store函式
import { useDispatch, useSelector } from 'react-redux';
import { toggleColorMode } from '../../redux/colorModeSlice';

const ColorModeSwich = () => {
    //使用store
    const dispatch = useDispatch();
    //使用theme
    const theme = useTheme();
    //開關用變數
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => {
        setIsSwitchOn(!isSwitchOn);
        dispatch(toggleColorMode());
    };
    return (
        <View style={styles.box}>
            <Text style={styles.text}>顏色主題</Text>
            <View style={styles.switchBox}>
                <IconButton icon={"star-four-points"} size={40} color={theme.colors.onSurface} />
                <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color={theme.colors.primary} />
                <IconButton icon={"weather-sunny"} size={40} color={theme.colors.onSurface} />
            </View>
        </View>
    );
}

export default ColorModeSwich;