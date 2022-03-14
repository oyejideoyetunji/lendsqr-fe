import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { getUrlString, routes } from "../../navigation/routes"
import DropDown from "../dropdown"
import Tag, { TagVariant } from "../tag"


const UsersTable = () => {
    const [dropDownToShow, setDropDownToShow] = useState("");

    return (
        <table className="table-users">
            <thead>
                <tr>
                    <th>
                        <span>ORGANIZATION</span>
                        <span>
                            <i className="fas fa-filter" />
                        </span>
                    </th>
                    <th>
                        <span>USERNAME</span>
                        <span>
                            <i className="fas fa-filter" />
                        </span>
                    </th>
                    <th>
                        <span>EMAIL</span>
                        <span>
                            <i className="fas fa-filter" />
                        </span>
                    </th>
                    <th>
                        <span>PHONE NUMBER</span>
                        <span>
                            <i className="fas fa-filter" />
                        </span>
                    </th>
                    <th>
                        <span>DATE JOINED</span>
                        <span>
                            <i className="fas fa-filter" />
                        </span>
                    </th>
                    <th>
                        <span>STATUS</span>
                        <span>
                            <i className="fas fa-filter" />
                        </span>
                    </th>
                    <th />
                </tr>
            </thead>
            <tbody>
                {
                    ["1", "2", "3", "4", "5"].map(itm => (
                        <tr key={itm}>
                            <td><span>Lensqr</span></td>
                            <td><span>usernamehere</span></td>
                            <td><span>mail@mail.com</span></td>
                            <td><span>0902424424242</span></td>
                            <td><span>{new Date().toDateString()}</span></td>
                            <td>
                                <Tag variant={TagVariant.SUCCESS}>
                                    Inactive
                                </Tag>
                            </td>
                            <td>
                                <DropDown
                                    indicator={
                                        <span>
                                            <i className="fas fa-ellipsis-h" />
                                        </span>
                                    }
                                    open={dropDownToShow === itm}
                                    onClose={() => setDropDownToShow("")}
                                    onOpen={() => setDropDownToShow(itm)}
                                    menuList={
                                        <>
                                            <NavLink to={`${getUrlString(routes.singleUser)}${itm}`}>
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
                }
            </tbody>
        </table>
    )

}

export default UsersTable
