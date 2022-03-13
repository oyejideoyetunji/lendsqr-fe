export const isEmptyString = (value?: string) => !value || !value?.trim();

export function isInvalidPassword(value: string): boolean {
    const MIN_PASSWORD_LENGTH = 6;
    return !value || value.trim().length < MIN_PASSWORD_LENGTH
}

export function isEmailInvalid(email: string): boolean {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/

    return !email || !emailRegex.test(email.trim())
}