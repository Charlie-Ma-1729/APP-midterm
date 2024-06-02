import { createSlice } from '@reduxjs/toolkit';
//此變數用於調控顏色模式
//定義起始變數(state)
const initialState = {
    sheetContent: {
        sheetId: 2015,
        sheetPicture: "https://raw.githubusercontent.com/Charlie-Ma-1729/APP-midterm/main/assets/images/AATW/AATW-015.png",
        sheetName: "垂頭鯊遊具",
        sheetType: "角色",
        sheetPackId: "AATW-015",
        sheetEffect: "上個回合使用的角色為暗屬性，且時間為早上時，追加使用一張卡，那之後，抽一張卡。",
        sheetIllustrator: "skmaru",
        sheetElement: {
            elementCost: 5,
            elementCharge: 1,
            elementTime: 0,
            elementAttribute: "炎",
            elementNight: 50,
            elementDay: 70
        }
    }

};

const sheetContentSlice = createSlice({
    name: 'sheetContent',
    initialState,
    //定義函式(action)
    reducers: {
        //傳一個物件，全部由該物件一次設置
        //在使用全域變數時，請務必以state, action為引數
        setSheetContent: (state, action) => {
            const { tarId, tarPicture, tarName, tarType, tarPackId, tarEffect, tarIllustrator, tarElement } = action.payload;
            state.sheetContent.sheetId = tarId;
            state.sheetContent.sheetPicture = tarPicture;
            state.sheetContent.sheetName = tarName;
            state.sheetContent.sheetType = tarType;
            state.sheetContent.sheetPackId = tarPackId;
            state.sheetContent.sheetEffect = tarEffect;
            state.sheetContent.sheetIllustrator = tarIllustrator;
            if (tarElement) {
                const { tarCost, tarCharge, tarTime, tarAttribute, tarNight, tarDay } = tarElement;
                state.sheetContent.sheetElement.elementCost = tarCost;
                state.sheetContent.sheetElement.elementCharge = tarCharge;
                state.sheetContent.sheetElement.elementTime = tarTime;
                state.sheetContent.sheetElement.elementAttribute = tarAttribute;
                //不是腳色卡就沒有攻擊
                if (tarType == "角色") {
                    state.sheetContent.sheetElement.elementNight = tarNight;
                    state.sheetContent.sheetElement.elementDay = tarDay;
                } else {
                    state.sheetContent.sheetElement.elementNight = null;
                    state.sheetContent.sheetElement.elementDay = null;
                }
            } else {
                state.sheetContent.sheetElement = null;
            }
        },

    },
});

// export state to global
export const selectsheetContent = (state) => state.sheetContent;

// export actions to global
export const { setSheetContent } = sheetContentSlice.actions;

// export reducer to global
export default sheetContentSlice.reducer;