import {combineReducers} from 'redux';
import {GoogleApiReducer} from "./GoogleApiReducer";

export default combineReducers({
    loginGoogle: GoogleApiReducer
});