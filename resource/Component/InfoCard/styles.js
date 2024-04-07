import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    box: {
        alignItems: "center",
        width: 154,
        height: 390,
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
    cardName: {
        fontSize: 14,
        fontWeight: "bold"
    }
});

export default styles;