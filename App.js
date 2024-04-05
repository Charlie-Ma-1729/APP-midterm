//規定一定要放最上面，不能亂動
import 'react-native-gesture-handler';
//---------------------------------------
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//引入導航
import Main from './Main';
//引入全域變數
import { Provider } from "react-redux";
import { store } from './resource/redux/store';


export default function App() {
  return (
    <Provider store={store}>
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