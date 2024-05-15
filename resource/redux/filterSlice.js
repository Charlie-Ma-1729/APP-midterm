import { createSlice } from '@reduxjs/toolkit';
//此變數用於調控顏色模式
//定義起始變數(state)
const initialState = {
    filterContent: {
        filterName: null,
        filterPack: null,
        filterType: null,
        filterCost: null,
        filterCharge: null,
        filterTime: null,
        filterAttribute: null,
        filterNight: null,
        filterDay: null
    }
};

const filterSlice = createSlice({
    name: 'colorMode',
    initialState,
    //定義函式(action)
    reducers: {
        setFilterContent: (state, action) => {
            const { tarName, tarPack, tarType, tarElement } = action.payload;
            state.filterContent.filterName = tarName;
            state.filterContent.filterPack = tarPack;
            state.filterContent.filterType = tarType;
            const { tarCost, tarCharge, tarTime, tarAttribute, tarNight, tarDay } = tarElement;
            state.filterContent.filterCost = tarCost;
            state.filterContent.filterCharge = tarCharge;
            state.filterContent.filterTime = tarTime;
            state.filterContent.filterAttribute = tarAttribute;
            if (tarPack == "角色") {
                state.filterContent.filterDay = tarDay;
                state.filterContent.filterNight = tarNight;
            }
            else {
                state.filterContent.filterDay = null;
                state.filterContent.filterNight = null;
            }
        }
    },
});

// export state to global
export const selectfilterContent = (state) => state.filterContent;

// export actions to global
export const { setFilterContent } = filterSlice.actions;

// export reducer to global
export default filterSlice.reducer;