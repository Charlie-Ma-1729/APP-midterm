//react-native-paper提供的物件
import { IconButton, Appbar, useTheme, FAB } from "react-native-paper";

//普通宣告
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  Button,
} from "react-native";

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

const DeckInsideScreen = ({ navigation ,route}) => {
    const currentDeckId = route.params.id;
  const theme = useTheme();
  const isEdit = useSelector(selectIsEdit);
  const editingDeckId = useSelector(selectEditingDeckId);
  const dispatch = useDispatch();
  return (
    <View
      style={{ ...styles.container, backgroundColor: theme.colors.surface }}
    >
      <FAB
        color={theme.colors.onPrimaryContainer}
        backgroundColor={theme.colors.primaryContainer}
        style={styles.FABStyle}
        icon="pencil"
        label="編輯模式"
        onPress={() => {
          dispatch(editOn());
        }}
      />
      <DeckIn currentDeckId={currentDeckId} />
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
