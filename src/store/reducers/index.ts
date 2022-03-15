import { combineReducers } from "redux";
import AuthReducer, { AuthState } from "./authReducer";
import PaginationReducer, { PaginationState } from "./paginationReducer";
import UsersReducer, { UsersState } from "./usersReducer";

export interface StoreState {
    auth: AuthState
    users: UsersState
    pagination: PaginationState
}

const reducer = combineReducers({
    auth: AuthReducer,
    users: UsersReducer,
    pagination: PaginationReducer
})

export default reducer
