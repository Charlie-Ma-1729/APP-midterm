import { configureStore } from '@reduxjs/toolkit';
import colorModeReducer from './colorModeSlice';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

export const store = configureStore({
    reducer: {
        colorMode: persistReducer(persistConfig, colorModeReducer),
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