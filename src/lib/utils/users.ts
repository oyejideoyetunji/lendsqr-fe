import { useMemo } from "react";
import { UserStatus, UserSumary } from "../typeDefinitions";


export const getTotalActiveUsers = (users: UserSumary[]) => users.filter(
    user => user.status === UserStatus.ACTIVE
).length

export const getTotalUsersWithLoans = (users: UserSumary[]) => users.filter(
    user => !!user.loan
).length

export const getTotalUsersWithSavings = (users: UserSumary[]) => users.filter(
    user => !!user.savings
).length

export const getUserStats = (users: UserSumary[]) => ({
    total:            users.length,
    totalActive:      getTotalActiveUsers(users),
    totalWithLoans:   getTotalUsersWithLoans(users),
    totalWithSavings: getTotalUsersWithSavings(users),
})

export const useUserStats = (users: UserSumary[]) => {
    const userStats = useMemo(
        () => getUserStats(users),
        [users]
    )

    return [userStats]
}


