import * as React from "react";
import { useRef, useEffect } from "react";
//引入物件
import { Text, View, Image, Pressable } from "react-native";
import {
  SegmentedButtons,
  useTheme,
  Button,
  TextInput,
  IconButton,
  Divider,
  Icon,
} from "react-native-paper";
//引入風格
import styles from "./styles";
//navigation提供的物件
import { useNavigation, useRoute } from "@react-navigation/native";
//引入store函式
import { useDispatch, useSelector } from "react-redux";
import { selectfilterContent } from "../../redux/filterSlice";
import { setFilterContent } from "../../redux/filterSlice";
import { trigerOn } from "../../redux/trigerRefreshSlice.js";
import axios from "axios";
import {
  selectIsEdit,
  selectEditingDeck,
  editOn,
  editOff,
  setEditingDeck,
  setEditingDeckId,
  selectEditingDeckId,
} from "../../redux/isEditSlice.js";
import { selectIsTriger, trigerOff } from "../../redux/trigerRefreshSlice.js";

import { selectsheetContent } from "../../redux/sheetContentSlice";
import { use } from "i18next";

const CarNumConfig = () => {
  //宣告主題
  const theme = useTheme();
  //觸發重新渲染
  const dispatch = useDispatch();
  //是否處於編輯模式(若否則隱藏)
  const isEdit = useSelector(selectIsEdit);
  const [isVisible, setIsVisible] = React.useState(true);
  React.useEffect(() => {
    if (isEdit == true) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isEdit])
  //觸發
  const isTriger = useSelector(selectIsTriger);

  // 動畫用變數宣告
  const [num, setNum] = React.useState(0);
  const editingDeckId = useSelector(selectEditingDeckId);
  //檢測tri觸發並改變num值
  React.useEffect(() => {
    if (isTriger) {
      fetchData();
      dispatch(trigerOff());
    }
  }, [isTriger])
  //內容改變就抓資料
  const sheetContent = useSelector(selectsheetContent);
  useEffect(() => {
    fetchData();
  }, [sheetContent.sheetContent]);
  const updateNum = async (delta) => {
    const newNum = num + delta;
    if (newNum >= 0 && newNum <= 2) {
      await setNum(newNum);
      await editDeck(newNum); // 等待编辑操作完成
      await dispatch(trigerOn());
    }
  };


  //使用store，將其帶入
  const fetchData = async () => {
    try {
      console.log(editingDeckId);
      //const response = await axios.get("http://localhost:3300/getCardCount");
      const response = await axios.get("http://imatw.org:3300/getCardCount", {
        params: {
          deckId: editingDeckId,
          cardId: sheetContent.sheetContent.sheetId,
        },
      });
      console.log("數字讀取成功");
      setNum(response.data.count);
    } catch (error) {
      console.log("數字讀取失敗");
      console.log(error);
    }
  };
  const editDeck = async (count) => {
    try {
      //await axios.get("http://localhost:3300/editDeck", {
      const response = await axios.get("http://imatw.org:3300/editDeck", {
        params: {
          deckId: editingDeckId,
          cardId: sheetContent.sheetContent.sheetId,
          count: count,
        },
      });
      console.log("資料上傳成功");
    } catch (error) {
      console.log("資料上傳失敗");
      console.log(error);
    }
  };

  return (
    <View style={styles.Box}>
      {isVisible && (
        <Pressable
          onPress={() => {
            updateNum(-1);
          }}
        >
          <View
            style={[styles.buttomBox, { backgroundColor: theme.colors.error }]}
          >
            <Icon source="minus-thick" color={theme.colors.onError} size={25} />
          </View>
        </Pressable>
      )}
      {isVisible && (
        <View style={[styles.numBox, { backgroundColor: "#ffffff" }]}>
          <Text>{num}</Text>
        </View>)}
      {isVisible && (
        <Pressable
          onPress={() => {
            updateNum(1);
          }}
        >
          <View
            style={[styles.buttomBox, { backgroundColor: theme.colors.primary }]}
          >
            <Icon source="plus-thick" color={theme.colors.onPrimary} size={25} />
          </View>
        </Pressable>)}

    </View>
  );
};

export default CarNumConfig;
//本物件位於搜尋頁的sheet或牌組頁，用於改變卡片數量
