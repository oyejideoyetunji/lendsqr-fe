import React from "react"
import Button from "../button"
import Input from "../input"


const LoginForm = () => {
    return (
        <form className="login">
            <h2 className="h2">
                Welcome!
            </h2>
            <p className="small-txt">
                Enter details to login
            </p>

            <section className="frm-grp">
                <Input
                    placeholder="Email"
                />
                <Input
                    placeholder="Password"
                />

                <p className="action-txt">
                    FORGOT PASSWORD
                </p>

                <Button>Login</Button>
            </section>
        </form>
    )
}

export default LoginForm
