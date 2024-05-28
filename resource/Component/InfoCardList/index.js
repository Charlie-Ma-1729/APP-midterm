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
  const cardPack = filter.filterPack;
  const cardType = filter.filterType;
  const cardCost = filter.filterCost;
  const cardCharge = filter.filterCharge;
  const cardTime = filter.filterTime;
  const cardAttribute = filter.filterAttribute;
  const cardNight = filter.filterNight;
  const cardDay = filter.filterDay;
  const cardName = filter.filterName;
  console.log("card");
  console.log(cardPack);
  const [data, setData] = useState([]);

  const filterContent = useSelector(selectfilterContent);
  //使用theme
  const theme = useTheme();
  useEffect(() => {
    fetchData();
    console.log("data");
    console.log(data);
  }, [filterContent]);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3300/api/filter", {
        params: {
          pack: cardPack,
          type: cardType,
          cost: cardCost,
          charge: cardCharge,
          time: cardTime,
          attribute: cardAttribute,
          night: cardNight,
          day: cardDay,
          name: cardName,
        },
      });
      console.log("資料讀取成功");
      setData(response.data); // 更新 data 状态
    } catch (error) {
      console.log("資料讀取失敗");
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
