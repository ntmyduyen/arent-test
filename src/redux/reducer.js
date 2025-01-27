import { combineReducers } from "@reduxjs/toolkit";

// reducer
import topPage from './topPage/slice'
import myRecord from './myRecord/slice'
import column from './column/slice'
import user from './user/slice'

const appReducer = combineReducers({
    topPage,
    myRecord,
    column,
    user,
})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer