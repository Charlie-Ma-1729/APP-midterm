//react自帶的material disign
import { PaperProvider } from 'react-native-paper';

//react-native-paper提供的物件
import { IconButton, Appbar, useTheme } from 'react-native-paper';

//普通宣告
import { StyleSheet, Text, View, StatusBar, ScrollView, Button } from 'react-native';
//宣告自製物件
import InfoCard from '../Component/InfoCard';

const SearchTopScreen = ({ navigation }) => {
    const theme = useTheme();
    return (
        <View style={{ ...styles.container, backgroundColor: theme.colors.surface }}>
            <InfoCard />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default SearchTopScreen;