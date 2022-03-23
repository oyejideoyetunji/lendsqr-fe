import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../components/pagination";
import UsersStatsCard, { UsersStatsCardVariant } from "../../components/usersStatsCard";
import UsersTable from "../../components/usersTable";
import UsersTableFilter from "../../components/usersTableFilter";
import { UserSumary } from "../../lib/typeDefinitions";
import { getPageEndIndex, getPageStartIndex, usePageItems } from "../../lib/utils/pagination";
import { useUserStats } from "../../lib/utils/users";
import { isEmptyString } from "../../lib/validations/general";
import request from "../../requests";
import { getUsers } from "../../requests/endPoints";
import { StoreState } from "../../store/reducers";
import { setUsers } from "../../store/reducers/usersReducer";


const Users = () => {
    const dispatch = useDispatch()
    const [usersLoading, setUsersLoading] = useState(false)
    const [usersError, setUsersError] = useState("")
    const [showFilterForm, setShowFilterForm] = useState(false)

    const {
        users: { users, filteredUser },
        pagination: { pageSize, currentPageIndex }
    } = useSelector((state: StoreState) => state)

    useEffect(() => {
        let isMounted = true

        async function fetchUsers() {
            try {
                setUsersLoading(true)
                setUsersError("")
                const { status, statusText, data } = await request.get(getUsers)


                if (!status) {
                    setUsersError(statusText)
                } else if (data && !data?.status) {
                    setUsersError(data?.message)
                } else if (data?.status && data?.data) {
                    dispatch(setUsers(data?.data))
                }
                setUsersLoading(false)
            } catch (error) {
                setUsersLoading(false)
                setUsersError("Unable to connect to server at this time.")
            }
        }

        if (isMounted) {
            fetchUsers()
        }

        return () => { isMounted = false }
    }, [dispatch])

    const [userStats] = useUserStats(users)

    const [pageItems] = usePageItems<UserSumary>({
        startIndex: getPageStartIndex({ pageSize, currentPageIndex }),
        endIndex: getPageEndIndex({ pageSize, currentPageIndex }),
        list: filteredUser
    })

    return (
        <section className="page-wrp-users">
            <h1 className="page-heading">
                Users
            </h1>

            <section className="auto-grid-stats">
                <UsersStatsCard
                    variant={UsersStatsCardVariant.DEFAULT}
                    value={userStats.total}
                />
                <UsersStatsCard
                    variant={UsersStatsCardVariant.ACTIVE}
                    value={userStats.totalActive}
                />
                <UsersStatsCard
                    variant={UsersStatsCardVariant.LOANS}
                    value={userStats.totalWithLoans}
                />
                <UsersStatsCard
                    variant={UsersStatsCardVariant.SAVINGS}
                    value={userStats.totalWithSavings}
                />
            </section>

            <section className="card-users-table">
                <section
                    className={`container-fiter-form ${showFilterForm && "open"}`}>
                    <div
                        className="w-fit self-align-end close-icon p-12"
                        onClick={onCloseFilterForm}
                    >
                        <i className="fas fa-times" />
                    </div>
                    <UsersTableFilter />
                </section>
                {
                    usersLoading
                    ? (
                        <section className="w-100 flex p-18 align-center justify-center">
                            <p className="page-loader">
                                <i className="fas fa-spinner fa-spin" />
                            </p>
                        </section>
                    )
                    : !isEmptyString(usersError)
                    ? (
                        <section className="w-100 flex p-18 align-center justify-center">
                            <p className="request-error">
                                {usersError}
                            </p>
                        </section>
                    )
                    : <UsersTable onShowFilterForm={onShowFilterForm} users={pageItems} />
                }
            </section>
            <Pagination />
        </section>
    )

    function onShowFilterForm() {
        setShowFilterForm(true)
    }
    function onCloseFilterForm() {
        setShowFilterForm(false)
    }

}

export default Users
