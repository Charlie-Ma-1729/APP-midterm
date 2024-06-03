import { createSlice } from '@reduxjs/toolkit';
//此變數用於觸發更新
//定義起始變數(state)
const initialState = {
    isTriger: false
};

const trigerRefreshSlice = createSlice({
    name: 'trigerRefresh',
    initialState,
    //定義函式(action)
    reducers: {
        trigerOn: (state) => {
            state.isTriger = true;
            console.log('trigerOn');
        },
        trigerOff: (state) => {
            state.isTriger = false;
            console.log('trigerOff');
        }
    },
});

// export state to global
export const selectIsTriger = (state) => state.trigerRefresh.isTriger;

// export actions to global
export const { trigerOn, trigerOff } = trigerRefreshSlice.actions;

// export reducer to global
export default trigerRefreshSlice.reducer;