//規定一定要放最上面，不能亂動
import 'react-native-gesture-handler';
//---------------------------------------
//test
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//引入導航
import Navigator from './resource/Navigator';

export default function App() {
  return (
    <Navigator />
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
