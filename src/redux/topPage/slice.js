import { createSlice } from "@reduxjs/toolkit";

// constant
import { YEAR } from "@constants/filterBodyRecordType";

// mock data
import dateAchievementRage from "@mockData/dateAchievementRage";
import mealHistory from "@mockData/mealHistory";
import bodyRecord from "@mockData/bodyRecord";

const initialState = {
    dateAchievementRage: {
        url: "",
        date: "",
        rate: 0
    },
    graphData: {
        datasets: []
    },
    mealType: "",
    mealHistory: []
}

const topPageSlice = createSlice({
    name: "topPage",
    initialState,
    reducers: {
        getMealHistoryByType: (state, action) => {
            const filterType = action.payload
            state.mealType = filterType
            state.mealHistory = mealHistory(filterType)
        },
        addDateAchievementRage: (state) => {
            state.dateAchievementRage = dateAchievementRage
        },
        addGraphData: (state) => {
            state.graphData.datasets = bodyRecord[YEAR].datasets
        },
        addListMealHistory: (state) => {
            state.mealHistory = mealHistory()
        },
        appendListMealHistory: (state) => {
            const filterType = state.mealType
            state.mealHistory = state.mealHistory.concat(mealHistory(filterType))
        },
    }
})

export const {
    getMealHistoryByType,
    addDateAchievementRage,
    addGraphData,
    addListMealHistory,
    appendListMealHistory
} = topPageSlice.actions

export default topPageSlice.reducer