//重点是多个reduces 的合并

import {createStore,combineReducers,applyMiddleware} from "redux";
import reduxPromiseMiddleware from "redux-promise-middleware";
import Home from "./reducers/home";
const reducers = combineReducers({
    Home,
})

const store = createStore(reducers,applyMiddleware(reduxPromiseMiddleware()));

export default store;
	

