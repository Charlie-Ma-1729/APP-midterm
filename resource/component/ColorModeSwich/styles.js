import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
const styles = StyleSheet.create({
    box: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: 328,
        height: 40
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
    },
    switchBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 40
    }
});

export default styles;