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
  FlatList,
  ScrollView,
  ImageComponent,
} from "react-native";
//宣告自己的物件
import PerDeck from "../Component/PerDeck";
//import PerDeckList from "../Component/PerDeckList";

import style from "../Component/NewDeck/style.js";
import { useSelector, useDispatch } from "react-redux";
import { selectDeckList } from "../redux/deckListSlice.js";
import {
  selectIsEdit,
  selectEditingDeck,
  editOn,
  editOff,
  setEditingDeck,
  setEditingDeckId,
  selectEditingDeckId,
} from "../redux/isEditSlice.js";
import { selectDeckList } from "../redux/deckListSlice.js";
import { useNavigation } from "@react-navigation/native";
import { use } from "i18next";

const DeckTopScreen = () => {
  //使用全域變數
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
  //根據本地抓取牌組陣列資料
  const deckList = useSelector(selectDeckList);
  useEffect(() => {
    console.log(editingDeckId);
  }, [editingDeckId]);
  useEffect(() => {
    getData();
  }, [deckList]);

  const hideDialog = () => {
    setVisible(false);
  };
  const goEdit = async () => {
    handleEditOn();
    fetchData();
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
      navigation.navigate("牌組詳細", { id: response.data.id, name: text });
    } catch (error) {
      console.log("牌組建立失敗");
      console.log(error);
    }
  };

  const getData = async () => {
    try {
      //await axios.get("http://localhost:3300/api/deckList", {
      const response = await axios.get("http://imatw.org:3300/api/deckList", {
        params: {
          deckIdArray: deckList,
        },
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
      {/*因技術問題將列表改成直接寫入screen*/}
      <FlatList
        data={data}
        numColumns={1}
        renderItem={({ item }) => (
          <PerDeck name={item.name} id={item.deckId} picture={item.picture} />
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.deckId}
        ListHeaderComponent={
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
        }
      />

      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>新建牌組</Dialog.Title>
          <Dialog.Content>
            <TextInput
              label="牌組名稱"
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
              完成
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
