import { isEmailInvalid, isEmptyString } from "./general"

export function validateLoginFormFields(fieldData: any, fieldErrors: any) {
    let isValid = true

    for (const field in fieldData) {
        if (isEmptyString(fieldData[field])) {
            isValid = false
            fieldErrors[`${field}Error`] = "this field cannot be empty"
        } else if (field === "email" && isEmailInvalid(fieldData[field])) {
            isValid = false
            fieldErrors[`${field}Error`] = "invalid email format"
        } else {
            fieldErrors[`${field}Error`] = ""
        }
    }

    return { isValid, fieldErrors }
}
