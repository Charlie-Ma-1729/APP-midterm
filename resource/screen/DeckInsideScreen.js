import * as React from "react";
//react-native-paper提供的物件
import {
  IconButton,
  Appbar,
  useTheme,
  FAB,
  Portal,
  Dialog,
  TextInput,
  Card,
  Button,
} from "react-native-paper";

//普通宣告
import { StyleSheet, Text, View, StatusBar, ScrollView } from "react-native";
import axios from "axios";
import DeckIn from "../Component/DeckIn";
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

const DeckInsideScreen = ({ navigation, route }) => {
  const currentDeckId = route.params.id;
  const currentDeckName = route.params.name;
  const [visible, setVisible] = React.useState(false);
  const theme = useTheme();
  const isEdit = useSelector(selectIsEdit);
  const editingDeckId = useSelector(selectEditingDeckId);
  const dispatch = useDispatch();
  const showDialog = () => setVisible(true);
  const hideDialog = () => {
    setVisible(false);
  };
  React.useEffect(() => {
    if (route.params?.action == "deleteDeck") {
      navigation.setParams({ action: null });
        deleteDeck();
    } else if (route.params?.action == "coin") {
      flipCoin();
      showCoinDialog();
      console.log(route.params?.action);
      navigation.setParams({ action: null });
    }
  }, [route.params?.action]);
  const deleteDeck = async () => {
    await axios.get("http://imatw.org:3300/api/deleteDeck", {
      params: {
        deckId: currentDeckId,
      },
    });
    handleEditOff();
    navigation.navigate("牌組");
  }; //刪除牌組
  const choosetoEditthis = () => {
    dispatch(editOn());
    dispatch(setEditingDeckId(currentDeckId));
    dispatch(setEditingDeck(currentDeckName));
  };
  return (
    <View
      style={{ ...styles.container, backgroundColor: theme.colors.surface }}
    >
      {!isEdit && (
        <>
          <FAB
            color={theme.colors.onPrimaryContainer}
            backgroundColor={theme.colors.primaryContainer}
            style={styles.FABStyle}
            icon="pencil"
            label="編輯模式"
            onPress={() => {
              if (isEdit && editingDeckId !== currentDeckId) {
                showDialog();
              } else {
                choosetoEditthis();
              }
            }}
          />
        </>
      )}
      {isEdit && editingDeckId != currentDeckId && (
        <>
          <FAB
            color={theme.colors.onPrimaryContainer}
            backgroundColor={theme.colors.primaryContainer}
            style={styles.FABStyle}
            icon="pencil"
            label="編輯模式"
            onPress={() => {
              if (isEdit && editingDeckId !== currentDeckId) {
                showDialog();
              } else {
                choosetoEditthis();
              }
            }}
          />
        </>
      )}
      {isEdit && editingDeckId == currentDeckId && (
        <>
          <FAB
            color={theme.colors.onPrimaryContainer}
            backgroundColor={theme.colors.primaryContainer}
            style={styles.FABStyle}
            icon="content-save"
            label="結束編輯"
            onPress={() => {
              dispatch(editOff());
            }}
          />
        </>
      )}
      <DeckIn currentDeckId={currentDeckId} />
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>正在編輯其他牌組</Dialog.Title>
          <Dialog.Content>
            <Text>是否結束編輯，並改為編輯本牌組？</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              onPress={() => {
                hideDialog();
              }}
            >
              取消
            </Button>
            <Button
              onPress={() => {
                hideDialog();
                choosetoEditthis();
              }}
            >
              確定
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
    alignItems: "center",
  },
  FABStyle: {
    position: "absolute",
    bottom: 7,
    right: 10,
    zIndex: 9999,
  },
});

export default DeckInsideScreen;
