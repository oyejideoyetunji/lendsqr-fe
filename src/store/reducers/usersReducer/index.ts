import { Action, UserSumary } from "../../../lib/typeDefinitions";


export enum UsersActions {
    SET_USERS = "set-users",
    SET_FILTERED_USERS = "set-filtered-users",
}

export interface UsersState {
    users: UserSumary[]
    filteredUser: UserSumary[]
}

const initialUsersState = {
    users: [],
    filteredUser: [],
}


export default function UsersReducer(
    state = initialUsersState,
    { type, payload }: Action<UsersActions, UserSumary[]>
): UsersState {
    switch (type) {
        case UsersActions.SET_USERS:
            return {
                ...state,
                users: payload,
                filteredUser: payload,
            }
        case UsersActions.SET_FILTERED_USERS:
            return {
                ...state,
                filteredUser: payload
            }
        default:
            return state;
    }
}

export function setUsers(
    payload: UserSumary[],
): Action<UsersActions, UserSumary[]> {
    return {
        type: UsersActions.SET_USERS,
        payload,
    }
}

export function setFilteredUsers(
    payload: UserSumary[],
): Action<UsersActions, UserSumary[]> {
    return {
        type: UsersActions.SET_FILTERED_USERS,
        payload,
    }
}
