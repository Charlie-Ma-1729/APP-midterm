import * as React from 'react';
//引入物件
import { Text, View, Image, Pressable } from 'react-native';
import { Switch, useTheme, IconButton } from 'react-native-paper';
//引入風格
import styles from './styles';
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
const HPCounter = () => {
    const theme = useTheme();
    // 動畫用變數宣告
    const HP = useSharedValue(100);
    const isAnimating = React.useRef(false);
    const animatedHP = useDerivedValue(() => {
        return (`${Math.floor(HP.value)}`);
    });
    //播放動畫
    const resetAnimating = () => {
        isAnimating.current = false;
    }

    const plus10HP = () => {
        if (HP.value >= 0 && HP.value < 100 && !isAnimating.current) {
            isAnimating.current = true;
            HP.value = withTiming(HP.value + 10, { duration: 200, easing: Easing.linear }, () => {
                runOnJS(resetAnimating)();
            });
        }
    }

    const minus10HP = () => {
        if (HP.value > 0 && HP.value <= 100 && !isAnimating.current) {
            isAnimating.current = true;
            HP.value = withTiming(HP.value - 10, { duration: 200, easing: Easing.linear }, () => {
                runOnJS(resetAnimating)();
            });
        }
    }
    return (
        <View style={{ ...styles.box }}>
            <Pressable
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? theme.colors.primaryContainer : theme.colors.surfaceContainer,
                    },
                    styles.plus10,
                ]}
                onPress={() => {
                    plus10HP();
                }}>
                <IconButton icon={"triangle"} size={20} iconColor={theme.colors.onSecondaryContainer} />
            </Pressable>
            <View style={styles.numField}>
                <ReText style={styles.textNum} text={animatedHP} />
            </View>
            <Pressable style={({ pressed }) => [
                {
                    backgroundColor: pressed ? theme.colors.primaryContainer : theme.colors.surfaceContainer,
                    transform: [{ rotate: "180deg" }]
                },
                styles.plus10,
            ]}
                onPress={() => {
                    minus10HP();
                }}>
                <IconButton icon={"triangle"} size={20} iconColor={theme.colors.onSecondaryContainer} />
            </Pressable>
        </View>
    );
}

export default HPCounter;
//此物件為於遊戲工具頁面，可以計算血量