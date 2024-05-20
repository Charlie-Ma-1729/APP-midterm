import { createSlice } from '@reduxjs/toolkit';
//此變數用於調控顏色模式
//定義起始變數(state)
const initialState = {
    colorMode: "dark"
};

const colorModeSlice = createSlice({
    name: 'colorMode',
    initialState,
    //定義函式(action)
    reducers: {
        toggleColorMode: (state, action) => {
            state.colorMode = state.colorMode === "light" ? "dark" : "light";
        }
    },
});

// export state to global
export const selectcolorMode = (state) => state.colorMode;

// export actions to global
export const { toggleColorMode } = colorModeSlice.actions;

// export reducer to global
export default colorModeSlice.reducer;