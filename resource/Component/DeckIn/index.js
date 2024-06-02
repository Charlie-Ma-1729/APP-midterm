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

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3300/api/data");
      console.log("資料讀取成功");
      setData(response.data); // 更新 data 状态
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
    <View style={[{ backgroundColor: theme.colors.surface }, { paddingHorizontal: 8 }]}>
      <Text style={inlinestyle.Title}>需能0</Text>
      <Text style={inlinestyle.Line} />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <DeckInCard picture={item.picture} />
        )}
        horizontal={true}
        keyExtractor={(item) => item.packId}
      />
    </View>
  );
};

export default DeckIn;
