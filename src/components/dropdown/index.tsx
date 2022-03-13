import React, { ReactNode } from "react"
import OutsideClickHandler from "react-outside-click-handler"


interface DropDownProps{
    onClose(): void
    onOpen(): void
    open: boolean
    menuList: ReactNode
    indicator: ReactNode
}

const DropDown = ({
    onClose,
    onOpen,
    menuList,
    open,
    indicator,
}: DropDownProps) => {
    return (
        <OutsideClickHandler onOutsideClick={onClose}>
            <div
                className="container-relative-drp-dwn"
                onClick={onOpen}
            >
                {indicator}
                <div className={`drp-dwn-menu-wrp ${open ? "open" : ""}`}>
                    <ul>
                        {menuList}
                    </ul>
                </div>
            </div>
        </OutsideClickHandler>
    )
}

export default DropDown
