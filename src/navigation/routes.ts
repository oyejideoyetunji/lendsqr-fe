export const routes = {
    home: "/",
    login: "/login",
    users: "/users",
    singleUser: "/users/:id",
}

export const adminDashboardRoutes = {
    "customers": [
        {
            label: "Users",
            icon: "fas fa-user-friends",
            url: "/users",
        }
    ]
}

export function getUrlString(url: string) {
    const FirstIndex = 0
    return url.split(":")[FirstIndex]
}
