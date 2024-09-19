import {combineReducers} from "redux";
import themes from "./themes";
import products from "./products";
import productDetail from "./productDetail";

const reducers = combineReducers({themes,products,productDetail})

export default reducers