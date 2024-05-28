import * as React from 'react';
import { useRef, useEffect } from 'react';
//引入物件
import { Text, View, Image, Pressable } from 'react-native';
import { SegmentedButtons, useTheme, Button, TextInput, Divider } from 'react-native-paper';
//引入風格
import styles from './styles';
//navigation提供的物件
import { useNavigation, useRoute } from '@react-navigation/native';
//引入store函式
import { useDispatch, useSelector } from 'react-redux';
import { selectfilterContent } from '../../redux/filterSlice';
import { setFilterContent } from '../../redux/filterSlice';
//引入自己的元素
import FilterItem from '../FilterItem';

const Filter = () => {
    //宣告導航
    const navigation = useNavigation();
    const route = useRoute();
    //宣告主題
    const theme = useTheme();
    //取出全域變數
    const filter = useSelector(selectfilterContent);
    const dispatch = useDispatch();
    //宣告表單基礎變數
    const [cardName, setCardName] = React.useState(filter.filterName);
    const [pack, setPack] = React.useState(filter.filterPack);
    const [type, setType] = React.useState(filter.filterType);
    const [cost, setCost] = React.useState(filter.filterCost);
    const [charge, setCharge] = React.useState(filter.filterCharge);
    const [time, setTime] = React.useState(filter.filterTime);
    const [attribute, setAttribute] = React.useState(filter.filterAttribute);
    const [night, setNight] = React.useState(filter.filterNight);
    const [day, setDay] = React.useState(filter.filterDay);

    //根據route的值隊指定變數做更動
    React.useEffect(() => {
        if (route.params?.action == "卡包") {
            setPack(route.params?.value)
        } else if (route.params?.action == "需能") {
            setCost(route.params?.value)
        } else if (route.params?.action == "充能") {
            setCharge(route.params?.value)
        } else if (route.params?.action == "走時") {
            setTime(route.params?.value)
        } else if (route.params?.action == "屬性") {
            setAttribute(route.params?.value)
        } else if (route.params?.action == "夜") {
            setNight(route.params?.value)
        } else if (route.params?.action == "日") {
            setDay(route.params?.value)
        }
        console.log(route.params?.action);
        console.log(route.params?.value);
        navigation.setParams({ action: null, value: null });
    }, [route.params?.action])
    //宣告上傳用的物件
    const filterCollect = {
        tarName: cardName,
        tarPack: pack,
        tarType: type,
        tarElement: {
            tarCost: cost,
            tarCharge: charge,
            tarTime: time,
            tarAttribute: attribute,
            tarNight: night,
            tarDay: day
        }
    }
    //一次性上傳
    const comfirm = () => {
        //確保設定正確
        dispatch(setFilterContent(filterCollect))
    }
    React.useEffect(() => {
        console.log("filter updated", filter);
    }, [filter]);
    //宣告列表選項矩陣
    const cardPackMenu = [
        "TWIC",
        "AATW"
    ]
    const costMenu = [0, 1, 2, 3, 4, 5, "6+"];
    const chargeMenu = [0, 1, 2];
    const timeMenu = [0, 1, 2, 3, 4, 5, 6];
    const attributeMenu = ["火", "暗", "風", "電氣"];
    const attackMenu = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, "120+"]
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
                <FilterItem size={"big"} label={"卡包"} placeHolder={pack} menuList={cardPackMenu} />
                <SegmentedButtons
                    style={styles.typeBlock}
                    value={type}
                    onValueChange={(value) => {
                        if (type == value) {
                            setType(null);
                        }
                        else {
                            setType(value);
                        }
                    }}
                    theme={{ colors: { secondaryContainer: theme.colors.primary } }}
                    buttons={[
                        {
                            value: '角色',
                            label: '角色',
                            checkedColor: theme.colors.onPrimary
                        },
                        {
                            value: '魔咒',
                            label: '魔咒',
                            checkedColor: theme.colors.onPrimary
                        },
                        {
                            value: '魔陣',
                            label: '魔陣',
                            checkedColor: theme.colors.onPrimary
                        },
                    ]}
                />
                <FilterItem size={"small"} label={"需能"} placeHolder={cost} menuList={costMenu} />
                <FilterItem size={"small"} label={"充能"} placeHolder={charge} menuList={chargeMenu} />
                <FilterItem size={"small"} label={"走時"} placeHolder={time} menuList={timeMenu} />
                <FilterItem size={"small"} label={"屬性"} placeHolder={attribute} menuList={attributeMenu} />
                <FilterItem size={"small"} label={"夜"} placeHolder={night} menuList={attackMenu} />
                <FilterItem size={"small"} label={"日"} placeHolder={day} menuList={attackMenu} />
            </View>
            <Divider />
            <View style={styles.bottomBox}>
                <Image style={styles.head} source={require("../../../assets/images/去背頭.png")} />
                <Button style={styles.comfirmButtom}
                    buttonColor={theme.colors.tertiaryContainer}
                    textColor={theme.colors.onTertiaryContainer} icon="magnify" mode="contained"
                    onPress={() => {
                        navigation.navigate("搜尋");
                        setTimeout(() => {
                            comfirm();
                        }, 0);
                    }}>
                    <Text style={styles.comfirmButtomText}>篩選</Text>
                </Button>
            </View>
        </View>

    );
}

export default Filter;
//本物件位於搜尋-過濾頁，主畫面中的唯一元件