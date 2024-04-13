import { PaperProvider } from 'react-native-paper';

//react-native-paper提供的物件
import { IconButton, Appbar } from 'react-native-paper';

//普通宣告
import { StyleSheet, Text, View, StatusBar, ScrollView, Button } from 'react-native';
//宣告自己的物件
import Filter from '../component/Filter';

const SearchFilterScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Filter />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default SearchFilterScreen;