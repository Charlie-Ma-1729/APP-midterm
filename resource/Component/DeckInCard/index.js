import * as React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";

import { Image, View, FlatList } from "react-native";
import style from "./style.js";
import { useTheme } from "react-native-paper";

//引入自製物件
import CarNumConfigInDeck from "../CarNumConfigInDeck/index.js";


const DeckInCard = ({ picture, num }) => {
  const theme = useTheme();
  return (
    <View style={style.box}>
      <Image style={style.pic} source={{ uri: picture }} />
      <CarNumConfigInDeck cardNum={num} />
    </View>

  );
};

export default DeckInCard;
