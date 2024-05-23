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
    withSpring,
    withTiming,
    useAnimatedStyle,
    useDerivedValue,
    Easing,
    runOnJS
} from 'react-native-reanimated';
import { ReText } from 'react-native-redash';
const ChronosCoinAndTime = () => {
    const theme = useTheme();
    // 動畫用變數宣告(時間值變動)
    const time = useSharedValue(0);
    const isAnimating = React.useRef(false);
    const animatedTime = useDerivedValue(() => {
        return (`${Math.floor(time.value)}`);
    });
    //播放動畫
    const resetAnimating = () => {
        isAnimating.current = false;
    }
    //+1以及+5的動畫
    const plus1Time = () => {
        if (time.value >= 0 && time.value < 100 && !isAnimating.current) {
            isAnimating.current = true;
            time.value = withTiming(time.value + 1, { duration: 200, easing: Easing.linear }, () => {
                runOnJS(resetAnimating)();
            });
        }
    }

    const plus5Time = () => {
        if (time.value >= 0 && time.value < 100 && !isAnimating.current) {
            isAnimating.current = true;
            time.value = withTiming(time.value + 5, { duration: 200, easing: Easing.linear }, () => {
                runOnJS(resetAnimating)();
            });
        }
    }
    //-1以及-5的動畫
    const minus1Time = () => {
        if (time.value > 0 && time.value <= 100 && !isAnimating.current) {
            isAnimating.current = true;
            time.value = withTiming(time.value - 1, { duration: 200, easing: Easing.linear }, () => {
                runOnJS(resetAnimating)();
            });
        }
    }
    const minus5Time = () => {
        if (time.value > 0 && time.value <= 100 && !isAnimating.current) {
            isAnimating.current = true;
            time.value = withTiming(time.value - 5, { duration: 200, easing: Easing.linear }, () => {
                runOnJS(resetAnimating)();
            });
        }
    }
    return (
        <View style={styles.box}>
            <Image />
            <View style={styles.timeCounter}>
                <Pressable style={{ ...styles.plus, backgroundColor: theme.colors.surfaceContainer }}
                    onPress={() => {
                        minus5Time();
                    }}>
                    <Text>-5</Text>
                </Pressable>
                <Pressable style={{ ...styles.plus, backgroundColor: theme.colors.surfaceContainer }}
                    onPress={() => {
                        minus1Time();
                    }}>
                    <Text>-1</Text>
                </Pressable>
                <View style={{ ...styles.numField, backgroundColor: theme.colors.secondaryContainer }}>
                    <ReText style={styles.textNum} text={animatedTime} />
                </View>
                <Pressable style={{ ...styles.plus, backgroundColor: theme.colors.surfaceContainer }}
                    onPress={() => {
                        plus1Time();
                    }}>
                    <Text>+1</Text>
                </Pressable>
                <Pressable style={{ ...styles.plus, backgroundColor: theme.colors.surfaceContainer }}
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
                onPress={() => console.log('Pressed')}>
                時計
            </Button>
        </View>
    );
}

export default ChronosCoinAndTime;
//物件是克羅諾斯的一部份，管控硬幣和走時按鈕