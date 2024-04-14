import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    box: {
        alignItems: "center",
        height: "100%",
        justifyContent: "space-around"
    },
    card: {
        width: 211,
        height: 296
    },
    detailBox: {
        justifyContent: "space-around",
        height: 300
    },
    chipBox: {
        width: 328,
        height: 155,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignContent: "space-between"
    },
    effectBox: {
        width: 328,
        height: 100,
        borderRadius: 10
    },
    effectText: {
        fontSize: 16,
        marginLeft: 20
    }
});

export default styles;