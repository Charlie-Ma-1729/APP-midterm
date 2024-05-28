import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    //總括排版
    manualBlock: {
        marginTop: 30,
        width: 328
    },
    titleBlock: {
        width: 328,
        height: 40,
        justifyContent: "center"
    },
    contentBlock: {
        marginTop: 15,
        marginHorizontal: 5
    },
    flowBlock: {
        width: 120,
        height: 40,
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center"
    },
    twoPicBlock: {
        width: 318,
        height: 210,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    marginBottom10: {
        marginBottom: 10
    },
    //圖片大小設定
    picAboutCard: {
        width: 318,
        height: 192
    },
    picAboutBoard: {
        width: 318,
        height: 360
    },
    picTime: {
        width: 318,
        height: 148,
        marginBottom: 10
    },
    picTwo: {
        width: 150,
        height: 210,
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
        marginHorizontal: 5,
        borderWidth: 1,
        borderColor: "#35275E",
        paddingLeft: 10
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