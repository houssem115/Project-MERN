
import { createStore, combineReducers, applyMiddleware } from "redux";
import Reducer from './Component/Reducer'
import thunk from 'redux-thunk';
import PannierReducer from "./Component/Reducers/PannierReducer";
const Store=createStore(combineReducers({count:Reducer,
    pannier:PannierReducer,
}),applyMiddleware(thunk) )
export default  Store