import { createSlice } from '@reduxjs/toolkit';
//此變數用於判斷是否處於牌組編輯模式以及編輯哪個牌組
//定義起始變數(state)
const initialState = {
    isEdit: false,
    editingDeck: "飯糰拳"
};

const isEditSlice = createSlice({
    name: 'isEdit',
    initialState,
    //定義函式(action)
    reducers: {
        //傳一個物件，全部由該物件一次設置
        //在使用全域變數時，請務必以state, action為引數
        editOn: (state, action) => {
            state.isEdit = true
        },
        editOff: (state, action) => {
            state.isEdit = false
        },
        setEditingDeck: (state, action) => {
            const tarDeck = action.payload.tarDeck;
            state.editingDeck = tarDeck;
        }
    }
});

// export state to global
export const selectIsEdit = (state) => state.isEdit.isEdit;
export const selectEditingDeck = (state) => state.isEdit.editingDeck;
// export actions to global
export const { editOn, editOff, setEditingDeck } = isEditSlice.actions;

// export reducer to global
export default isEditSlice.reducer;