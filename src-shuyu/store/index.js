//重点是多个reduces 的合并

import {createStore,combineReducers,applyMiddleware} from "redux";
import reduxPromiseMiddleware from "redux-promise-middleware";
import Home from "./reducers/home";
import NavList from "./reducers/navList";
import ListPic from "./reducers/list";
const reducers = combineReducers({
    Home,NavList,ListPic
})

const store = createStore(reducers,applyMiddleware(reduxPromiseMiddleware()));

export default store;
	

