import * as React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";

import { Image, View, FlatList } from "react-native";
import style from "./style.js";
import { useTheme } from "react-native-paper";
import DeckInCard from "../DeckInCard";
import CardDataList from "../../json/demoCardList.json";

const DeckIn = () => {
  const theme = useTheme();
  const inlinestyle = {
    Line: {
      borderBottomColor: theme.colors.onPrimary,
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
      color: theme.colors.onPrimary,
    },
  };
  return (
    <View>
      <Text style={inlinestyle.Title}>需能0</Text>
      <Text style={inlinestyle.Line} /> 
      <FlatList
        data={CardDataList}
        renderItem={({ item }) => (
          <DeckInCard />
        )}
        horizontal={true}
        keyExtractor={(item) => item.packId}
      />
    </View>
  );
};

export default DeckIn;
