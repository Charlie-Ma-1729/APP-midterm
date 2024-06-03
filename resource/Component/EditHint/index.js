import React from 'react';
//react-native-paper提供的物件
import { IconButton, Appbar, useTheme, FAB } from 'react-native-paper';
//引入style
import styles from './styles';
//普通宣告
import { Text, View, StatusBar, ScrollView, Image } from 'react-native';
//引入store函式
import { useDispatch, useSelector } from 'react-redux';
import { selectIsEdit, selectEditingDeck } from '../../redux/isEditSlice';

const EditHint = () => {
    const theme = useTheme();
    //使用全域變數
    const isEdit = useSelector(selectIsEdit);
    const editingDeck = useSelector(selectEditingDeck);
    const [isVisible, setIsVisible] = React.useState(true);
    React.useEffect(() => {
        if (isEdit == true) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [isEdit])

    return (
        <View style={styles.box}>
            {isVisible && (
                <View style={[styles.contentBox, { backgroundColor: theme.colors.surfaceContainer }]}>
                    <Text style={[styles.text, { color: theme.colors.onSurface }]}>正在編輯</Text>
                    <Text style={[styles.text, { color: theme.colors.onSurface }]} numberOfLines={1} ellipsizeMode="tail">{editingDeck}</Text>
                </View>
            )}
        </View>

    );
};

export default EditHint;
//此物件會在所有螢幕顯示，在非編輯模式下消失