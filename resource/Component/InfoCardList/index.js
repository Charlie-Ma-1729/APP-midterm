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
  const [FC, setFC] = useState({}); // 使用 useState 管理 FC
  const [data, setData] = useState([]);
  //使用theme
  const theme = useTheme();
  useEffect(() => {
    const getData = async () => {
      const filterContent = await useSelector(selectfilterContent);
      setFC(filterContent);
    };
    axios
      fetchData();
  }, []);
  const fetchData = async () => {
    try {
      console.log(FC);
      const response = await axios.get('http://localhost:3300/api/filter',{
        pack: FC.filterPack,
        type: FC.filterType,
        cost: FC.filterCost,
        charge: FC.filterCharge,
        time: FC.filterTime,
        attribute:FC.filterAttribute,
        night: FC.filterNight,
        day: FC.filterDay,
        name: FC.filterName
      });
      console.log(FC);
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
