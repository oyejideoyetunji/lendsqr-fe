import React, { ReactNode } from "react"

interface SideBarProps {
    children: ReactNode;
}

const SideBar = ({ children }: SideBarProps) => {
    return (
        <section className="container-side-bar">
            {children}
        </section>
    )
}

export default SideBar
