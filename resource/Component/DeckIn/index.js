import * as React from "react";
import { useState, useEffect } from "react";
//引入全域變數
import { useSelector, useDispatch } from "react-redux";
import { selectIsTriger, trigerOff } from "../../redux/trigerRefreshSlice.js";
import { selectIsEdit } from "../../redux/isEditSlice";
import { Avatar, Button, Card, Text } from "react-native-paper";
import axios from "axios";
import { Image, View, FlatList, ScrollView } from "react-native";
import style from "./style.js";
import { useTheme } from "react-native-paper";
import DeckInCard from "../DeckInCard";
//import CardDataList from "../../../node/data.json";
import { useNavigation } from "@react-navigation/native";
const DeckIn = ({ currentDeckId }) => {
  //引入全域變數
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const theme = useTheme();
  const isEdit = useSelector(selectIsEdit);
  const [data, setData] = useState([]);
  const [deckta, setDeckta] = useState([]);
  const [cardObjectArray, setCardObjectArray] = useState([]); // 初始化 cardObjectArray 狀態
  let cardIdArray = [];
  let cardCountArray = [];
  let tcardObjectArray = [];
  //抓triger以觸發fetchData
  const isTriger = useSelector(selectIsTriger);
  useEffect(() => {
    fetchData();
  }, [isEdit, isTriger]);
  const updateCover = async () => {
    try {
      let highestCost = 0;
      let highestCostPictureURL = "";
      for (const object of tcardObjectArray) {
        const currentCost = object.element.cost;
        if (currentCost > highestCost) {
          highestCost = currentCost;
          highestCostPictureURL = object.picture;
        }
      }
      console.log(highestCostPictureURL);
      await axios.get("http://imatw.org:3300/updateCover", {
        params: {
          deckId: currentDeckId,
          picture: highestCostPictureURL,
        },
      });
      console.log("封面更新成功");
    } catch (error) {
      console.log("封面更新失敗");
      console.log(error);
    }
  };
const fetchData = async () => {
  // 從伺服器取得資料
  try {
    //const response = await axios.get("http://localhost:3300/api/data");
    const response = await axios.get("http://imatw.org:3300/api/data");
    setData(response.data); // 更新 data 状态
    const response2 = await axios.get("http://imatw.org:3300/api/deckta", {
      params: {
        deckId: currentDeckId,
      },
    });
    setDeckta(JSON.stringify(response2.data));
    console.log("資料讀取成功");
    navigation.setOptions({ title: response2.data.deck.name });
    cardIdArray = response2.data.deck.cardId;
    cardCountArray = response2.data.deck.count;
    let d = response.data;
    for (let i = 0; i < cardIdArray.length; i++) {
      tcardObjectArray.push(d.find((item) => item.id == cardIdArray[i]));
    }
    tcardObjectArray.forEach((obj, index) => {
      obj["num"] = cardCountArray[index];
    });
    setCardObjectArray(tcardObjectArray);
    updateCover();
  } catch (error) {
    console.log("資料讀取失敗");
    console.log(error);
  }
  finally {
    dispatch(trigerOff());
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
  <ScrollView
    style={[
      { backgroundColor: theme.colors.surface },
      { paddingHorizontal: 8 },
    ]}
  >
    {cardObjectArray.some((item) => item.element.cost == 0) && ( // 使用 some 方法判断是否有元素
      <>
        <Text style={inlinestyle.Title}>需能0</Text>
        <Text style={inlinestyle.Line} />
        <FlatList
          data={cardObjectArray.filter((item) => item.element.cost == 0)}
          renderItem={({ item }) => (
            <DeckInCard num={item.num} picture={item.picture} id={item.id} />
          )}
          horizontal={true}
        />
      </>
    )}

    {cardObjectArray.some((item) => item.element.cost == 1) && ( // 使用 some 方法判断是否有元素
      <>
        <Text style={inlinestyle.Title}>需能1</Text>
        <Text style={inlinestyle.Line} />
        <FlatList
          data={cardObjectArray.filter((item) => item.element.cost == 1)}
          renderItem={({ item }) => (
            <DeckInCard num={item.num} picture={item.picture} id={item.id} />
          )}
          horizontal={true}
        />
      </>
    )}
    {cardObjectArray.some((item) => item.element.cost == 2) && ( // 使用 some 方法判断是否有元素
      <>
        <Text style={inlinestyle.Title}>需能2</Text>
        <Text style={inlinestyle.Line} />
        <FlatList
          data={cardObjectArray.filter((item) => item.element.cost == 2)}
          renderItem={({ item }) => (
            <DeckInCard num={item.num} picture={item.picture} id={item.id} />
          )}
          horizontal={true}
        />
      </>
    )}
    {cardObjectArray.some((item) => item.element.cost == 3) && ( // 使用 some 方法判断是否有元素
      <>
        <Text style={inlinestyle.Title}>需能3</Text>
        <Text style={inlinestyle.Line} />
        <FlatList
          data={cardObjectArray.filter((item) => item.element.cost == 3)}
          renderItem={({ item }) => (
            <DeckInCard num={item.num} picture={item.picture} id={item.id} />
          )}
          horizontal={true}
        />
      </>
    )}
    {cardObjectArray.some((item) => item.element.cost == 4) && ( // 使用 some 方法判断是否有元素
      <>
        <Text style={inlinestyle.Title}>需能4</Text>
        <Text style={inlinestyle.Line} />
        <FlatList
          data={cardObjectArray.filter((item) => item.element.cost == 4)}
          renderItem={({ item }) => (
            <DeckInCard num={item.num} picture={item.picture} id={item.id} />
          )}
          horizontal={true}
        />
      </>
    )}
    {cardObjectArray.some((item) => item.element.cost == 5) && ( // 使用 some 方法判断是否有元素
      <>
        <Text style={inlinestyle.Title}>需能5</Text>
        <Text style={inlinestyle.Line} />
        <FlatList
          data={cardObjectArray.filter((item) => item.element.cost == 5)}
          renderItem={({ item }) => (
            <DeckInCard num={item.num} picture={item.picture} id={item.id} />
          )}
          horizontal={true}
        />
      </>
    )}
    {cardObjectArray.some((item) => item.element.cost >= 6) && ( // 使用 some 方法判断是否有元素
      <>
        <Text style={inlinestyle.Title}>需能6+</Text>
        <Text style={inlinestyle.Line} />
        <FlatList
          data={cardObjectArray.filter((item) => item.element.cost >= 6)}
          renderItem={({ item }) => (
            <DeckInCard num={item.num} picture={item.picture} id={item.id} />
          )}
          horizontal={true}
        />
      </>
    )}
  </ScrollView>
);
};

export default DeckIn;
