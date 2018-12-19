//重点是多个reduces 的合并

import {createStore,combineReducers,applyMiddleware} from "redux";
import reduxPromiseMiddleware from "redux-promise-middleware";
import home from "./reducers/home";
const reducers = combineReducers({
    home,
})

const store = createStore(reducers,applyMiddleware(reduxPromiseMiddleware()));

export default store;
	

