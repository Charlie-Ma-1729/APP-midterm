import React from 'react';
//react-native-paper提供的物件
import { IconButton, useTheme, Divider } from 'react-native-paper';
//引入style
import styles from './style';
//普通宣告
import { Text, View, StatusBar, ScrollView, Image } from 'react-native';
//宣告bottom sheet'
import BottomSheet, { BottomSheetView, BottomSheetScrollView, useBottomSheet } from '@gorhom/bottom-sheet';
//引用自己的物件
import MyBottomSheetChip from '../MyBottomSheetChip';

const MyBottomSheet = () => {
    const theme = useTheme();
    //使用參照以開啟與關閉bottomSheet
    const bottomSheetRef = React.useRef(null);

    const openBottomSheet = () => {
        bottomSheetRef.current?.expand();
    };

    const closeBottomSheet = () => {
        bottomSheetRef.current?.close();
    };

    return (
        <BottomSheet
            ref={bottomSheetRef}
            snapPoints={[20, "90%"]}
            handleStyle={{
                borderRadius: 28,
                backgroundColor: theme.colors.surfaceContainerHighest
            }}
            handleIndicatorStyle={{
                backgroundColor: theme.colors.onSurface
            }}
            backgroundStyle={{
                backgroundColor: theme.colors.surfaceContainerHighest
            }}
        >
            <BottomSheetView style={{ ...styles.box }}>
                <Image style={styles.card} source={require("../../../assets/images/AATW/AATW-001.png")} />

                <View style={styles.chipBox}>
                    <MyBottomSheetChip lable={"需能"} num={6} />
                    <MyBottomSheetChip lable={"充能"} num={0} />
                    <MyBottomSheetChip lable={"走時"} num={5} />
                    <MyBottomSheetChip lable={"屬性"} num={"暗"} />
                    <MyBottomSheetChip lable={"夜"} num={140} />
                    <MyBottomSheetChip lable={"日"} num={80} />
                </View>
                <View style={{ ...styles.infoBox }}>
                    <Text style={{ ...styles.nameText, color: theme.colors.onSurface }}>妮菈醬(殘機)</Text>
                    <Text style={{ ...styles.sideText, color: theme.colors.onSurface }}>角色</Text>
                    <Text style={{ ...styles.sideText, color: theme.colors.onSurface }}>AATW-015</Text>
                </View>
                <View style={{ ...styles.effectBox, backgroundColor: theme.colors.surfaceContainer }}>
                    <Text style={{ ...styles.effectText, color: theme.colors.onSurface }}>
                        效果
                    </Text>
                    <Divider />
                    <Text style={{ ...styles.effectText, color: theme.colors.onSurface }}>
                        {"沒有喔目前"}
                    </Text>
                </View>
                <View>
                    <Text style={{ ...styles.sideText, color: theme.colors.onSurface }}>illustrator:skmaru</Text>
                </View>
            </BottomSheetView>
        </BottomSheet>
    );
}

export default MyBottomSheet;
//這個物件位於搜尋頁，用來顯示單卡詳細資訊的BottomSheet