import { Action, AuthUser } from "../../../lib/typeDefinitions";
import { getStorageData, StorageKeys } from "../../../lib/localStorage";

const initialAuthUser = getStorageData<AuthUser>(StorageKeys.AuthUser) || null;

const initialAuthState = {
    user: initialAuthUser,
}

export type AuthState = typeof initialAuthState

export enum AuthActions {
    UPDATE_AUTH = "update"
}

export default function AuthReducer(
    state = initialAuthState,
    { type, payload }: Action<AuthActions, AuthState>,
): AuthState {
    switch (type) {
        case AuthActions.UPDATE_AUTH: {
            return payload
        }
        default: {
            return state
        }
    }
}

export function updateAuth(payload: AuthState): Action<AuthActions, AuthState> {
    return {
        type: AuthActions.UPDATE_AUTH,
        payload,
    }
}
