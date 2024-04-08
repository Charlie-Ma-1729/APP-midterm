import { PaperProvider } from 'react-native-paper';

//react-native-paper提供的物件
import { IconButton, Appbar } from 'react-native-paper';

//普通宣告
import { StyleSheet, Text, View, StatusBar, ScrollView, Button } from 'react-native';
//引入自訂物件
import ColorModeSwich from '../Component/ColorModeSwich';

const ConfigTopScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ColorModeSwich />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center"
    },
});

export default ConfigTopScreen;