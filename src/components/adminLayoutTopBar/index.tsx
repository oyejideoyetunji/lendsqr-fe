import React from "react"
import logo from "../../assets/images/logo.png";
import shortLogo from "../../assets/images/shortLogo.png";
import demoAvatar from "../../assets/images/demo-avatar.png";
import Input from "../input";

interface AdminLayoutTopBarProps {
    ontoggleMobileMenu(): void;
}

const AdminLayoutTopBar = ({ ontoggleMobileMenu }: AdminLayoutTopBarProps) => {
    return (
        <section className="layout-admin-top-bar-wrp">

            <section className="logo-column">
                <div onClick={ontoggleMobileMenu} className="mobile-menu-icon">
                    <i className="fas fa-bars" />
                </div>
                <img className="logo" src={logo} alt="logo" />
                <img className="logo-mobile" src={shortLogo} alt="logo" />
            </section>

            <section className="top-bar-body">
                <section className="search-bar">
                    <Input
                    placeholder="Search for anything"
                        childNode={
                            <div className="search-input-btn cursor-pointer">
                                <i className="fas fa-search" />
                            </div>
                        }
                        childNodeWidth="60px"
                        childNodeRight="0"
                        childNodeTop="1px"
                    />
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
