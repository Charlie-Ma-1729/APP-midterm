import { createSlice } from '@reduxjs/toolkit';
//此變數用於抓取牌組列表
//定義起始變數(state)
const initialState = {
    deckList: ["1717334992190", "1717335070381", "1717344012944"]
};

const deckListSlice = createSlice({
    name: 'deckList',
    initialState,
    //定義函式(action)
    reducers: {
        addDeck: (state, action) => {
            state.deckList.push(action.payload);
        },
        deleteDeckInRedux: (state, action) => {
            const tar = action.payload;
            state.deckList = state.deckList.filter((item) => {
                return (item !== tar)
            })
        }
    },
});

// export state to global
export const selectDeckList = (state) => state.deckList.deckList;

// export actions to global
export const { addDeck, deleteDeckInRedux } = deckListSlice.actions;

// export reducer to global
export default deckListSlice.reducer;