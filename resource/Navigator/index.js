import React from "react";
//navigation宣告
import { NavigationContainer } from "@react-navigation/native";
import { CommonActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//navigation提供的物件
import { useNavigation } from "@react-navigation/native";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
import { useSelector } from "react-redux";
import { selectIsEdit , selectEditingDeckId} from "../redux/isEditSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
//導入素材
import {
  Text,
  BottomNavigation,
  useTheme,
  Button,
  Menu,
  Divider,
  IconButton,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

//導入語言
import { useTranslation } from "react-i18next";
import i18next from "../../i18next";

//導入頁面
import HomeTopScreen from "../screen/HomeTopScreen";
import HomeGameplayScreen from "../screen/HomeGameplayScreen";
import HomeManualScreen from "../screen/HomeManualScreen";
import SearchTopScreen from "../screen/SearchTopScreen";
import SearchFilterScreen from "../screen/SearchFilterScreen";
import DeckTopScreen from "../screen/DeckTopScreen";
import DeckInsideScreen from "../screen/DeckInsideScreen";
import ConfigTopScreen from "../screen/ConfigTopScreen";
import { use } from "i18next";
//各頁面的堆疊
const HomeStack = () => {
  const theme = useTheme(); //引入主題以使用主題
  //設置menu
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  //創建navigation變數
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.secondary, // 标题栏背景颜色
        },
        headerTintColor: theme.colors.onSecondary, // 标题栏文字颜色
        headerTitleStyle: {
          fontSize: 20,
        },
        headerTitleStyle: {
          fontWeight: "bold", // 标题栏文字样式
        },
      }}
      initialRouteName="主頁"
    >
      <Stack.Screen name="主頁" component={HomeTopScreen} />
      <Stack.Screen
        name="遊戲"
        component={HomeGameplayScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <Menu
              visible={visible}
              onDismiss={closeMenu}
              anchor={
                <IconButton
                  icon="dots-horizontal"
                  iconColor={theme.colors.onSecondary}
                  size={30}
                  onPress={openMenu}
                />
              }
            >
              <Menu.Item
                onPress={() => {
                  navigation.setParams({ action: "reset" });
                  closeMenu();
                }}
                title="重製盤面"
              />
              <Menu.Item
                onPress={() => {
                  navigation.setParams({ action: "dice" });
                  closeMenu();
                }}
                title="擲骰子"
              />
              <Menu.Item
                onPress={() => {
                  navigation.setParams({ action: "coin" });
                  closeMenu();
                }}
                title="拋硬幣"
              />
            </Menu>
          ),
        })}
      />
      <Stack.Screen name="說明書" component={HomeManualScreen} />
    </Stack.Navigator>
  );
};
const SearchStack = () => {
  const theme = useTheme(); //引入主題以使用主題
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.secondary, // 标题栏背景颜色
        },
        headerTintColor: theme.colors.onSecondary, // 标题栏文字颜色
        headerTitleStyle: {
          fontSize: 20,
        },
        headerTitleStyle: {
          fontWeight: "bold", // 标题栏文字样式
        },
      }}
      initialRouteName="搜尋"
    >
      <Stack.Screen name="搜尋" component={SearchTopScreen} />
      <Stack.Screen name="篩選" component={SearchFilterScreen} />
    </Stack.Navigator>
  );
};
const DeckStack = () => {
  const { t } = useTranslation(); //引入語言以使用語言
  const theme = useTheme(); //引入主題以使用主題
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.secondary, // 标题栏背景颜色
        },
        headerTintColor: theme.colors.onSecondary, // 标题栏文字颜色
        headerTitleStyle: {
          fontSize: 20,
        },
        headerTitleStyle: {
          fontWeight: "bold", // 标题栏文字样式
        },
      }}
      initialRouteName="deck"
    >
      <Stack.Screen
        name="牌組"
        component={DeckTopScreen}
        options={{ title: t("decks") }} //使用t()來調用語言
      />
      <Stack.Screen
        name="牌組詳細"
        component={DeckInsideScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <Menu
              visible={visible}
              onDismiss={closeMenu}
              anchor={
                <IconButton
                  icon="dots-horizontal"
                  iconColor={theme.colors.onSecondary}
                  size={30}
                  onPress={openMenu}
                />
              }
            >
              <Menu.Item
                onPress={() => {
                  navigation.setParams({ action: "inputDeckCode" });
                  closeMenu();
                }}
                title="輸入牌組代碼"
              />
              <Menu.Item
                onPress={() => {
                  navigation.setParams({ action: "generateDeckCode" });
                  closeMenu();
                }}
                title="生成牌組代碼"
              />
              <Menu.Item
                onPress={() => {
                  navigation.setParams({ action: "deleteDeck" });
                  closeMenu();
                }}
                title="刪除牌組"
                titleStyle={{ color: theme.colors.error }}
              />
            </Menu>
          ),
        })}
      />
    </Stack.Navigator>
  );
};
const ConfigStack = () => {
  const theme = useTheme(); //引入主題以使用主題
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.secondary, // 标题栏背景颜色
        },
        headerTintColor: theme.colors.onSecondary, // 标题栏文字颜色
        headerTitleStyle: {
          fontSize: 20,
        },
        headerTitleStyle: {
          fontWeight: "bold", // 标题栏文字样式
        },
      }}
      initialRouteName="設置"
    >
      <Stack.Screen name="設置" component={ConfigTopScreen} />
    </Stack.Navigator>
  );
};
//主引導工具
function Navigator() {
  //使用paper提供的tabbar
  //不太建議碰，我還沒搞懂全部
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
        tabBar={({ navigation, state, descriptors, insets }) => (
          <BottomNavigation.Bar
            navigationState={state}
            safeAreaInsets={insets}
            onTabPress={({ route, preventDefault }) => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (event.defaultPrevented) {
                preventDefault();
              } else {
                navigation.dispatch({
                  ...CommonActions.navigate(route.name, route.params),
                  target: state.key,
                });
              }
            }}
            renderIcon={({ route, focused, color }) => {
              const { options } = descriptors[route.key];
              if (options.tabBarIcon) {
                return options.tabBarIcon({ focused, color, size: 24 });
              }

              return null;
            }}
            getLabelText={({ route }) => {
              const { options } = descriptors[route.key];
              const label =
                options.tabBarLabel !== undefined
                  ? options.tabBarLabel
                  : options.title !== undefined
                  ? options.title
                  : route.title;

              return label;
            }}
          />
        )}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: "主頁",
            tabBarIcon: ({ color, size }) => {
              return <Icon name="home" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchStack}
          options={{
            tabBarLabel: "搜尋",
            tabBarIcon: ({ color, size }) => {
              return <Icon name="magnify" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Deck"
          component={DeckStack}
          options={{
            tabBarLabel: "牌組",
            tabBarIcon: ({ color, size }) => {
              return (
                <Icon name="bookmark-box-multiple" size={size} color={color} />
              );
            },
          }}
        />
        <Tab.Screen
          name="Config"
          component={ConfigStack}
          options={{
            tabBarLabel: "設置",
            tabBarIcon: ({ color, size }) => {
              return <Icon name="cog" size={size} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
