import * as React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigator } from "@react-navigation/stack";
import { BarChart } from "react-native-gifted-charts";
import { Image, View } from "react-native";
import style from "./style.js";
import { useTheme } from "react-native-paper";
import { use } from "i18next";
import { useSelector, useDispatch } from "react-redux";
import { selectIsEdit } from "../../redux/isEditSlice";
import axios from "axios";

const PerDeck = ({ name, id, picture }) => {
  const theme = useTheme();
  const navigation = useNavigation();
  const isEdit = useSelector(selectIsEdit);
  const dispatch = useDispatch();
  const [data, setData] = React.useState([]);
  const inlinestyle = {
    Line: {
      borderBottomColor: theme.colors.outlineVariant,
      borderBottomWidth: 1,
      marginVertical: 4,
      marginHorizontal: 8,
      fontSize: 1,
    },
    attr: {
      marginHorizontal: 2,
      padding: 0,
      backgroundColor: theme.colors.primaryContainer,
      color: theme.colors.onPrimaryContainer,
      icon: { color: theme.colors.onPrimaryContainer },
    },
  };
  useEffect(() => {
    updateData();
  }, [isEdit]);

  updateData = async () => {
    let costCount = await axios.get("http://imatw.org:3300/api/costCount", {
      params: {
        deckId: id,
      },
    });
    console.log(costCount);
    setData([
      { value: costCount[0], label: "0" },
      { value: costCount[1], label: "1" },
      { value: costCount[2], label: "2" },
      { value: costCount[3], label: "3" },
      { value: costCount[4], label: "4" },
      { value: costCount[5], label: "5" },
      { value: costCount[6], label: "6+" },
    ]);
  };
  const yLabel = ["0", "2", "4", "6", "8", "10"];
  return (
    <Card
      mode="outlined"
      style={[style.Card, { backgroundColor: theme.colors.surface }]}
      onPress={() => navigation.navigate("牌組詳細", { id: id, name: name })}
    >
      <Card.Content>
        <Text
          variant="titleLarge"
          style={{ backgroundColor: theme.colors.onsurface }}
        >
          {name}
        </Text>
        <Text style={inlinestyle.Line} />
        <View style={style.container}>
          <View style={style.leftContainer}>
            <Image source={{ uri: picture }} style={style.cover} />
          </View>
          <View style={style.rightContainer}>
            <Card
              mode="outlined"
              style={[
                style.ChartCard,
                { borderColor: theme.colors.surfaceVariant },
              ]}
            >
              <View style={style.chart}>
                <BarChart
                  data={data}
                  barWidth={7}
                  height={80}
                  xAxisLabelsVerticalShift={-8}
                  yAxisLabelWidth={30}
                  spacing={20}
                  maxValue={10}
                  dashGap={0}
                  noOfSections={5}
                  yAxisLabelTexts={yLabel}
                  formatYLabel={(yLabel) => {
                    const labelVal = Number(yLabel);
                    if (labelVal >= 10) return "10+";
                    return yLabel;
                  }}
                  style={style.barchart}
                  frontColor={theme.colors.primary}
                  backgroundColor={theme.colors.surface}
                  xAxisLabelTextStyle={{ color: theme.colors.primary }}
                  yAxisTextStyle={{ color: theme.colors.primary }}
                />
              </View>
              {/* <View style={style.buts}>
                <Button
                  icon="camera"
                  mode="contained"
                  sizestyle={inlinestyle.attr}
                >
                  1000
                </Button>
                <Button icon="camera" mode="contained" style={inlinestyle.attr}>
                  5
                </Button>
                <Button icon="camera" mode="contained" style={inlinestyle.attr}>
                  0
                </Button>
                <Button icon="camera" mode="contained" style={inlinestyle.attr}>
                  5
                </Button>
              </View> */}
            </Card>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

export default PerDeck;
