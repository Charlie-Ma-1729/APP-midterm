import * as React from 'react';
//引入物件
import { Text, View, Image, ScrollView } from 'react-native';
import { Switch, useTheme, IconButton } from 'react-native-paper';
//引入風格
import styles from './styles';
//引入store函式
import { useDispatch, useSelector } from 'react-redux';
import { selectcolorMode } from '../../redux/colorModeSlice';
const Manual = () => {
    //使用theme
    const theme = useTheme();
    //使用色彩模式變數已調整字體色彩
    //宣告字形樣式
    const colorMode = useSelector(selectcolorMode);
    const [title, setTitle] = React.useState(styles.lightTitle);
    const [subTitle, setSubTitle] = React.useState(styles.darkSubTitle)
    const [artical, setArtical] = React.useState(styles.darkArtical)
    const [hint, setHint] = React.useState(styles.darkHint)
    React.useEffect(() => {
        if (colorMode.colorMode == "light") {
            setTitle(styles.lightTitle);
            setSubTitle(styles.lightSubTitle);
            setArtical(styles.lightArtical);
            setHint(styles.lightHint);
        } else {
            setTitle(styles.darkTitle);
            setSubTitle(styles.darkSubTitle);
            setArtical(styles.darkArtical);
            setHint(styles.darkHint);
        }
    }, [colorMode])

    return (
        <ScrollView>
            {/*遊戲概要*/}
            <View style={{ ...styles.manualBlock, backgroundColor: theme.colors.surfaceContainer }}>
                <View style={{ ...styles.titleBlock, backgroundColor: theme.colors.primary }}>
                    <Text style={title}>遊戲概要</Text>
                </View>
                <View style={styles.contentBlock}>
                    <Text style={artical}>  ZUTOMAYO CARD是一款1對1的集換式卡牌遊戲。使用由20張卡牌構築而成的牌組，率先將對手的HP從100削減至0的的玩家獲勝。{"\n"}
                        {"  "}將硬幣配合圖版中的計時器(克羅諾斯)，由真夜開始不斷進行遊戲。{"\n"}
                        {"  "}遊戲將不分先後，由雙方玩家同時進行遊戲。</Text>
                    <Text style={hint}>
                        ※為了遊戲的順暢進行，推薦一副牌組中的角色卡佔50%以上。{"\n"}
                        ※同一張卡最多能在牌組中放入兩張</Text>
                </View>
            </View>
            {/*關於卡片*/}
            <View style={{ ...styles.manualBlock, backgroundColor: theme.colors.surfaceContainer }}>
                <View style={{ ...styles.titleBlock, backgroundColor: theme.colors.primary }}>
                    <Text style={title}>關於卡片</Text>
                </View>
                <View style={styles.contentBlock}>
                    <Text style={artical}>{"  "}大體上，卡片分為「角色卡」及「魔咒卡」兩種。
                    </Text>
                    <Image style={styles.picAboutCard} source={{ uri: "https://raw.githubusercontent.com/Charlie-Ma-1729/APP-midterm/main/assets/images/manual/%E5%8D%A1%E7%89%87%E4%BB%8B%E7%B4%B9.png" }} />
                    <View style={styles.marginBottom10}>
                        <Text style={subTitle}>①卡片的種類</Text>
                        <Text style={artical}>{"  "}紀載「角色卡」及「魔咒卡/魔陣卡」之一的條目{"\n"}</Text>
                        <Text style={hint}>※「魔陣卡」是於第二彈中登場的，能夠持續在場上發揮效果的卡片。</Text>
                    </View>
                    <View style={styles.marginBottom10}>
                        <Text style={subTitle}>②卡名</Text>
                        <Text style={artical}>{"  "}記載卡片的名字</Text>
                    </View>
                    <View style={styles.marginBottom10}>
                        <Text style={subTitle}>③屬性</Text>
                        <Text style={artical}>{"  "}記載卡片的屬性，有炎、風、暗及電氣四種</Text>
                    </View>
                    <View style={styles.marginBottom10}>
                        <Text style={subTitle}>④走時</Text>
                        <Text style={artical}>{"  "}記載打出時使克羅諾斯移動的時計量</Text>
                    </View>
                    <View style={styles.marginBottom10}>
                        <Text style={subTitle}>⑤攻擊力</Text>
                        <Text style={artical}>{"  "}記載卡片所持有的攻擊力。<Text style={hint}>※僅角色卡記載</Text>
                        </Text>
                    </View>
                    <View style={styles.marginBottom10}>
                        <Text style={subTitle}>⑥效果</Text>
                        <Text style={artical}>
                            {"  "}記載卡片所持有的效果。<Text style={hint}>※僅魔咒卡記載</Text>
                        </Text>
                    </View>
                    <View style={styles.marginBottom10}>
                        <Text style={subTitle}>⑦充能</Text>
                        <Text style={artical}>{"  "}將記載具有充能的卡片於充能區累積後，便能夠使用更高需能的卡片</Text>
                        <Text style={hint}>{"  "}※也有不具充能的卡片</Text>
                    </View>
                    <View style={styles.marginBottom10}>
                        <Text style={subTitle}>⑧需能</Text>
                        <Text style={artical}>{"  "}記載需能的卡片必須要於充能區達成相應數量的充能，否則將無法發揮卡片效果，角色卡會失去攻擊力。</Text>
                        <Text style={hint}>{"  "}※也有不具需能的卡片</Text>
                    </View>
                    <View style={styles.marginBottom10}>
                        <Text style={subTitle}>⑨稀有度</Text>
                        <Text style={artical}>{"  "}記載UR/SR/R/N其中一種稀有度的條目攻擊力。</Text>
                    </View>
                    <View style={styles.marginBottom10}>
                        <Text style={subTitle}>⑩限定強化</Text>
                        <Text style={artical}>{"  "}第二彈開始登場的「角色卡」將部分擁有限定強化的能力。{"\n"}
                            {"  "}滿足特定條件的場合，能夠在初次上場時發揮文本的效果，使用後的第二回合開始則無法再次觸發效果。</Text>
                        <Text style={hint}>{"  "}※本程式將限定強化與魔咒卡的效果統一以”效果”稱呼</Text>
                    </View>
                </View>
            </View>
            {/*關於圖板*/}
            <View style={{ ...styles.manualBlock, backgroundColor: theme.colors.surfaceContainer }}>
                <View style={{ ...styles.titleBlock, backgroundColor: theme.colors.primary }}>
                    <Text style={title}>關於圖板</Text>
                </View>
                <View style={styles.contentBlock}>
                    <Text style={artical}>{"  "}用於戰鬥的圖板，有規定卡牌必須要放置的區塊及該區塊的名稱。{"\n"}
                        {"  "}又，雙方的圖板將克羅諾斯裹挾住，作為戰鬥區域使用
                    </Text>
                    <Image style={styles.picAboutBoard} source={{ uri: "https://raw.githubusercontent.com/Charlie-Ma-1729/APP-midterm/main/assets/images/manual/%E5%9C%96%E6%9D%BF%E4%BB%8B%E7%B4%B9.png" }} />
                    <View style={styles.marginBottom10}>
                        <Text style={subTitle}>①戰場</Text>
                        <Text style={artical}>{"  "}雙方擺放出戰角色卡的地方，克羅諾斯以內</Text>
                    </View>
                    <View style={styles.marginBottom10}>
                        <Text style={subTitle}>②設置區</Text>
                        <Text style={artical}>
                            {"  "}每個回合將新出的牌打出的地方。{"\n"}
                            {"  "}A、B.每個回合打出新卡的地方{"\n"}
                            {"  "}C.魔陣或利用效果出牌時將牌打出的地方{"\n"}
                        </Text>
                        <Text style={hint}>{"  "}※若於設置區A、B同時打出兩張角色卡，則將A區的角色登場。</Text>
                    </View>
                    <View style={styles.marginBottom10}>
                        <Text style={subTitle}>③充能區</Text>
                        <Text style={artical}>{"  "}戰場或設置區離場的卡片若具有充能，將會送入充能區，堆疊的充能數量為判斷是否達成需能需求的依據。</Text>
                    </View>
                    <View style={styles.marginBottom10}>
                        <Text style={subTitle}>④牌庫區</Text>
                        <Text style={artical}>{"  "}擺放牌組的地方，玩家於此處抽牌。</Text>
                    </View>
                    <View style={styles.marginBottom10}>
                        <Text style={subTitle}>⑤深淵</Text>
                        <Text style={artical}>{"  "}戰場或設置區離場的卡片若不具充能，則離場後表側送入此處。
                        </Text>
                    </View>
                    <View style={styles.marginBottom10}>
                        <Text style={subTitle}>⑥HP量表</Text>
                        <Text style={artical}>
                            {"  "}表示玩家HP的地方，由100開始隨著遊戲進行而改變。
                        </Text>
                    </View>
                    <View style={styles.marginBottom10}>
                        <Text style={subTitle}>⑦克羅諾斯</Text>
                        <Text style={artical}>{"  "}硬幣的放置場所，用於顯示走時的位置，藍色區塊為夜，紅色區塊為日，遊戲開始的時間為夜晚正中央的真夜，隨著雙方出牌的走時而改變硬幣位置。</Text>
                    </View>
                </View>
            </View>
            {/*對戰的準備*/}
            <View style={{ ...styles.manualBlock, backgroundColor: theme.colors.surfaceContainer }}>
                <View style={{ ...styles.titleBlock, backgroundColor: theme.colors.primary }}>
                    <Text style={title}>對戰的準備</Text>
                </View>
                <View style={styles.contentBlock}>
                    <View style={styles.marginBottom10}>
                        <Text style={artical}>①準備20張牌組成的牌組，置於牌組區</Text>
                    </View>
                    <View style={styles.marginBottom10}>
                        <Text style={artical}>②將硬幣至於真夜，將雙方HP設為100</Text>
                    </View>
                    <View style={styles.marginBottom10}>
                        <Text style={artical}>③雙方交換牌組並洗切，隨後交還牌組並抽五張牌{"\n"}<Text style={hint}>{"  "}※此時雙方擁有僅一次的調度機會，將任意數量的手牌送去深淵，並從牌組抽出那個數量的牌，最後再將深淵的牌洗回牌組</Text></Text>
                    </View>
                    <View style={styles.marginBottom10}>
                        <Text style={artical}>④雙方從手中將一張角色卡面朝下放置於戰場</Text>
                    </View>
                    <View style={styles.marginBottom10}>
                        <Text style={artical}>⑤雙方將該卡同時翻開，對戰開始</Text>
                    </View>
                </View>
            </View>
            {/*對戰的流程*/}
            <View style={{ ...styles.manualBlock, backgroundColor: theme.colors.surfaceContainer }}>
                <View style={{ ...styles.titleBlock, backgroundColor: theme.colors.primary }}>
                    <Text style={title}>對戰的流程</Text>
                </View>
                <View style={styles.contentBlock}>
                    <View style={{ ...styles.flowBlock, backgroundColor: theme.colors.tertiaryContainer }}>
                        <Text style={{ color: theme.colors.onPrimaryContainer, fontSize: 16, fontWeight: "bold" }}>■第一回合</Text>
                    </View>
                    <View style={styles.marginBottom10}>
                        <Text style={artical}>①確認雙方翻開的角色卡的時計，按照時計的總和移動克羅諾斯上的硬幣。</Text>
                    </View>
                    <View style={styles.twoPicBlock}>
                        <Image style={styles.picTwo} source={{ uri: "https://raw.githubusercontent.com/Charlie-Ma-1729/APP-midterm/main/assets/images/TWIC/TWIC-075.png" }} />
                        <Image style={styles.picTwo} source={{ uri: "https://raw.githubusercontent.com/Charlie-Ma-1729/APP-midterm/main/assets/images/TWIC/TWIC-065.png" }} />
                    </View>
                    <View style={styles.marginBottom10}>
                        <Text style={hint}>EX:玩家A(左側)及玩家B(右側)翻開的卡片時計合計為3，因此將硬幣順時針移動3格</Text>
                    </View>
                    <Image style={styles.picTime} source={{ uri: "https://raw.githubusercontent.com/Charlie-Ma-1729/APP-midterm/main/assets/images/manual/%E6%99%82%E9%96%93%E7%A7%BB%E5%8B%95.png" }} />
                    <View style={styles.marginBottom10}>
                        <Text style={artical}>②根據當前時間(早/晚)，決定角色卡的攻擊，且數值較低的玩家承受雙方攻擊力差值的傷害</Text>
                    </View>
                    <View style={styles.marginBottom10}>
                        <Text style={artical}>③回合結束，雙方各從卡組抽一張牌</Text>
                    </View>
                    <View style={{ ...styles.flowBlock, backgroundColor: theme.colors.tertiaryContainer }}>
                        <Text style={{ color: theme.colors.onPrimaryContainer, fontSize: 16, fontWeight: "bold" }}>■二回合後</Text>
                    </View>
                    <View style={styles.marginBottom10}>
                        <Text style={artical}>①前一個回合受到過傷害的玩家最多兩張，未受傷的玩家最多一張，雙方玩家將卡面朝下放置於設置區。(最少得要一張)</Text>
                    </View>
                    <View style={styles.marginBottom10}>
                        <Text style={artical}>②雙方翻開位於設置區上的所有卡牌，並依照所有卡牌的時計總和移動硬幣。</Text>
                    </View>
                    <View style={styles.marginBottom10}>
                        <Text style={artical}>
                            ③打出的卡片有「角色卡」的場合，將最左側的角色卡與戰場上的角色卡替換(原本的角色卡離場)，並觸發限定強化的效果。{"\n"}
                            {"  "}隨後打出的卡片有「魔咒卡/魔陣卡」的場合，處理那些卡片的效果。</Text>
                    </View>
                    <View style={styles.marginBottom10}>
                        <Text style={artical}>④根據當前時間(早/晚)，決定角色卡的攻擊，且數值較低的玩家承受雙方攻擊力差值的傷害。</Text>
                    </View>
                    <View style={styles.marginBottom10}>
                        <Text style={artical}>⑤回合結束，魔咒卡離場，雙方玩家根據本回合於步驟①打出的卡牌數量抽牌。</Text>
                    </View>
                    <View style={styles.marginBottom10}>
                        <Text style={hint}>EX:卡片離場時，若有充能送至充能區，若無則送至深淵。</Text>
                    </View>
                    <View style={styles.marginBottom10}>
                        <Text style={artical}>重複步驟①~⑤，直到一方生命值歸0</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default Manual;//主頁-說明書頁，就是本說明書