import * as React from "react";
import { useState, useEffect } from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import axios from "axios";
import { Image, View, FlatList } from "react-native";
import style from "./style.js";
import { useTheme } from "react-native-paper";
import DeckInCard from "../DeckInCard";
//import CardDataList from "../../../node/data.json";

const DeckIn = () => {
  const theme = useTheme();
  const [data, setData] = useState([]);
  const [deckta, setDeckta] = useState([]);
  const [cardObjectArray, setCardObjectArray] = useState([]); // 初始化 cardObjectArray 狀態
  const currentDeckId = "1717335070381";
  let cardIdArray = [];
  let cardCountArray = [];
  let tcardObjectArray = [];
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    // 從伺服器取得資料
    try {
      //const response = await axios.get("http://localhost:3300/api/data");
      const response = await axios.get("http://imatw.org:3300/api/data");
      setData(response.data); // 更新 data 状态
      const response2 = await axios.get("http://imatw.org:3300/api/deckta", {
        params: {
          deckId: currentDeckId,
        },
      });
      setDeckta(JSON.stringify(response2.data));
      console.log("資料讀取成功");
      cardIdArray = response2.data.deck.cardId;
      cardCountArray = response2.data.deck.count;
      let d = response.data;
      for (let i = 0; i < cardIdArray.length; i++) {
        tcardObjectArray.push(
          d.find((item) => item.id == cardIdArray[i])
        );
      }
      setCardObjectArray(tcardObjectArray);
    } catch (error) {
      console.log("資料讀取失敗");
      console.log(error);
    }
  };

  const inlinestyle = {
    Line: {
      borderBottomColor: theme.colors.onSurface,
      borderBottomWidth: 1,
      marginVertical: 4,
      marginHorizontal: 16,
      marginRight: 128,
      fontSize: 1,
    },
    Title: {
      fontSize: 20,
      fontWeight: "bold",
      marginVertical: 4,
      marginHorizontal: 16,
      color: theme.colors.onSurface,
    },
  };

  return (
    <View
      style={[
        { backgroundColor: theme.colors.surface },
        { paddingHorizontal: 8 },
      ]}
    >
      <Text style={inlinestyle.Title}>需能0</Text>
      <Text style={inlinestyle.Line} />
      <FlatList
        data={cardObjectArray}
        renderItem={({ item }) => <DeckInCard picture={item.picture} />}
        horizontal={true}
      />
    </View>
  );
};

export default DeckIn;
