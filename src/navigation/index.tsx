import React from "react"
import { useSelector } from "react-redux"
import { Navigate, Route, Routes } from "react-router-dom"
import UserDetails from "../adminScreens/userDetails"
import Users from "../adminScreens/users"
import AdminLayout from "../components/adminLayout"
import { isEmptyString } from "../lib/validations/general"
import Login from "../publicScreens/login"
import { StoreState } from "../store/reducers"



export function Navigation() {
    const { auth: { user } } = useSelector((state: StoreState) => state)
    return user && !isEmptyString(user.email)
        ? (
            <AdminLayout>
                <Routes>
                    <Route path="/users"  element={<Users />} />
                    <Route path="/users/:id" element={<UserDetails />} />
                    <Route path="*" element={<Navigate replace to="/users" />} />
                </Routes>
            </AdminLayout>
        )
        : (
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Navigate replace to="/login" />} />
            </Routes >
        )
}
