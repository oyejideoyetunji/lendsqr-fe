import React from "react"
import logo from "../../assets/images/logo.png";
import shortLogo from "../../assets/images/shortLogo.png";
import demoAvatar from "../../assets/images/demo-avatar.png";
import Input from "../input";



const AdminLayoutTopBar = () => {
    return (
        <section className="layout-admin-top-bar-wrp">

            <section className="logo-column">
                <img className="logo" src={logo} alt="logo" />
                <img className="logo-mobile" src={shortLogo} alt="logo" />
            </section>

            <section className="top-bar-body">
                <section className="search-bar">
                    <Input />
                </section>

                <section className="user-column">
                    <div className="notification">
                        <i className="far fa-bell" />
                    </div>
                    <div
                        className="small-avatar"
                        style={{
                            backgroundImage: `url(${demoAvatar})`
                        }}
                    />
                    <div className="user-name-wrp">
                        <span>
                            Adedeji
                        </span>
                        <i className="fas fa-caret-down" />
                    </div>
                </section>
            </section>

        </section>
    )
}

export default AdminLayoutTopBar
