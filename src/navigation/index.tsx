import React from "react"
import { useSelector } from "react-redux"
import { Navigate, Route, Routes } from "react-router-dom"
import ViewUserDetails from "../adminScreens/userDetails"
import Users from "../adminScreens/users"
import AdminLayout from "../components/adminLayout"
import { isEmptyString } from "../lib/validations/general"
import Login from "../publicScreens/login"
import { StoreState } from "../store/reducers"
import { routes } from "./routes"



export function Navigation() {
    const { auth: { user } } = useSelector((state: StoreState) => state)
    return user && !isEmptyString(user.email)
        ? (
            <AdminLayout>
                <Routes>
                    <Route path={routes.users}  element={<Users />} />
                    <Route path={routes.singleUser} element={<ViewUserDetails />} />
                    <Route path="*" element={<Navigate replace to={routes.users} />} />
                </Routes>
            </AdminLayout>
        )
        : (
            <Routes>
                <Route path={routes.login} element={<Login />} />
                <Route path="*" element={<Navigate replace to={routes.login} />} />
            </Routes >
        )
}
