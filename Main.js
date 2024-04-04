import * as React from 'react';
import { MD3LightTheme, MD3DarkTheme, PaperProvider } from 'react-native-paper';
import App from './App';
import costomColor from './resource/theme/material-theme.json'

//修改原有主題以自建新主題(暫時沒有dark)
const Theme = {
    ...MD3LightTheme,

    // Specify a custom property

    // Specify a custom property in nested object
    colors: {
        ...MD3LightTheme.colors,
        ...costomColor.schemes.light
    },
};
// const darkTheme = {
//     ...MD3DarkTheme,

//     // Specify a custom property
//     custom: 'property',

//     // Specify a custom property in nested object
//     colors: {
//         ...MD3LightTheme.colors,
//         ...costomColor.schemes.dark
//     },
// };

export default function Main() {
    return (
        <PaperProvider theme={Theme}>
            <App />
        </PaperProvider>
    );
}