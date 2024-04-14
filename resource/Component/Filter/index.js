import * as React from 'react';
import { useRef, useEffect } from 'react';
//引入物件
import { Text, View, Image, Pressable } from 'react-native';
import { SegmentedButtons, useTheme, Button, TextInput, Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
//引入風格
import styles from './styles';
//引入store函式
import { useDispatch, useSelector } from 'react-redux';
import { selectcolorMode } from '../../redux/colorModeSlice';
import { toggleColorMode } from '../../redux/colorModeSlice';
//引入自己的元素
import FilterItem from '../FilterItem';

const Filter = () => {
    //宣告導航
    const navigation = useNavigation();
    //宣告主題
    const theme = useTheme();
    //宣告表單基礎變數
    const [cardName, setCardName] = React.useState("");
    const [type, setType] = React.useState("");
    //宣告列表選項矩陣
    const cardPackMenu = [
        "The World Is Changing",
        "All Along With The Watchtower"
    ]
    const costMenu = [0, 1, 2, 3, 4, 5, +6];
    const chargeMenu = [0, 1, 2];
    const timeMenu = [0, 1, 2, 3, 4, 5];
    const attributeMenu = ["火", "暗", "風", "電氣"];
    const attackMenu = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, +120]
    return (
        <View style={styles.Box}>
            <View style={styles.formBox}>
                <View>
                    <TextInput
                        style={styles.cardNameBlock}
                        mode="outlined"
                        label="卡名搜尋"
                        placeholder="請輸入卡片名稱"
                        value={cardName}
                        onChangeText={cardName => setCardName(cardName)}
                    />
                </View>
                <FilterItem size={"big"} label={"卡包"} menuList={cardPackMenu} />
                <SegmentedButtons
                    style={styles.typeBlock}
                    value={type}
                    onValueChange={setType}
                    theme={{ colors: { secondaryContainer: theme.colors.primary } }}
                    buttons={[
                        {
                            value: 'Character',
                            label: '角色',
                            checkedColor: theme.colors.onPrimary
                        },
                        {
                            value: 'Enchant',
                            label: '魔咒',
                            checkedColor: theme.colors.onPrimary
                        },
                        {
                            value: 'Area Enchant',
                            label: '魔陣',
                            checkedColor: theme.colors.onPrimary
                        },
                    ]}
                />
                <FilterItem size={"small"} label={"需能"} menuList={costMenu} />
                <FilterItem size={"small"} label={"充能"} menuList={chargeMenu} />
                <FilterItem size={"small"} label={"走時"} menuList={timeMenu} />
                <FilterItem size={"small"} label={"屬性"} menuList={attributeMenu} />
                <FilterItem size={"small"} label={"夜"} menuList={attackMenu} />
                <FilterItem size={"small"} label={"日"} menuList={attackMenu} />
            </View>
            <Divider />
            <View style={styles.bottomBox}>
                <Image style={styles.head} source={require("../../../assets/images/去背頭.png")} />
                <Button style={styles.comfirmButtom}
                    buttonColor={theme.colors.tertiaryContainer}
                    textColor={theme.colors.onTertiaryContainer} icon="magnify" mode="contained" onPress={() => navigation.navigate("搜尋")}>
                    <Text style={styles.comfirmButtomText}>篩選</Text>
                </Button>
            </View>
        </View>

    );
}

export default Filter;
//本物件位於搜尋-過濾頁，主畫面中的唯一元件