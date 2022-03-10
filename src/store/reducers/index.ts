import { combineReducers } from "redux";
import AuthReducer, { AuthState } from "./authReducer";

export interface StoreState {
    auth: AuthState
}

const reducer = combineReducers({
    auth: AuthReducer
})

export default reducer
