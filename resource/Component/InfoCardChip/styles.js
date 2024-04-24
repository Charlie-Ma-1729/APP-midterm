import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    box: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: 63,
        height: 22,
        marginBottom: 14
    },
    labelBox: {
        alignItems: "center",
        width: 40,
        height: 22,
        borderRadius: 8
    },
    labelText: {
        fontSize: 12
    },
    numText: {
        fontSize: 12
    }
});

export default styles;