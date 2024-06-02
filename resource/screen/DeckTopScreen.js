import * as React from "react";
import { PaperProvider } from "react-native-paper";
import axios from "axios";
import { useEffect } from "react";
//react-native-paper提供的物件
import {
  IconButton,
  Appbar,
  useTheme,
  Portal,
  Dialog,
  TextInput,
  Card,
  Button,
} from "react-native-paper";

//普通宣告
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  ImageComponent,
} from "react-native";

import PerDeck from "../Component/PerDeck";

import style from "../Component/NewDeck/style.js";
import { useSelector, useDispatch } from "react-redux";
import {
  selectIsEdit,
  selectEditingDeck,
  editOn,
  editOff,
  setEditingDeck,
  setEditingDeckId,
  selectEditingDeckId,
} from "../redux/isEditSlice.js";
import { useNavigation } from "@react-navigation/native";
import { use } from "i18next";

const DeckTopScreen = () => {
  const theme = useTheme();
  const isEdit = useSelector(selectIsEdit);
  const editingDeckId = useSelector(selectEditingDeckId);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleEditOn = () => {
    dispatch(editOn());
  };

  const handleEditOff = () => {
    dispatch(editOff());
  };

  const [visible, setVisible] = React.useState(false);
  const [text, setText] = React.useState("");
  const showDialog = () => setVisible(true);
  const [data, setData] = React.useState([]);
  useEffect(() => {
    console.log(editingDeckId);
  }, [editingDeckId]);
  useEffect(() => {
    getData();
  }, []);

  const hideDialog = () => {
    setVisible(false);
  };
  const goEdit = () => {
    handleEditOn();
    fetchData();
    navigation.navigate("牌組詳細");
  }; //進入編輯模式

  const fetchData = async () => {
    try {
      //await axios.get("http://localhost:3300/newDeck", {
      const response = await axios.get("http://imatw.org:3300/newDeck", {
        params: {
          name: text,
        },
      });
      console.log("牌組建立成功");
      dispatch(setEditingDeckId(response.data.id));
      dispatch(setEditingDeck(text));
    } catch (error) {
      console.log("牌組建立失敗");
      console.log(error);
    }
  };

  const getData = async () => {
    try {
      //await axios.get("http://localhost:3300/api/deckList", {
      const response = await axios.get("http://imatw.org:3300/api/deckList",{
        params:{
          deckIdArray: 
        }
      });
      console.log("牌組列表成功");
      setData(response.data);
    } catch (error) {
      console.log("牌組列表失敗");
      console.log(error);
    }
  };

  return (
    <View
      style={{ ...styles.container, backgroundColor: theme.colors.surface }}
    >
      <PerDeck />
      <Card
        mode="outlined"
        style={[style.Card, { backgroundColor: theme.colors.surface }]}
        onPress={() => {
          showDialog;
        }}
      >
        <Button
          onPress={showDialog}
          icon={"plus-circle"}
          labelStyle={{ fontSize: 64 }}
          style={{
            height: 169,
            justifyContent: "center",
            alignItems: "center",
          }}
        ></Button>
      </Card>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>新建卡組</Dialog.Title>
          <Dialog.Content>
            <TextInput
              label="卡組名稱"
              value={text}
              onChangeText={(text) => setText(text)}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              onPress={() => {
                hideDialog();
                goEdit();
              }}
            >
              Done
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default DeckTopScreen;
