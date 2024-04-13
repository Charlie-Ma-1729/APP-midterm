import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
const styles = StyleSheet.create({
    Box: {
        justifyContent: "space-between",
        width: 328,
        height: 629
    },
    formBox: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignContent: "space-between",
        width: 328,
        height: 449
    },
    cardNameBlock: {
        width: 328,
        height: 56
    },
    typeBlock: {
        width: 328,
        height: 48,
    },
    //下半部
    bottomBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        width: 330
    },
    head: {
        width: 83,
        height: 76,
    },
    comfirmButtom: {
        justifyContent: "center",
        alignItems: "center",
        width: 116,
        height: 48,
        borderRadius: 100
    },
    comfirmButtomText: {
        fontSize: 14
    }
});

export default styles;