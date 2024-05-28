import * as React from "react";
import { useState, useEffect } from "react";
//引入物件
import { Text, View, ScrollView, FlatList } from "react-native";
import { Switch, useTheme, IconButton } from "react-native-paper";
import axios from "axios";
//引入自訂物件
import InfoCard from "../InfoCard";
//引入風格
import styles from "./styles";
//引入store函式
import { useSelector, useDispatch } from "react-redux";
import { selectfilterContent } from "../../redux/filterSlice";

//測試用資料
//import CardDataList from "../../../node/data.json";
import { use } from "i18next";
const InfoCardList = () => {
  const filter = useSelector(selectfilterContent);
  const dispatch = useDispatch();
  //宣告表單基礎變數
  const [cardPack, setCardPack] = React.useState(filter.filterPack);
  const [cardType, setCardType] = React.useState(filter.filterType);
  const [cardCost, setCardCost] = React.useState(filter.filterCost);
  const [cardCharge, setCardCharge] = React.useState(filter.filterCharge);
  const [cardTime, setCardTime] = React.useState(filter.filterTime);
  const [cardAttribute, setCardAttribute] = React.useState(filter.filterAttribute);
  const [cardNight, setCardNight] = React.useState(filter.filterNight);
  const [cardDay, setCardDay] = React.useState(filter.filterDay);
  const [cardName, setCardName] = React.useState(filter.filterName);
  const [data, setData] = useState([]);
  //使用theme
  const theme = useTheme();
  useEffect(() => {
    axios;
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3300/api/filter", {
        pack: cardPack,
        type: cardType,
        cost: cardCost,
        charge: cardCharge,
        time: cardTime,
        attribute: cardAttribute,
        night: cardNight,
        day: cardDay,
        name: cardName,
      });
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.box}>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({ item }) => (
          <InfoCard
            packId={item.packId}
            picture={item.picture}
            name={item.name}
            type={item.type}
            element={item.element}
            effect={item.effect}
            illustrator={item.illustrator}
          />
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.packId}
      />
    </View>
  );
};

export default InfoCardList;
//此物件用於渲染大量info Card
