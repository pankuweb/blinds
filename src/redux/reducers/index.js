import { combineReducers } from "redux";
import products from "./products";
import auth from "./auth";
const rootReducers = combineReducers({
    products, auth
});

export default rootReducers;
