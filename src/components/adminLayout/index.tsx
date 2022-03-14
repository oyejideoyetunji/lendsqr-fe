import React, { ReactNode, useState } from "react";
import AdminLayoutSideBar from "../adminLayoutSideBar";
import AdminLayoutTopBar from "../adminLayoutTopBar";
import Modal from "../modal";


interface AdminLayoutProps {
    children: ReactNode;
}

const AdminLayout = (props: AdminLayoutProps) => {

    const [showMobileMenu, setShowMobileMenu] = useState(false)

    return (
        <main className="layout-admin">
            <AdminLayoutTopBar ontoggleMobileMenu={toggleMobileMenu} />
            <section className="container">
                <section className="wrp-side-bar">
                    <AdminLayoutSideBar />
                </section>
                <Modal className="mobile-menu-modal" showModal={showMobileMenu}>
                    <div onClick={toggleMobileMenu} className="close-icon">
                        <i className="fas fa-times" />
                    </div>
                    <AdminLayoutSideBar />
                </Modal>
                <section className="body">
                    {props.children}
                </section>
            </section>
        </main>
    )

    function toggleMobileMenu() {
        setShowMobileMenu(!showMobileMenu)
    }
}

export default AdminLayout
