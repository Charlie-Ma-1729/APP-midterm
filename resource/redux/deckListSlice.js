import { createSlice } from '@reduxjs/toolkit';
//此變數用於篩選卡牌頁卡片
//定義起始變數(state)
const initialState = {
    deckList: []
};

const deckListSlice = createSlice({
    name: 'deckList',
    initialState,
    //定義函式(action)
    reducers: {
        addDeck: (state, action) => {
            state.deckList.push(action.payload);
        },
        deleteDeck: (state, action) => {
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
export const { addDeck, deleteDeck } = deckListSlice.actions;

// export reducer to global
export default deckListSlice.reducer;