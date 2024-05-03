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
    //非角色卡沒有攻擊力，移除日月
    let chipArr
    if (type == "角色") {
        chipArr = [
            <InfoCardChip key={"cost"} label={"需能"} num={element.cost} />,
            <InfoCardChip key={"charge"} label={"充能"} num={element.charge} />,
            <InfoCardChip key={"time"} label={"走時"} num={element.time} />,
            <InfoCardChip key={"attribute"} label={"屬性"} num={element.attribute} />,
            <InfoCardChip key={"night"} label={"夜"} num={element.night} />,
            <InfoCardChip key={"day"} label={"日"} num={element.day} />
        ]
    } else {
        chipArr = [
            <InfoCardChip key={"cost"} label={"需能"} num={element.cost} />,
            <InfoCardChip key={"charge"} label={"充能"} num={element.charge} />,
            <InfoCardChip key={"time"} label={"走時"} num={element.time} />,
            <InfoCardChip key={"attribute"} label={"屬性"} num={element.attribute} />,
        ]
    }

    return (
        <View style={{ ...styles.box, backgroundColor: theme.colors.surfaceContainer }}>
            <Image style={styles.pic} source={{ uri: picture }} />
            <View style={styles.infoBox}>
                <Text numberOfLines={1} ellipsizeMode="tail" style={{ ...styles.cardName, color: theme.colors.onSurface }}>{name}</Text>
                <View style={styles.chipBox}>
                    {chipArr}
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
//此物件位於搜尋頁，代表單一張卡片