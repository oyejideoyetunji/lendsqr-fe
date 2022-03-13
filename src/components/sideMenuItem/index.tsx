import React from "react"
import { NavLink } from "react-router-dom";


export interface RouteItem {
    label: string;
    icon: string;
    url: string;
}

interface SideMenuItemProps {
    route: RouteItem;
    isActive?: boolean;
    onClick?(): void;
}


const SideMenuItem = ({ route, isActive }: SideMenuItemProps) => {
    return (
        <NavLink to={route.url}>
            <div className={`wrp-side-menu-itm ${isActive ? "active" : ""}`}>
                <span className="icon">
                    <i className={route.icon} />
                </span>
                <span className="txt">{route.label}</span>
            </div>
        </NavLink>
    )
}

export const LogoutMenu = ({ route, isActive, onClick }: SideMenuItemProps) => {
    return (
        <div
            className={`wrp-side-menu-itm ${isActive ? "active" : ""}`}
            onClick={onClick}
        >
            <span className="icon">
                <i className={route.icon} />
            </span>
            <span className="txt">{route.label}</span>
        </div>
    )
}

export default SideMenuItem
