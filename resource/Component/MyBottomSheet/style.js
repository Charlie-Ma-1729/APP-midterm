import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    box: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        width: 328,
        height: "100%",
        justifyContent: "space-between",
        alignSelf: "center"
    },
    card: {
        marginTop: 10,
        width: 154,
        height: 216
    },
    chipBox: {
        width: 154,
        height: 210,
        justifyContent: "space-between",
        alignContent: "space-between"
    },
    //卡名、類型、卡號、數量計量表
    infoBox: {
        width: 154,
        height: 80,
    },
    configBox: {
        width: 154,
        alignItems: "flex-end",
        justifyContent: "flex-end"
    },
    effectBox: {
        width: 328,
        height: 160,
        borderRadius: 10
    },
    effectBoxInside: {
        width: 288,
        marginLeft: 20
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
        marginTop: 5
    }
});

export default styles;