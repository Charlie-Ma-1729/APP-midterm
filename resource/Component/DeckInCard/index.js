import * as React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";

import { Image, View, FlatList } from "react-native";
import style from "./style.js";
import { useTheme } from "react-native-paper";
//引入全域變數
import { useSelector, useDispatch } from "react-redux";
import { selectIsTriger, trigerOff } from "../../redux/trigerRefreshSlice.js";
//引入自製物件
import CarNumConfigInDeck from "../CarNumConfigInDeck/index.js";


const DeckInCard = ({ picture, num, id }) => {
  const theme = useTheme();
  const [brigeNum, setBrigeNum] = React.useState(num);
  const isTriger = useSelector(selectIsTriger);
  React.useEffect(() => {
    setBrigeNum(num)
  }, [isTriger])
  return (
    <View style={style.box}>
      <Image style={style.pic} source={{ uri: picture }} />
      <CarNumConfigInDeck cardNum={brigeNum} cardId={id} />
    </View>

  );
};

export default DeckInCard;
