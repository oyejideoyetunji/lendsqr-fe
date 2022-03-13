export interface Action<T, K> {
    type: T
    payload: K
}

export interface AuthUser {
    email: string
}

export interface LoginInput {
    email: string;
    password: string;
}
