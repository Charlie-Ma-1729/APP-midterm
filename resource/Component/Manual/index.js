import * as React from 'react';
//引入物件
import { Text, View, Image, ScrollView } from 'react-native';
import { Switch, useTheme, IconButton } from 'react-native-paper';
//引入風格
import styles from './styles';
const Manual = () => {
    //使用theme
    const theme = useTheme();

    return (
        <ScrollView>
            <View style={{ ...styles.manualBlock, backgroundColor: theme.colors.surfaceContainer }}>
                <View style={{ ...styles.titleBlock, backgroundColor: theme.colors.primary }}>
                    <Text style={styles.lightTitle}>遊戲概要</Text>
                </View>
                <View style={styles.contentBlock}>
                    <Text style={styles.lightArtical}>  ZUTOMAYO CARD是一款1對1的集換式卡牌遊戲。使用由20張卡牌構築而成的牌組，率先將對手的HP從100削減至0的的玩家獲勝。{"\n"}
                        {"  "}將硬幣配合圖版中的計時器(克羅諾斯)，由真夜開始不斷進行遊戲。{"\n"}
                        {"  "}遊戲將不分先後，由雙方玩家同時進行遊戲。</Text>
                    <Text style={styles.lightHint}>
                        ※為了遊戲的順暢進行，推薦一副牌組中的角色卡佔50%以上。{"\n"}
                        ※同一張卡最多能在牌組中放入兩張</Text>
                </View>
            </View>
        </ScrollView>
    );
}

export default Manual;//主頁-說明書頁，就是本說明書