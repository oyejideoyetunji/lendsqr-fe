import React, { ChangeEvent, SyntheticEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { LoginInput } from "../../lib/typeDefinitions"
import { validateLoginFormFields } from "../../lib/validations/loginForm"
import { updateAuth } from "../../store/reducers/authReducer"
import Button from "../button"
import Input from "../input"


const LoginForm = () => {
    const dispatch = useDispatch()

    const [formFields, setFormFields] = useState<LoginInput>({
        email: "",
        password: "",
    })

    const [formFieldsErrors, setFormFieldsErrors] = useState({
        emailError: "",
        passwordError: "",
    })

    return (
        <form className="login" onSubmit={onFormSubmit}>
            <h2 className="h2">
                Welcome!
            </h2>
            <p className="small-txt">
                Enter details to login
            </p>

            <section className="frm-grp">
                <Input
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={formFields.email}
                    onChange={onFormFieldChange}
                    error={formFieldsErrors.emailError}
                    required
                />
                <Input
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={formFields.password}
                    onChange={onFormFieldChange}
                    error={formFieldsErrors.passwordError}
                    required
                />

                <p className="action-txt">
                    FORGOT PASSWORD
                </p>

                <Button className="w-100">Login</Button>
            </section>
        </form>
    )

    function onFormFieldChange(event: ChangeEvent<HTMLInputElement>){
        const { name, value } = event.target

        setFormFields({
            ...formFields,
            [name]: value,
        })
    }

    function onFormSubmit(event: SyntheticEvent) {
        event.preventDefault();

        const { isValid, fieldErrors } = validateLoginFormFields(formFields, formFieldsErrors)
        setFormFieldsErrors({
            ...formFieldsErrors,
            ...fieldErrors,
        })

        if (isValid) {
            dispatch(updateAuth({
                user: {email: formFields.email}
            }))
        }
    }
}

export default LoginForm
