import React from "react"
import { useSelector } from "react-redux"
import { Navigate, Route, Routes } from "react-router-dom"
import { isEmptyString } from "../lib/utils/validation"
import Login from "../publicScreens/login"
import { StoreState } from "../store/reducers"



export function Navigation() {
    const { auth: { user } } = useSelector((state: StoreState) => state)
    return user && !isEmptyString(user.email)
        ? (
            <>Public</>
        )
        : (
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Navigate replace to="/login" />} />
            </Routes >
        )
}
