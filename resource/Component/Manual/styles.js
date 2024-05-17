import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    manualBlock: {
        width: 328
    },
    titleBlock: {
        width: 328,
        height: 40,
        justifyContent: "center"
    },
    contentBlock: {
        marginHorizontal: 5
    },
    //字體設定
    lightTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#FFFFFF",
        marginHorizontal: 5,
        borderWidth: 1,
        borderColor: "#FFFFFF",
        paddingLeft: 10
    },
    darkTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#35275E",
        marginHorizontal: 5
    },
    lightSubTitle: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#1C1B20"
    },
    darkSubTitle: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#E6E1E9"
    },
    lightArtical: {
        fontSize: 12,
        lineHeight: 16,
        color: "#1C1B20"
    },
    darkArtical: {
        fontSize: 12,
        lineHeight: 16,
        color: "#E6E1E9"
    },
    lightHint: {
        fontSize: 12,
        lineHeight: 16,
        color: "#695F12"
    },
    darkHint: {
        fontSize: 12,
        lineHeight: 16,
        color: "#D5C871"
    }
});

export default styles;