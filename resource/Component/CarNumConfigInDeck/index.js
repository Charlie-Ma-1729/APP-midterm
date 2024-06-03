import * as React from "react";
import { useRef, useEffect } from "react";
//引入物件
import { Text, View, Image, Pressable } from "react-native";
import {
  SegmentedButtons,
  useTheme,
  Icon,
} from "react-native-paper";
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
//引入動畫用函式
import Animated, {
  useSharedValue,
  withSpring,
  withTiming,
  useAnimatedStyle,
  useDerivedValue,
  Easing,
  runOnJS,
} from "react-native-reanimated";
import { ReText } from "react-native-redash";


import { use } from "i18next";

const CarNumConfigInDeck = ({ cardNum }) => {
  //宣告主題
  const theme = useTheme();
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
  // 動畫用變數宣告
  const num = useSharedValue(cardNum);
  const editingDeckId = useSelector(selectEditingDeckId);
  const dispatch = useDispatch();
  const isAnimating = React.useRef(false);
  const animatedNum = useDerivedValue(() => {
    return ` ${Math.floor(num.value)}`;
  });
  //播放動畫
  const resetAnimating = () => {
    isAnimating.current = false;
  };

  const plus1 = () => {
    if (num.value >= 0 && num.value < 2 && !isAnimating.current) {
      isAnimating.current = true;
      num.value = withTiming(
        num.value + 1,
        { duration: 200, easing: Easing.linear },
        () => {
          runOnJS(resetAnimating)();
          runOnJS(editDeck)(num.value);
        }
      );

    }
  };
  const minus1 = () => {
    if (num.value > 0 && num.value < 3 && !isAnimating.current) {
      isAnimating.current = true;
      num.value = withTiming(
        num.value - 1,
        { duration: 200, easing: Easing.linear },
        () => {
          runOnJS(resetAnimating)();
          runOnJS(editDeck)(num.value);
        }
      );

    }

  };

  return (
    <View style={styles.Box}>
      {isVisible && (<Pressable
        onPress={() => {
          minus1();
        }}
      >
        <View
          style={[styles.buttomBox, { backgroundColor: theme.colors.error }]}
        >
          <Icon source="minus-thick" color={theme.colors.onError} size={25} />
        </View>
      </Pressable>)}

      <View style={[styles.numBox, { backgroundColor: "#ffffff" }]}>
        <ReText style={styles.textNum} text={animatedNum} />
      </View>
      {isVisible && (<Pressable
        onPress={() => {
          plus1();
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

export default CarNumConfigInDeck;
//本物件位於搜尋頁的sheet或牌組頁，用於改變卡片數量
