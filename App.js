//規定一定要放最上面，不能亂動
import 'react-native-gesture-handler';
//---------------------------------------

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//引入導航
import Navigator from './resource/navigator/navigator';

export default function App() {
  return (
    <View style={styles.container}>
      <Navigator></Navigator>
    </View>
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
