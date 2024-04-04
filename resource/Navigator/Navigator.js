//navigation宣告
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
//導入頁面
import HomeTopScreen from '../screen/HomeTopScreen';
import SearchTopScreen from '../screen/SearchTopScreen';
import SearchFilterScreen from '../screen/SearchFilterScreen';
import DeckTopScreen from '../screen/DeckTopScreen';
import DeckInsideScreen from '../screen/DeckInsideScreen';
import ConfigTopScreen from '../screen/ConfigTopScreen';
//各頁面的堆疊
const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="home">
            <Stack.Screen name='home' component={HomeTopScreen} />
        </Stack.Navigator>
    );
}
const SearchStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="search">
            <Stack.Screen name='search' component={SearchTopScreen} />
            <Stack.Screen name='filter' component={SearchFilterScreen} />
        </Stack.Navigator>
    );
}
const DeckStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="deck">
            <Stack.Screen name='deck' component={DeckTopScreen} />
            <Stack.Screen name='inside' component={DeckInsideScreen} />
        </Stack.Navigator>
    );
}
const ConfigStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="config">
            <Stack.Screen name='config' component={ConfigTopScreen} />
        </Stack.Navigator>
    );
}
//主引導工具
function Navigator() {
    return (
        <NavigationContainer>
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Search" component={SearchStack} />
            <Tab.Screen name="Deck" component={DeckStack} />
            <Tab.Screen name="Config" component={ConfigStack} />
        </NavigationContainer>
    );
}

export default Navigator;