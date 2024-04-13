import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
const styles = StyleSheet.create({
    menuArcBig: {
        width: 328,
        height: 56,
        borderRadius: 4,
        flexDirection: "row",
        alignItems: "center"
    },
    menuArcSmall: {
        width: 154,
        height: 56,
        borderRadius: 4,
        flexDirection: "row",
        alignItems: "center"
    },
    scroll: {
        height: 240
    },
    lable: {
        fontSize: 12,
        fontWeight: "500",
        position: "absolute",
        top: -10,
        left: 10
    },
    placeHolder: {
        fontSize: 16,
        marginLeft: 15
    }
});

export default styles;