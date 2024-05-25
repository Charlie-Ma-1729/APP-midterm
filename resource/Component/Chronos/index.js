import React from 'react';
//react-native-paper提供的物件
import { IconButton, Appbar, useTheme, FAB } from 'react-native-paper';
//引入style
import styles from './styles';
//普通宣告
import { Text, View, StatusBar, ScrollView, Image } from 'react-native';
//引入自己的物件
import ChronosRound from '../ChronosRound';
import ChronosCoinAndTime from '../ChronosCoinAndTime';
const Chronos = () => {
    const theme = useTheme();

    return (
        <View style={styles.box}>
            <View style={styles.roundBox}>
                <ChronosRound parentWidth={300} parentHeight={300} radius={140} />
            </View>
            <View style={styles.CoinAndTimeBox}>
                <ChronosCoinAndTime />
            </View>
        </View>

    );
}

export default Chronos;
//物件放在遊戲頁，能夠展示時間