import React from 'react';
//react自帶的material disign
import { PaperProvider } from 'react-native-paper';
import { useState } from "react";
//react-native-paper提供的物件
import { IconButton, Appbar, useTheme, FAB } from 'react-native-paper';
//普通宣告
import { StyleSheet, Text, View, StatusBar, ScrollView, Button } from 'react-native';
//宣告自製物件
import InfoCardList from '../Component/InfoCardList';
import MyBottomSheet from '../Component/MyBottomSheet';
//宣告bottom sheet'
import BottomSheet, { BottomSheetView, useBottomSheet } from '@gorhom/bottom-sheet';


const SearchTopScreen = ({ navigation }) => {
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
        <View style={{ ...styles.container, backgroundColor: theme.colors.surface }}>
            <StatusBar style="auto" />
            <FAB
                color={theme.colors.onTertiaryContainer}
                backgroundColor={theme.colors.tertiaryContainer}
                style={styles.FABStyle}
                icon="filter"
                onPress={() => navigation.navigate("篩選")} />
            <InfoCardList />
            <MyBottomSheet />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    FABStyle: {
        position: "absolute",
        bottom: 7,
        right: 10,
        zIndex: 9999
    }
});

export default SearchTopScreen;