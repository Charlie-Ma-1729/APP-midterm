import { configureStore } from '@reduxjs/toolkit';
//自己的reducer
import colorModeReducer from './colorModeSlice';
import sheetContentReducer from './sheetContentSlice';
import filterReducer from './filterSlice';
import isEditReducer from './isEditSlice';
import deckListReducer from './deckListSlice';
import trigerRefreshReducer from './trigerRefreshSlice';
//persist變數
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

export const store = configureStore({
    reducer: {
        colorMode: persistReducer(persistConfig, colorModeReducer),
        sheetContent: sheetContentReducer,
        filter: filterReducer,
        isEdit: isEditReducer,
        deckList: persistReducer(persistConfig, deckListReducer),
        trigerRefresh: trigerRefreshReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

// 在 persistStore 的回调函数中执行相应操作
persistStore(store, () => {
    console.log('Redux store persisted');
    // 在持久化完成后执行其他操作
});