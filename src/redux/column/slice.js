import { createSlice } from "@reduxjs/toolkit";
import recommendColumn from "@mockData/recommendColumn";

const initialState = {
    recommendColumn: []
}

const columnSlice = createSlice({
    name: "column",
    initialState,
    reducers: {
        addColumn: (state) => {
            state.recommendColumn = recommendColumn()
        },
        appendColumn: (state) => {
            state.recommendColumn = state.recommendColumn.concat(recommendColumn())
        }
    }
})

export const {
    addColumn,
    appendColumn
} = columnSlice.actions

export default columnSlice.reducer