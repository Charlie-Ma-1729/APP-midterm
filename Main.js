import * as React from 'react';
import { MD3LightTheme, MD3DarkTheme, PaperProvider } from 'react-native-paper';
import Navigator from './resource/Navigator';
import costomColor from './resource/theme/material-theme.json'
//引入store函式
import { useDispatch, useSelector } from 'react-redux';
import { selectcolorMode } from './resource/redux/colorModeSlice';

//修改原有主題以自建新主題(暫時沒有dark)
const lightTheme = {
    ...MD3LightTheme,
    roundness: 2,
    // Specify a custom property
    custom: 'property',

    // Specify a custom property in nested object
    colors: {
        ...MD3LightTheme.colors,
        ...costomColor.schemes.light
    },
};
const darkTheme = {
    ...MD3DarkTheme,
    roundness: 2,
    // Specify a custom property
    custom: 'property',

    // Specify a custom property in nested object
    colors: {
        ...MD3DarkTheme.colors,
        ...costomColor.schemes.dark
    },
};

export default function Main() {
    const colorMode = useSelector(selectcolorMode);
    let Theme = darkTheme;
    if (colorMode === "light") {
        console.log("light now");
        Theme = lightTheme;
    }
    else if (colorMode === "dark") {
        console.log("dark now");
        Theme = darkTheme;
    }
    return (
        <PaperProvider theme={Theme}>
            <Navigator />
        </PaperProvider>
    );
}