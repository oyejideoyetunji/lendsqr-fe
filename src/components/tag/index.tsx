import React, { ReactNode } from "react";


export enum TagVariant {
    BASE = "base",
    SUCCESS = "success",
    WARNING = "warning",
    DANGER = "danger",
}

interface TagProps {
    children: ReactNode
    variant?: TagVariant
}

const Tag = ({ children, variant }: TagProps) => {
    return (
        <div className={`tag ${variant || TagVariant.BASE}`}>
            {children}
        </div>
    )
}

export default Tag
