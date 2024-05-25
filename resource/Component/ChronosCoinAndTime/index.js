import React from 'react';
//react-native-paper提供的物件
import { useTheme, TextInput, Button, Divider, IconButton } from 'react-native-paper';
//引入style
import styles from './styles';
//普通宣告
import { Text, View, StatusBar, ScrollView, Image, Pressable } from 'react-native';
//引入動畫用函式
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    useDerivedValue,
    Easing,
    ReduceMotion,
    runOnJS
} from 'react-native-reanimated';
import { ReText, canvas2Polar, polar2Canvas } from 'react-native-redash';
const ChronosCoinAndTime = () => {
    const theme = useTheme();
    // 動畫用變數宣告(時間值變動)
    const time = useSharedValue(0);
    const animatedTime = useDerivedValue(() => {
        return (`${Math.floor(time.value)}`);
    });
    //硬幣移動
    const angle = useSharedValue(Math.PI / 2);
    const animatedCoinSpot = useAnimatedStyle(() => {
        //用極座標轉換得出位置
        const { x, y } = polar2Canvas({ theta: angle.value, radius: 140 }, { x: 150, y: 150 })
        return {
            top: y - 25,
            left: x - 25,
        };
    });
    const isAnimating = React.useRef(false);
    //播放動畫
    const resetAnimating = () => {
        isAnimating.current = false;
    }
    //硬幣移動的動畫
    const coinMove = () => {
        if (!isAnimating.current) {
            const twentyDeg = (20 / 360) * 2 * Math.PI;
            isAnimating.current = true;
            angle.value = withTiming(
                angle.value + twentyDeg * time.value,
                {
                    duration: 1000,
                    easing: Easing.inOut(Easing.quad),
                    reduceMotion: ReduceMotion.System,
                }, () => {
                    runOnJS(resetAnimating)();
                }
            )
            time.value = withTiming(0, { duration: 1000, easing: Easing.linear }, () => {
                runOnJS(resetAnimating)();
            });
        }
    }
    //數字歸0
    //+1以及+5的動畫
    const plus1Time = () => {
        if (time.value >= 0 && time.value < 30 && !isAnimating.current) {
            isAnimating.current = true;
            time.value = withTiming(time.value + 1, { duration: 200, easing: Easing.linear }, () => {
                runOnJS(resetAnimating)();
            });
        }
    }
    const plus5Time = () => {
        if (time.value >= 25 && time.value < 30 && !isAnimating.current) {
            isAnimating.current = true;
            time.value = withTiming(30, { duration: 200, easing: Easing.linear }, () => {
                runOnJS(resetAnimating)();
            });
        } else if (time.value >= 0 && time.value < 25 && !isAnimating.current) {
            isAnimating.current = true;
            time.value = withTiming(time.value + 5, { duration: 200, easing: Easing.linear }, () => {
                runOnJS(resetAnimating)();
            });
        }
    }
    //-1以及-5的動畫
    const minus1Time = () => {
        if (time.value > 0 && time.value <= 30 && !isAnimating.current) {
            isAnimating.current = true;
            time.value = withTiming(time.value - 1, { duration: 200, easing: Easing.linear }, () => {
                runOnJS(resetAnimating)();
            });
        }
    }
    const minus5Time = () => {
        if (time.value > 0 && time.value <= 5 && !isAnimating.current) {
            isAnimating.current = true;
            time.value = withTiming(0, { duration: 200, easing: Easing.linear }, () => {
                runOnJS(resetAnimating)();
            });
        } else if (time.value > 5 && time.value <= 30 && !isAnimating.current) {
            isAnimating.current = true;
            time.value = withTiming(time.value - 5, { duration: 200, easing: Easing.linear }, () => {
                runOnJS(resetAnimating)();
            });
        }
    }
    return (
        <View style={[styles.box]}>
            <Animated.Image style={[styles.coin, animatedCoinSpot]} source={{ uri: "https://raw.githubusercontent.com/Charlie-Ma-1729/APP-midterm/main/assets/images/%E7%9B%A4%E9%9D%A2icon/%E7%9C%9F%E5%A4%9C(%E6%9A%97%E8%89%B2).png" }} />
            <View style={styles.timeCounter}>
                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? theme.colors.primaryContainer : theme.colors.surfaceContainer,
                        },
                        styles.plus,
                    ]}
                    onPress={() => {
                        minus5Time();
                    }}>
                    <Text>-5</Text>
                </Pressable>
                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? theme.colors.primaryContainer : theme.colors.surfaceContainer,
                        },
                        styles.plus,
                    ]}
                    onPress={() => {
                        minus1Time();
                    }}>
                    <Text>-1</Text>
                </Pressable>
                <View style={{ ...styles.numField, backgroundColor: theme.colors.secondaryContainer }}>
                    <ReText style={styles.textNum} text={animatedTime} />
                </View>
                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? theme.colors.primaryContainer : theme.colors.surfaceContainer,
                        },
                        styles.plus,
                    ]}
                    onPress={() => {
                        plus1Time();
                    }}>
                    <Text>+1</Text>
                </Pressable>
                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? theme.colors.primaryContainer : theme.colors.surfaceContainer,
                        },
                        styles.plus,
                    ]}
                    onPress={() => {
                        plus5Time();
                    }}>
                    <Text>+5</Text>
                </Pressable>
            </View>
            <View style={styles.line}>
            </View>
            <Button
                contentStyle={{ width: 100, height: 50 }}
                labelStyle={{ fontSize: 20, fontWeight: "bold" }}
                buttonColor={theme.colors.tertiaryContainer}
                textColor={theme.colors.onTertiaryContainer}
                rippleColor={theme.colors.tertiary}
                mode="contained"
                onPress={() => coinMove()}>
                時計
            </Button>
        </View >
    );
}

export default ChronosCoinAndTime;
//物件是克羅諾斯的一部份，管控硬幣和走時按鈕