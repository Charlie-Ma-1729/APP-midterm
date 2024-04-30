import * as React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";

import { Image, View, FlatList } from "react-native";
import style from "./style.js";
import { useTheme } from "react-native-paper";

import CardDataList from "../../../node/data.json";



const DeckInCard = ({picture}) => {
  const theme = useTheme();
  return (
      <Image style={style.pic} source={{uri: picture}} />
  );
};

export default DeckInCard;
