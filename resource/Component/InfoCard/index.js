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

const InfoCard = () => {
    //使用theme
    const theme = useTheme();
    return (
        <View style={{ ...styles.box, backgroundColor: theme.colors.surfaceContainer }}>
            <Image style={styles.pic} source={require("../../../assets/images/Card.png")} />
            <Text style={styles.cardName}>妮菈醬(殘機)</Text>
        </View>
    );
}

export default InfoCard;