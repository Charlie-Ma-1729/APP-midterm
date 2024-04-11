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
});

export default styles;