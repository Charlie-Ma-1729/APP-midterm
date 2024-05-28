import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    box: {
        width: 300,
        height: 300,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center"
    },
    //時間更動區
    timeCounter: {
        width: 180,
        height: 50,
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    numField: {
        width: 80,
        height: 50,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center"
    },
    textNum: {
        fontSize: 40,
        fontFamily: "Jersey15-Regular"
    },
    plus: {
        width: 20,
        height: 50,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    //線
    line: {
        width: 350,
        height: 1,
        marginBottom: 20,
        alignSelf: "center"
    },
    //硬幣
    coin: {
        width: 50,
        height: 50,
        position: "absolute"
    }
});

export default styles;