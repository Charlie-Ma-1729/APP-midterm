import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    box: {
        alignItems: "center",
        width: 154,
        height: 390,
        marginTop: 20,
        marginRight: 20,
        borderRadius: 12,
        //影(ios)
        shadowOffset: { width: 2, height: 4 },
        shadowColor: "#000000",
        shadowRadius: 4,
        shadowOpacity: 0.25,
        //影(安卓)
        elevation: 5
    },
    pic: {
        width: 154,
        height: 215
    },
    //下半
    infoBox: {
        justifyContent: "space-between",
        height: 160
    },
    cardName: {
        fontSize: 14,
        fontWeight: "bold"
    },
    //屬性列表
    chipBox: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignContent: "space-between",
        width: 134,
        height: 92,
        marginTop: 15
    },
    //最下部
    bottomBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: 140,
        height: 27
    },
    eyeButton: {
        marginLeft: 10
    },
    bottomText: {
        fontSize: 12
    },

});

export default styles;