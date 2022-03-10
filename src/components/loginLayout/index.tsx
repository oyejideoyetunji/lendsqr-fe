import React, { ReactNode } from "react";
import brandSignIn from "../../assets/images/brandSignIn.png";
import logo from "../../assets/images/logo.png";


interface LoginLayoutProps {
    children: ReactNode
}

const LoginLayout = (props: LoginLayoutProps) => {
    return (
        <main className="login-layout">
            <section className="brand-section-card">
                <section className="logo-wrp">
                    <img className="logo" src={logo} alt="logo" />
                </section>
                <section className="login-image-wrp">
                    <img className="login-image" src={brandSignIn} alt="login" />
                </section>
            </section>
            <section className="login-section-card">
                <section className="mobile-logo-wrp">
                    <img className="logo" src={logo} alt="logo" />
                </section>
                <section className="login-form-wrp">
                    {props.children}
                </section>
            </section>
        </main>
    )
}

export default LoginLayout
 