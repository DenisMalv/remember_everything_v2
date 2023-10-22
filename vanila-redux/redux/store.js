import { createStore } from "redux";
import { reducer } from "./reducer";
import { initialState } from "./initialState";

// const reducer = (state,action) =>{
//     switch (action.type){
//         case 'increment':
//             return {
//                 ...state,
//                 total:state.total + action.payload,
//             }
//         case 'decrement':
//         return {
//             ...state,
//             total:state.total - action.payload,
//         }
//         case "setStep": 
//             return{
//                 ...state,step:+action.payload
//             }
//         case "createTodo": 
//             return {
//                 ...state,
//                 todo:[...state.todo,{...action.payload}]
//             }

//         default:
//             return state
//     }
// }


// якщо використовуємо combineResucer тоді треба initialState 
// імпорутвати в файл reducer.js .  Якщо просто одна змінна reducer 
// тоді можна все тут застосовувати  export const store = createStore(reducer,initialState)

export const store = createStore(reducer,)

// console.log('store :',store)

// store.dispatch({type:'increment',payload:1})

// console.log(store.getState())