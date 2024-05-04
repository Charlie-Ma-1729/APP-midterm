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
//引入store函式
import { useDispatch, useSelector } from 'react-redux';
import { selectsheetContent } from '../../redux/sheetContentSlice';

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

    //使用store，將其帶入
    const sheetContent = useSelector(selectsheetContent);
    return (
        <BottomSheet
            ref={bottomSheetRef}
            snapPoints={[25, "90%"]}
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
                <Image style={styles.card} source={{ uri: sheetContent.sheetContent.sheetPicture }} />

                <View style={styles.chipBox}>
                    <MyBottomSheetChip lable={"需能"} num={sheetContent.sheetContent.sheetElement.elementCost} />
                    <MyBottomSheetChip lable={"充能"} num={sheetContent.sheetContent.sheetElement.elementCharge} />
                    <MyBottomSheetChip lable={"走時"} num={sheetContent.sheetContent.sheetElement.elementTime} />
                    <MyBottomSheetChip lable={"屬性"} num={sheetContent.sheetContent.sheetElement.elementAttribute} />
                    <MyBottomSheetChip lable={"夜"} num={sheetContent.sheetContent.sheetElement.elementNight} />
                    <MyBottomSheetChip lable={"日"} num={sheetContent.sheetContent.sheetElement.elementDay} />
                </View>
                <View style={{ ...styles.infoBox }}>
                    <Text style={{ ...styles.nameText, color: theme.colors.onSurface }}>{sheetContent.sheetContent.sheetName}</Text>
                    <Text style={{ ...styles.sideText, color: theme.colors.onSurface }}>{sheetContent.sheetContent.sheetType}</Text>
                    <Text style={{ ...styles.sideText, color: theme.colors.onSurface }}>{sheetContent.sheetContent.sheetPackId}</Text>
                </View>
                <View style={{ ...styles.effectBox, backgroundColor: theme.colors.surfaceContainer }}>
                    <View style={styles.effectBoxInside}>
                        <Text style={{ ...styles.effectText, color: theme.colors.onSurface }}>
                            效果
                        </Text>
                        <Divider />
                        <Text style={{ ...styles.effectText, color: theme.colors.onSurface }}>
                            {sheetContent.sheetContent.sheetEffect}
                        </Text>
                    </View>
                </View>
                <View>
                    <Text style={{ ...styles.sideText, color: theme.colors.onSurface }}>illustrator:{sheetContent.sheetContent.sheetIllustrator}</Text>
                </View>
            </BottomSheetView>
        </BottomSheet>
    );
}

export default MyBottomSheet;
//這個物件位於搜尋頁，用來顯示單卡詳細資訊的BottomSheet