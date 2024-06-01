import * as React from 'react';
import { useRef, useEffect } from 'react';
//引入物件
import { Text, View, Image, Pressable } from 'react-native';
import { SegmentedButtons, useTheme, Button, TextInput, IconButton, Divider, Icon } from 'react-native-paper';
//引入風格
import styles from './styles';
//navigation提供的物件
import { useNavigation, useRoute } from '@react-navigation/native';
//引入store函式
import { useDispatch, useSelector } from 'react-redux';
import { selectfilterContent } from '../../redux/filterSlice';
import { setFilterContent } from '../../redux/filterSlice';
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
const CarNumConfig = () => {
    //宣告主題
    const theme = useTheme();
    // 動畫用變數宣告
    const num = useSharedValue(0);
    const isAnimating = React.useRef(false);
    const animatedNum = useDerivedValue(() => {
        return (` ${Math.floor(num.value)}`);
    });
    //播放動畫
    const resetAnimating = () => {
        isAnimating.current = false;
    }

    const plus1 = () => {
        if (num.value >= 0 && num.value < 2 && !isAnimating.current) {
            isAnimating.current = true;
            num.value = withTiming(num.value + 1, { duration: 200, easing: Easing.linear }, () => {
                runOnJS(resetAnimating)();
            });
        }
    }
    const minus1 = () => {
        if (num.value > 0 && num.value < 3 && !isAnimating.current) {
            isAnimating.current = true;
            num.value = withTiming(num.value - 1, { duration: 200, easing: Easing.linear }, () => {
                runOnJS(resetAnimating)();
            });
        }
    }
    return (
        <View style={styles.Box}>
            <Pressable onPress={() => { minus1() }}>
                <View style={[styles.buttomBox, { backgroundColor: theme.colors.error }]}>
                    <Icon
                        source="minus-thick"
                        color={theme.colors.onError}
                        size={25} />
                </View>
            </Pressable>
            <View style={[styles.numBox, { backgroundColor: "#ffffff" }]}>
                <ReText style={styles.textNum} text={animatedNum} />
            </View>
            <Pressable onPress={() => { plus1() }}>
                <View style={[styles.buttomBox, { backgroundColor: theme.colors.primary }]}>
                    <Icon
                        source="plus-thick"
                        color={theme.colors.onPrimary}
                        size={25} />
                </View>
            </Pressable>
        </View>
    );
}

export default CarNumConfig;
//本物件位於搜尋-過濾頁，主畫面中的唯一元件