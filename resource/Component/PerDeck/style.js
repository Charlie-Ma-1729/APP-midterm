import { StyleSheet } from "react-native";

export default StyleSheet.create({
  Card: {
    margin: 16,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  cover: {
    width: 66,
  },
  ChartCard: {
    flex: 1,
    borderRadius: 10,
    flexDirection: "row",
  },
  container: {
    flexDirection: "row",
    height: 100,
  },
  leftContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  rightContainer: {
    flex: 5,
    justifyContent: "center",
  },
});
