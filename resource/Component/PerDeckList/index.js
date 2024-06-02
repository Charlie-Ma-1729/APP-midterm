import * as React from "react";
import { useState, useEffect } from "react";
//引入物件
import { Text, View, ScrollView, FlatList } from "react-native";
import { Switch, useTheme, IconButton } from "react-native-paper";
import axios from "axios";
//引入自訂物件
import PerDeck from "../PerDeck";
//引入風格
import styles from "./styles";
//引入store函式
import { useSelector, useDispatch } from "react-redux";
import { selectfilterContent } from "../../redux/filterSlice";

//測試用資料
//import CardDataList from "../../../node/data.json";
import { use } from "i18next";
const PerDeckList = ({ data }) => {
    useEffect(() => {
        console.log(data);
    }, [data]);
    //使用theme
    const theme = useTheme();
    return (
        <View style={styles.box}>
            <FlatList
                data={data}
                numColumns={1}
                renderItem={({ item }) => (
                    <PerDeck
                        name={item.name}
                        id={item.deckId}
                        picture={item.picture}
                    />
                )}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.deckId}
            />
        </View>
    );

};

export default PerDeckList;
//此物件用於渲染大量PerDeck