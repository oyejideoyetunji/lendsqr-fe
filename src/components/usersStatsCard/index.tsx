import React from "react"


export enum UsersStatsCardVariant {
    DEFAULT =   "default",
    ACTIVE =    "active",
    LOANS =     "loans",
    SAVINGS =   "savings",
}

interface UsersStatsCardProps {
    variant: UsersStatsCardVariant
    value: number
}

const UsersStatsCard = ({ value, variant }: UsersStatsCardProps) => {
    const variantMap = {
        "default": {
            title: "Users", icon: "fas fa-user-friends", style: "default"
        },
        "active":  {
            title: "Active users", icon: "fas fa-users", style: "info"
        },
        "loans":   {
            title: "Users with loans", icon: "fas fa-file-invoice-dollar", style: "warning"
        },
        "savings": {
            title: "Users with savings", icon: "fas fa-coins", style: "danger"
        },
    }

    return (
        <div className="card-wrp-users-stats">
            <div className={`small-icon ${variantMap[variant].style}`}>
                <i className={variantMap[variant].icon} />
            </div>
            <p className="title-small">
                {variantMap[variant].title}
            </p>
            <p className="big-txt">
                {Number(value).toLocaleString()}
            </p>
        </div>
    )
}

export default UsersStatsCard;
