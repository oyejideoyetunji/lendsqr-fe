import { createStore } from "redux";
import { saveStorageData, StorageKeys } from "../lib/localStorage";
import reducer from "./reducers";
import { AuthState } from "./reducers/authReducer";


const store = createStore(reducer)
store.subscribe(() => {
    updateLocalStore(store.getState().auth)
})

function updateLocalStore({user}: AuthState) {
    if (user) { saveStorageData(StorageKeys.AuthUser, user) }
}

export default store
