import * as React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";
import { StackNavigator } from "@react-navigation/stack";
import { BarChart } from "react-native-gifted-charts";
import { Image, View } from "react-native";
import style from "./style.js";
import { useTheme } from "react-native-paper";

const PerDeck = ({ name, id, picture }) => {
  const theme = useTheme();
  const navigation = useNavigation();
  return (
    <Card
      mode="outlined"
      style={[style.Card, { backgroundColor: theme.colors.surface }]}
      onPress={() => navigation.navigate("牌組詳細", { id: id, name: name })}
    >
      <Card.Content>
        <View style={style.container}>
          <View style={style.leftContainer}>
            <Image source={{ uri: picture }} style={style.cover} />
          </View>
          <View style={style.rightContainer}>
            <Text
              variant="titleLarge"
              style={{ backgroundColor: theme.colors.onsurface }}
            >
              {name}
            </Text>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

export default PerDeck;
