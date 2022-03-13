import React from "react";
import UsersStatsCard, { UsersStatsCardVariant } from "../../components/usersStatsCard";
import UsersTable from "../../components/usersTable";


const Users = () => {
    return (
        <section className="page-wrp-users">
            <h1 className="page-heading">
                Users
            </h1>

            <section className="auto-grid-stats">
                <UsersStatsCard
                    variant={UsersStatsCardVariant.DEFAULT}
                    value={2453}
                />
                <UsersStatsCard
                    variant={UsersStatsCardVariant.ACTIVE}
                    value={2453}
                />
                <UsersStatsCard
                    variant={UsersStatsCardVariant.LOANS}
                    value={2453}
                />
                <UsersStatsCard
                    variant={UsersStatsCardVariant.SAVINGS}
                    value={2453}
                />
            </section>

            <section className="card-users-table">
                <UsersTable />
            </section>
        </section>
    )
}

export default Users
