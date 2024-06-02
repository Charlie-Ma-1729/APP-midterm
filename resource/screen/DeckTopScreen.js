import * as React from "react";
import { PaperProvider } from "react-native-paper";

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
import { StyleSheet, Text, View, StatusBar, ScrollView } from "react-native";

import PerDeck from "../Component/PerDeck";

import style from "../Component/NewDeck/style.js";
const DeckTopScreen = ({ navigation }) => {
  const theme = useTheme();

  const [visible, setVisible] = React.useState(false);
  const [text, setText] = React.useState("");
  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);
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
            <Button onPress={hideDialog}>Done</Button>
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
