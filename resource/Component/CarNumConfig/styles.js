import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    Box: {
        flexDirection: "row",
        width: 114,
        height: 25,
        alignItems: "center",
        justifyContent: "space-between"
    },
    numBox: {
        justifyContent: "center",
        alignItems: "center",
        width: 52,
        height: 25,
        borderRadius: 10,
        backgroundColor: "#ffffff"
    },
    textNum: {
        fontSize: 20

    },
    buttomBox: {
        width: 25,
        height: 25,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center"
    },
});

export default styles;