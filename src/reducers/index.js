import {combineReducers} from 'redux';
import {GoogleApiReducer} from "./GoogleApiReducer";
import {LoginReducer} from "./LoginReducer";

export default combineReducers({
    loginGoogle: GoogleApiReducer,
    loginUser: LoginReducer
});