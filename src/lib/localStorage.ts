export enum StorageKeys {
    AuthUser = "auth_user",
}

export function getStorageData<P>(key: StorageKeys): null | P {
    try {
        const rawData = localStorage.getItem(key);
        if (!rawData) {
            return null;
        }

        return JSON.parse(rawData);
    } catch (e) {
        return null;
    }
}

export function saveStorageData<P>(key: StorageKeys, value: P): void {
    try {
        if (!value || !key) {
            return;
        }

        const stringValue = JSON.stringify(value);
        localStorage.setItem(key, stringValue);
    } catch (e) {
        return;
    }
}

export function removeStoreData(...keys: StorageKeys[]): void {
    try {
        if (!keys || !keys?.length) {
            return
        }

        for (const key of keys) {
            localStorage.removeItem(key)
        }
    } catch (e) {
        return
    }
}
