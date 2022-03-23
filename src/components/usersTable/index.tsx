import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { UserSumary } from "../../lib/typeDefinitions"
import { getUrlString, routes } from "../../navigation/routes"
import DropDown from "../dropdown"
import Tag, { TagVariant } from "../tag"

interface UsersTableProps {
    users: UserSumary[]
    onShowFilterForm(): void
}

const UsersTable = (props: UsersTableProps) => {
    const [dropDownToShow, setDropDownToShow] = useState("");
    const statusToVariantMap = {
        "inactive": "base",
        "active": "success",
        "pending": "warning",
        "blacklisted": "danger",
    }

    return (
        <table className="table-users">
            <thead>
                <tr>
                    <th>
                        <span>ORGANIZATION</span>
                        <span
                            onClick={props.onShowFilterForm}
                        >
                            <i className="fas fa-filter" />
                        </span>
                    </th>
                    <th>
                        <span>USERNAME</span>
                        <span
                            onClick={props.onShowFilterForm}
                        >
                            <i className="fas fa-filter" />
                        </span>
                    </th>
                    <th>
                        <span>EMAIL</span>
                        <span
                            onClick={props.onShowFilterForm}
                        >
                            <i className="fas fa-filter" />
                        </span>
                    </th>
                    <th>
                        <span>PHONE NUMBER</span>
                        <span
                            onClick={props.onShowFilterForm}
                        >
                            <i className="fas fa-filter" />
                        </span>
                    </th>
                    <th>
                        <span>DATE JOINED</span>
                        <span
                            onClick={props.onShowFilterForm}
                        >
                            <i className="fas fa-filter" />
                        </span>
                    </th>
                    <th>
                        <span>STATUS</span>
                        <span
                            onClick={props.onShowFilterForm}
                        >
                            <i className="fas fa-filter" />
                        </span>
                    </th>
                    <th />
                </tr>
            </thead>
            <tbody>
                {
                    props.users.length
                    ? props.users.map(itm => (
                        <tr key={itm.id}>
                            <td><span>{itm.organization}</span></td>
                            <td><span>{itm.user_name}</span></td>
                            <td><span>{itm.email}</span></td>
                            <td><span>{itm.phone_number}</span></td>
                            <td><span>{new Date(itm.date_joined).toDateString()}</span></td>
                            <td>
                                <Tag variant={statusToVariantMap[itm.status] as TagVariant}>
                                    {itm.status}
                                </Tag>
                            </td>
                            <td>
                                <DropDown
                                    indicator={
                                        <span>
                                            <i className="fas fa-ellipsis-h" />
                                        </span>
                                    }
                                    open={dropDownToShow === itm.id}
                                    onClose={() => setDropDownToShow("")}
                                    onOpen={() => setDropDownToShow(itm.id)}
                                    menuList={
                                        <>
                                            <NavLink to={`${getUrlString(routes.singleUser)}${itm.id}`}>
                                                <li>
                                                    <span className="drp-dwn-list-itm">
                                                        <i className="fas fa-eye"/>
                                                    </span>
                                                    <span className="drp-dwn-list-itm">
                                                        View Details
                                                    </span>
                                                </li>
                                            </NavLink>
                                            <li>
                                                <span className="drp-dwn-list-itm">
                                                    <i className="fas fa-user-times" />
                                                </span>
                                                <span className="drp-dwn-list-itm">
                                                    Blacklist User
                                                </span>
                                            </li>
                                            <li>
                                                <span className="drp-dwn-list-itm">
                                                    <i className="fas fa-user-check" />
                                                </span>
                                                <span className="drp-dwn-list-itm">
                                                    Activate User
                                                </span>
                                            </li>
                                        </>
                                    }
                                />
                            </td>
                        </tr>
                    ))
                    : (
                        <tr>
                            <td className="error-cell" colSpan={7}>
                                <p className="empty-response">
                                    Oops! No results found.
                                </p>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )

}

export default UsersTable
