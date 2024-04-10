import * as React from 'react';
//引入物件
import { Text, View, Image } from 'react-native';
import { Switch, useTheme, IconButton } from 'react-native-paper';
//引入自訂物件
import InfoCardChip from '../InfoCardChip';
//引入風格
import styles from './styles';
//引入store函式

const InfoCard = ({ packId, picture, name, type, element }) => {
    //使用theme
    const theme = useTheme();
    return (
        <View style={{ ...styles.box, backgroundColor: theme.colors.surfaceContainer }}>
            <Image style={styles.pic} source={{ uri: picture }} />
            <View style={styles.infoBox}>
                <Text style={{ ...styles.cardName, color: theme.colors.onSurface }}>{name}</Text>
                <View style={styles.chipBox}>
                    <InfoCardChip label={"需能"} num={element.cost} />
                    <InfoCardChip label={"充能"} num={element.charge} />
                    <InfoCardChip label={"走時"} num={element.time} />
                    <InfoCardChip label={"屬性"} num={element.attribute} />
                    <InfoCardChip label={"夜"} num={element.night} />
                    <InfoCardChip label={"日"} num={element.day} />
                </View>
                <View style={styles.bottomBox}>
                    <View>
                        <Text style={{ ...styles.bottomText, color: theme.colors.onSurface }}>{type}</Text>
                        <Text style={{ ...styles.bottomText, color: theme.colors.onSurface }}>{packId}</Text>
                    </View>
                    <IconButton icon={"eye"} iconColor={theme.colors.onPrimary} containerColor={theme.colors.primary} size={18} />
                </View>
            </View>
        </View>
    );
}

export default InfoCard;