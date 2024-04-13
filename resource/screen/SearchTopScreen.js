//react自帶的material disign
import { PaperProvider } from 'react-native-paper';

//react-native-paper提供的物件
import { IconButton, Appbar, useTheme, FAB } from 'react-native-paper';

//普通宣告
import { StyleSheet, Text, View, StatusBar, ScrollView, Button } from 'react-native';
//宣告自製物件
import InfoCardList from '../Component/InfoCardList';

const SearchTopScreen = ({ navigation }) => {
    const theme = useTheme();
    return (
        <View style={{ ...styles.container, backgroundColor: theme.colors.surface }}>
            <StatusBar style="auto" />
            <FAB
                color={theme.colors.onTertiaryContainer}
                backgroundColor={theme.colors.tertiaryContainer}
                style={styles.FABStyle}
                icon="filter"
                onPress={() => navigation.navigate("篩選")} />
            <InfoCardList />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    FABStyle: {
        position: "absolute",
        bottom: 7,
        right: 10,
        zIndex: 9999
    }
});

export default SearchTopScreen;