import React from "react";
//react-native-paper提供的物件
import { IconButton, Appbar, useTheme, Portal, Dialog, Button, Icon } from 'react-native-paper';
//navigation提供的物件
import { useNavigation, useRoute } from '@react-navigation/native';
//普通宣告
import { StyleSheet, Text, View, StatusBar, ScrollView, Image } from 'react-native';
//宣告自己的物件
import HPCounter from '../Component/HPCounter';
import Chronos from '../Component/Chronos';
//引入store函式
import { useDispatch, useSelector } from 'react-redux';
import { selectcolorMode } from '../redux/colorModeSlice';

const HomeGameplayScreen = ({ route }) => {
    const theme = useTheme();//引入主題以使用主題
    const colorMode = useSelector(selectcolorMode);
    let StatusBarMode = colorMode.colorMode === "dark" ? "dark-content" : "light-content";
    //創建navigation變數
    const navigation = useNavigation();
    React.useEffect(() => {
        if (route.params?.action == "dice") {
            throwDice();
            showDiceDialog();
            navigation.setParams({ action: null });
        } else if (route.params?.action == "coin") {
            flipCoin();
            showCoinDialog();
            console.log(route.params?.action);
            navigation.setParams({ action: null });
        }
    }, [route.params?.action])
    //Dialog用的變數
    //骰子Dialog
    const [diceVisible, setDiceVisible] = React.useState(false);
    const [diceNum, setDiceNum] = React.useState("dice-1");
    const throwDice = () => {
        num = `dice-${Math.floor(Math.random() * 6) + 1}`;
        console.log(num);
        setDiceNum(num);
    }
    const showDiceDialog = () => {
        setDiceVisible(true);
    }
    const hideDiceDialog = () => {
        setDiceVisible(false);
    }
    //硬幣Dialog
    const [coinVisible, setCoinVisible] = React.useState(false);
    const [coinSide, setCoinSide] = React.useState(people);
    const [coinSideText, setCoinSideText] = React.useState("正");
    const people = "https://raw.githubusercontent.com/Charlie-Ma-1729/APP-midterm/main/assets/images/%E5%8E%BB%E8%83%8C%E9%A0%AD.png"
    const hedgehog = "https://raw.githubusercontent.com/Charlie-Ma-1729/APP-midterm/main/assets/images/%E5%8E%BB%E8%83%8C%E5%88%BA%E8%9D%9F.png"
    const flipCoin = () => {
        num = Math.floor(Math.random() * 2);
        if (num == 0) {
            setCoinSide(people);
            setCoinSideText("正");
        } else if (num == 1) {
            setCoinSide(hedgehog);
            setCoinSideText("反");
        }
    }
    const showCoinDialog = () => {
        setCoinVisible(true);
    }
    const hideCoinDialog = () => {
        setCoinVisible(false);
    }
    return (
        <View style={{ ...styles.container, backgroundColor: theme.colors.primary }}>
            <StatusBar backgroundColor={theme.colors.secondary} barStyle={StatusBarMode} style="auto" />
            <View style={{ transform: [{ rotate: '180deg' }] }}>
                <HPCounter />
            </View>
            <Chronos />
            <HPCounter />
            <Portal>
                <Dialog visible={diceVisible} onDismiss={hideDiceDialog}>
                    <Dialog.Title>骰子</Dialog.Title>
                    <Dialog.Content style={styles.diceDialogContent}>
                        <Text variant="bodyMedium">你投出了{diceNum}點</Text>
                        <Icon source={diceNum}
                            color={theme.colors.primary}
                            size={100} />
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={() => { throwDice() }}>重骰</Button>
                        <Button onPress={() => { hideDiceDialog() }}>結束</Button>
                    </Dialog.Actions>
                </Dialog>
                <Dialog visible={coinVisible} onDismiss={hideCoinDialog}>
                    <Dialog.Title>硬幣</Dialog.Title>
                    <Dialog.Content style={styles.coinDialogContent}>
                        <Text variant="bodyMedium">你擲出了{coinSideText}</Text>
                        <View style={[styles.coinBox, { backgroundColor: theme.colors.primary }]}>
                            <View style={[styles.coinInnerBox, { backgroundColor: theme.colors.onPrimary }]}>
                                <Image style={styles.coinImage} source={{ uri: coinSide }} />
                            </View>
                        </View>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={() => { flipCoin() }}>重拋</Button>
                        <Button onPress={() => { hideCoinDialog() }}>結束</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around"
    },
    diceDialogContent: {
        alignItems: "center"
    },
    coinDialogContent: {
        alignItems: "center"
    },
    coinBox: {
        width: 100,
        height: 100,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: 'center'
    },
    coinInnerBox: {
        width: 80,
        height: 80,
        borderRadius: 70,
        alignItems: "center",
        justifyContent: 'center'
    },
    coinImage: {
        width: 70,
        height: 70
    },
    buttonContainer: {
        marginTop: 15,
        width: 328,
        height: 200,
        flexDirection: "row",
        justifyContent: "space-between"
    },
});

export default HomeGameplayScreen;