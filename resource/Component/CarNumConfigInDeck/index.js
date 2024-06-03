import * as React from "react";
import { useRef, useEffect } from "react";
//引入物件
import { Text, View, Image, Pressable } from "react-native";
import { SegmentedButtons, useTheme, Icon } from "react-native-paper";
//引入風格
import styles from "./styles.js";
//navigation提供的物件
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
//引入store函式
import { useDispatch, useSelector } from "react-redux";
import { selectsheetContent } from "../../redux/sheetContentSlice.js";
import {
  selectIsEdit,
  selectEditingDeck,
  editOn,
  editOff,
  setEditingDeck,
  setEditingDeckId,
  selectEditingDeckId,
} from "../../redux/isEditSlice.js";
import { selectIsTriger, trigerOn, trigerOff } from "../../redux/trigerRefreshSlice.js";

import { use } from "i18next";

const CarNumConfigInDeck = ({ cardNum, cardId }) => {
  //宣告主題
  const theme = useTheme();
  //是否處於編輯模式(若否則隱藏)
  const isEdit = useSelector(selectIsEdit);
  //觸發
  const isTriger = useSelector(selectIsTriger);
  const [isVisible, setIsVisible] = React.useState(true);
  React.useEffect(() => {
    if (isEdit == true) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isEdit]);
  // 動畫用變數宣告
  const [num, setNum] = React.useState(cardNum);
  const editingDeckId = useSelector(selectEditingDeckId);
  const dispatch = useDispatch();
  //檢測tri觸發並改變num值
  React.useEffect(() => {
    if (isTriger) {
      setNum(cardNum);
      dispatch(trigerOff());
    }
  }, [isTriger])

  const updateNum = async (delta) => {
    const newNum = num + delta;
    if (newNum >= 0 && newNum <= 2) {
      await setNum(newNum);
      await editDeck(newNum);
      await dispatch(trigerOn());
    }
  };
  const editDeck = async (count) => {
    try {
      //await axios.get("http://localhost:3300/editDeck", {
      await axios.get("http://imatw.org:3300/editDeck", {
        params: {
          deckId: editingDeckId,
          cardId: cardId,
          count: count,
        },
      });
      console.log("資料上傳ID" + cardId + "count" + count);
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

      <View style={[styles.numBox, { backgroundColor: "#ffffff" }]}>
        <Text>{num}</Text>
      </View>
      {isVisible && (
        <Pressable
          onPress={() => {
            updateNum(1);
          }}
        >
          <View
            style={[
              styles.buttomBox,
              { backgroundColor: theme.colors.primary },
            ]}
          >
            <Icon
              source="plus-thick"
              color={theme.colors.onPrimary}
              size={25}
            />
          </View>
        </Pressable>
      )}
    </View>
  );
};

export default CarNumConfigInDeck;
//本物件位於搜尋頁的sheet或牌組頁，用於改變卡片數量
