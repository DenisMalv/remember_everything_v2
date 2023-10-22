import { counterReducer } from "./counter/counterReducer";
import { todoReducer } from "./todo/todoReducer";

import { combineReducers } from "redux";






export const reducer = combineReducers({
    counter:counterReducer,
    todo:todoReducer
})
