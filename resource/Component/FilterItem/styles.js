import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
const styles = StyleSheet.create({
    box: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "flex-start",
        width: 328,
        height: 612
    },
    cardNameBlock: {
        width: 328,
        height: 56
    },
    switchBox: {
        width: 328,
        height: 56,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 4,
        flexDirection: "row",
        alignItems: "center"
    },
    lable: {
        fontSize: 12,
        position: "absolute",
        top: -10,
        left: 10
    },
    placeHolder: {
        fontSize: 16
    }
});

export default styles;