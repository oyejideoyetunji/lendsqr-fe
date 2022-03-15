import { Action, UserSumary } from "../../../lib/typeDefinitions";


export enum UsersActions {
    SET_USERS = "set-users"
}

export interface UsersState {
    users: UserSumary[]
}

const initialUsersState = {
    users: []
}


export default function UsersReducer(
    state = initialUsersState,
    { type, payload }: Action<UsersActions, UserSumary[]>
): UsersState {
    switch (type) {
        case UsersActions.SET_USERS:
            return {
                users: payload
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
