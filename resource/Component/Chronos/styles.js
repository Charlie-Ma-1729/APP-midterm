import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    box: {
        width: 300,
        height: 300,
    },
    roundBox: {
        transform: [{ rotate: '-90deg' }]
    },
    CoinAndTimeBox: {
        position: "absolute",
    }
});

export default styles;