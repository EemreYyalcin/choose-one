import {combineReducers} from 'redux';
import {GoogleApiReducer} from "./GoogleApiReducer";
import {LoginReducer} from "./LoginReducer";
import {RouterReducer} from "./RouterReducer";

export default combineReducers({
    loginGoogle: GoogleApiReducer,
    loginUser: LoginReducer,
    selectRoute: RouterReducer
});