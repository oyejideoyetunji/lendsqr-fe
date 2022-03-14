import React from "react"
import SideBar from "../sidebar";
import SideMenuItem, { LogoutMenu } from "../sideMenuItem";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { removeStoreData, StorageKeys } from "../../lib/localStorage";
import { updateAuth } from "../../store/reducers/authReducer";
import { adminDashboardRoutes } from "../../navigation/routes";



const AdminLayoutSideBar = () => {
    const { pathname } = useLocation()
    const dispatch = useDispatch()


    return (
        <SideBar>
            <div className="wrp-admin-layout-side-bar">
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
                {
                    adminDashboardRoutes.customers.map(itm => (
                        <SideMenuItem
                            key={itm.label}
                            route={itm}
                            isActive={pathname === itm.url}
                        />
                    ))
                }
                <LogoutMenu
                    route={{
                        label: "Logout",
                        icon: "fas fa-sign-out-alt",
                        url: "",
                    }}
                    onClick={onLogout}
                />
            </div>
        </SideBar>
    )

    function onLogout() {
        removeStoreData(StorageKeys.AuthUser)
        dispatch(updateAuth({ user: null }))
    }
}

export default AdminLayoutSideBar
