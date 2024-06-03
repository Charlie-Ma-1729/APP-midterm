import { StyleSheet } from "react-native";

export default StyleSheet.create({
  Card: {
    margin: 16,
    borderRadius: 10,
  },
  cover: {
    width: 99,
    height: 138,
  },
  container: {
    flexDirection: "row",
    height: 130,
  },
  leftContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  rightContainer: {
    flex: 5,
    justifyContent: "center",
    paddingLeft: 40,
  },
});
