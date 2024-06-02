import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    box: {
        position: "absolute",
        left: 16,
        bottom: 90,
        zIndex: 999
    },
    contentBox: {
        width: 120,
        height: 50,
        opacity: 0.5,
        borderRadius: 10,
        justifyContent: "center",
    },
    text: {
        marginLeft: 10
    }
});

export default styles;