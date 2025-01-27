import { createSlice } from "@reduxjs/toolkit";

// mockdata
import myDiary from "@mockData/myDiary";
import myExercise from "@mockData/myExercise";
import bodyRecord from "@mockData/bodyRecord";

const initialState = {
    myExercise: {
        date: "",
        exercises: []
    },
    bodyRecord: {
        date: "",
        filterType: "",
        datasets: []
    },
    myDiary: []
}

const myRecordSlice = createSlice({
    name: "myRecord",
    initialState,
    reducers: {
        addMyExercise: (state) => {
            state.myExercise = myExercise
        },
        addMyDiary: (state) => {
            state.myDiary = myDiary()
        },
        appendMyDiary: (state) => {
            state.myDiary = state.myDiary.concat(myDiary())
        },
        showBodyRecord: (state, action) => {
            const filterType = action.payload
            const { date, datasets } = bodyRecord[filterType]
            state.bodyRecord.date = date
            state.bodyRecord.filterType = filterType
            state.bodyRecord.datasets = datasets
        }
    }
})

export const {
    addMyExercise,
    addMyDiary,
    appendMyDiary,
    showBodyRecord
} = myRecordSlice.actions

export default myRecordSlice.reducer