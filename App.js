//規定一定要放最上面，不能亂動
import 'react-native-gesture-handler';
//---------------------------------------
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//引入導航
import Main from './Main';
//引入全域變數
import { Provider } from "react-redux";
import { store } from './resource/redux/store';
//導入語言
import { useTranslation } from "react-i18next";
import i18next from "./i18next";
//引入自訂字體
import * as Font from 'expo-font';
//啟動畫面splash screen用
import * as SplashScreen from 'expo-splash-screen';
const fetchFonts = () => {
  return Font.loadAsync({
    'Jersey15-Regular': require('./assets/fonts/Jersey15-Regular.ttf'),
  });
};
SplashScreen.preventAutoHideAsync();

export default function App() {
  const { t } = useTranslation();
  //確認字體得到讀取
  const [fontLoaded, setFontLoaded] = React.useState(false);
  React.useEffect(() => {
    const loadFonts = async () => {
      try {
        await fetchFonts();
        setFontLoaded(true);
        await SplashScreen.hideAsync();
      } catch (e) {
        console.warn(e);
      }
    };
    loadFonts();

  }, []);

  if (!fontLoaded) {
    return null; // Return null until the font is loaded
  }


  return (
    <Provider store={store} >
      <Main />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//小筆記

//你可以使用
//import {useTheme } from 'react-native-paper';
//const theme = useTheme();
//來實現所有顏色的使用ex:theme.colors.secondary