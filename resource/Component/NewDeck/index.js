import * as React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";
import { StackNavigator } from "@react-navigation/stack";
import { BarChart } from "react-native-gifted-charts";
import { Image, View } from "react-native";
import style from "./style.js";
import { useTheme } from "react-native-paper";

const NewDeck = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  return (
    <Card
      mode="outlined"
      style={[style.Card, { backgroundColor: theme.colors.surface }]}
      onPress={( ) => navigation.navigate("牌組詳細")}>
      <Button icon={"plus-circle"} labelStyle={{fontSize:64}} style={{height:169,justifyContent:"center",alignItems:"center"}}></Button>
    </Card>
  );
};

export default NewDeck;
