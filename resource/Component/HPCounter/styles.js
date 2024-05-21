import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    box: {
        width: 125,
        height: 140,
        justifyContent: "space-between",
        alignItems: "center"
    },
    plus10: {
        width: 80,
        height: 30,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        //影(ios)
        shadowOffset: { width: 2, height: 4 },
        shadowColor: "#000000",
        shadowRadius: 4,
        shadowOpacity: 0.25,
        //影(安卓)
        elevation: 5
    },
    numField: {
        justifyContent: "center",
        alignItems: "center",
        width: 125,
        height: 60,
        borderRadius: 12,
        backgroundColor: "#ffffff"
    },
    textNum: {
        fontSize: 40,
        fontFamily: "Jersey15-Regular"
    }
});

export default styles;