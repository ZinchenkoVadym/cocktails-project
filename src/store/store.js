import {combineReducers, applyMiddleware, createStore} from "redux";
import loginReducer from "./reducers/loginReducer";
import thunk from "redux-thunk";
import cocktailsReducer from "./reducers/cocktailsReducer";

let reducers = combineReducers({
    main: loginReducer,
    cocktails: cocktailsReducer
})


let store = createStore(reducers, applyMiddleware(thunk))

export default store;