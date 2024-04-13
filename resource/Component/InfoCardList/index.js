import * as React from 'react';
//引入物件
import { Text, View, ScrollView, FlatList } from 'react-native';
import { Switch, useTheme, IconButton } from 'react-native-paper';
//引入自訂物件
import InfoCard from '../InfoCard';
//引入風格
import styles from './styles';
//引入store函式

//測試用資料
import CardDataList from "../../json/demoCardList.json"

const InfoCardList = () => {
    //使用theme
    const theme = useTheme();
    return (
        <View style={styles.box}>
            <FlatList
                data={CardDataList}
                numColumns={2}
                renderItem={({ item }) =>
                    <InfoCard packId={item.packId}
                        picture={item.picture}
                        name={item.name}
                        type={item.type}
                        element={item.element} />}
                keyExtractor={item => item.packId} />
        </View>
    );
}

export default InfoCardList;
//此物件用於渲染大量info Card