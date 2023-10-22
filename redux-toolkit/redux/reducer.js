// import { counterReducer } from "./counter/counterReducer";
import { counterReducer } from "./counter/counterSlice";
import { todoReducer } from "./todo/todoReducer";

import { combineReducers } from "redux";






export const rootReducer = combineReducers({
    // counter:counterReducer,
    counter:counterReducer,
    todo:todoReducer
})
