import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    box: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        width: 328,
        height: "100%",
        justifyContent: "space-around",
        alignSelf: "center"
    },
    card: {
        width: 154,
        height: 216
    },
    chipBox: {
        width: 154,
        height: 210,
        justifyContent: "space-between",
        alignContent: "space-between"
    },
    infoBox: {
        width: 328,
        height: 80
    },
    effectBox: {
        width: 328,
        height: 160,
        borderRadius: 10
    },
    //用於儲存字體
    nameText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    sideText: {
        fontSize: 12,
        opacity: 0.5
    },
    effectText: {
        fontSize: 16,
        marginLeft: 20
    }
});

export default styles;