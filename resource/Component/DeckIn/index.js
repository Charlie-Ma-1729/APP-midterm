import * as React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";

import { Image, View, FlatList } from "react-native";
import style from "./style.js";
import { useTheme } from "react-native-paper";
import DeckInCard from "../DeckInCard";
import CardDataList from "../../../node/data.json";

const DeckIn = () => {
  const theme = useTheme();
  
  useEffect(() => {
    axios
      .get("http://localhost:3300/api/data")
  }, []);
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
    <View style={[{backgroundColor:theme.colors.surface},{paddingHorizontal:8}]}>
      <Text style={inlinestyle.Title}>需能0</Text>
      <Text style={inlinestyle.Line} /> 
      <FlatList
        data={CardDataList}
        renderItem={({ item }) => (
          <DeckInCard picture={item.picture}/>
        )}
        horizontal={true}
        keyExtractor={(item) => item.packId}
      />
    </View>
  );
};

export default DeckIn;
