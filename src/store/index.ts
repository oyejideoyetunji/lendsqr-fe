import { createStore } from "redux";
import { saveStorageData, StorageKeys } from "../lib/localStorage";
import reducer, { StoreState } from "./reducers";


const store = createStore(reducer)
store.subscribe(() => {
    updateLocalStore(store.getState())
})

function updateLocalStore({ auth }: StoreState) {
    const { user } = auth
    if (user) { saveStorageData(StorageKeys.AuthUser, user) }
}

export default store
