import * as React from 'react';
//引入物件
import { Text, View, Image } from 'react-native';
import { Switch, useTheme, IconButton } from 'react-native-paper';
//引入自訂物件
import InfoCardChip from '../InfoCardChip';
//引入風格
import styles from './styles';
//引入store函式

const InfoCard = () => {
    //使用theme
    const theme = useTheme();
    return (
        <View style={{ ...styles.box, backgroundColor: theme.colors.surfaceContainer }}>
            <Image style={styles.pic} source={require("../../../assets/images/Card.png")} />
            <View style={styles.infoBox}>
                <Text style={{ ...styles.cardName, color: theme.colors.onSurface }}>妮菈醬(殘機)</Text>
                <View style={styles.chipBox}>
                    <InfoCardChip label={"需能"} num={6} />
                    <InfoCardChip label={"充能"} num={0} />
                    <InfoCardChip label={"走時"} num={5} />
                    <InfoCardChip label={"屬性"} num={"暗"} />
                    <InfoCardChip label={"夜"} num={140} />
                    <InfoCardChip label={"日"} num={80} />
                </View>
                <View style={styles.bottomBox}>
                    <View>
                        <Text style={{ ...styles.bottomText, color: theme.colors.onSurface }}>角色</Text>
                        <Text style={{ ...styles.bottomText, color: theme.colors.onSurface }}>AATW-001</Text>
                    </View>
                    <IconButton icon={"eye"} iconColor={theme.colors.onPrimary} containerColor={theme.colors.primary} size={18} />
                </View>
            </View>
        </View>
    );
}

export default InfoCard;