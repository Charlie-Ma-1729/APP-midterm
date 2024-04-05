import * as React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";

import { BarChart } from "react-native-gifted-charts";
import { Image, View } from "react-native";
import style from "./style.js";
import { useTheme } from "react-native-paper";

const cardImg = require("../../../assets/images/Card.png");

const PerDeck = () => {
  const theme = useTheme();
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
      flex: 1,
      padding: 0,
    },
  };
  const data = [
    { value: 10, label: "0" },
    { value: 4, label: "1" },
    { value: 2, label: "2" },
    { value: 2, label: "3" },
    { value: 0, label: "4" },
    { value: 2, label: "5+" },
  ];
  const yLabel = ["0", "2", "4", "6", "8", "10"];
  return (
    <Card mode="outlined" style={style.Card}>
      <Card.Content>
        <Text variant="titleLarge">殘機</Text>
        <Text style={inlinestyle.Line} />
        <View style={style.container}>
          <View style={style.leftContainer}>
            <Image source={cardImg} style={style.cover} />
          </View>
          <View style={style.rightContainer}>
            <Card mode="outlined" style={style.ChartCard}>
              <View style={{ flex: 4, justifyContent: "center" }}>
                <BarChart
                  data={data}
                  barWidth={12}
                  height={100}
                  xAxisLabelsVerticalShift={-8}
                  yAxisLabelWidth={30}
                  spacing={12}
                  maxValue={10}
                  dashGap={0}
                  noOfSections={5}
                  yAxisLabelTexts={yLabel}
                  formatYLabel={(yLabel) => {
                    const labelVal = Number(yLabel);
                    if (labelVal >= 10) return "10+";
                    return yLabel;
                  }}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button icon="camera" mode="contained" style={inlinestyle.attr}>
                  10
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
              </View>
            </Card>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

export default PerDeck;
