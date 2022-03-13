import React, { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { removeStoreData, StorageKeys } from "../../lib/localStorage";
import { updateAuth } from "../../store/reducers/authReducer";
import AdminLayoutTopBar from "../adminLayoutTopBar";
import SideBar from "../sidebar";
import SideMenuItem, { LogoutMenu } from "../sideMenuItem";

interface AdminLayoutProps {
    children: ReactNode;
}

const AdminLayout = (props: AdminLayoutProps) => {
    const { pathname } = useLocation()
    const dispatch = useDispatch()

    return (
        <main className="layout-admin">
            <AdminLayoutTopBar />
            <section className="container">
                <SideBar>
                    <div className="p-b-16">
                        <div className="flex align-center p-t-18 p-b-28 txt-thick">
                            <p className="icon">
                                <i className="fas fa-briefcase" />
                            </p>
                            <p className="txt">Switch organization</p>
                        </div>
                        <SideMenuItem
                            route={{
                                label: "Dashboard",
                                icon: "fas fa-home",
                                url: "",
                            }}
                        />
                    </div>
                    <div className="menu-hd">
                        customers
                    </div>
                    <SideMenuItem
                        route={{
                            label: "Users",
                            icon: "fas fa-users-friends",
                            url: "/users",
                        }}
                        isActive={pathname === "/users"}
                    />
                    <LogoutMenu
                        route={{
                            label: "Logout",
                            icon: "fas fa-sign-out-alt",
                            url: "",
                        }}
                        onClick={onLogout}
                    />
                </SideBar>
                <section className="body">
                    {props.children}
                </section>
            </section>
        </main>
    )

    function onLogout() {
        removeStoreData(StorageKeys.AuthUser)
        dispatch(updateAuth({ user: null }))
    }
}

export default AdminLayout
