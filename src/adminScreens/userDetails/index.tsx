import React, { useEffect, useState } from "react";
import { NavLink, useMatch, useNavigate } from "react-router-dom";
import Button from "../../components/button";
import { UserDetails } from "../../lib/typeDefinitions";
import { isEmptyString } from "../../lib/validations/general";
import request from "../../requests";
import { getSingleUser } from "../../requests/endPoints";


const ViewUserDetails = () => {
    const [userLoading, setUserLoading] = useState(false)
    const [userError, setUserError] = useState("")
    const [user, setUser] = useState<UserDetails>()

    const navigate = useNavigate()
    const match = useMatch("/users/:id")

    if (!match?.params?.id) {
        navigate("/")
    }

    useEffect(() => {
        let isMounted = true

        async function fetchUsers() {
            try {
                setUserLoading(true)
                setUserError("")
                const { status, statusText, data } = await request.get(
                    getSingleUser(match?.params?.id as string)
                )


                if (!status) {
                    setUserError(statusText)
                } else if (data && !data?.status) {
                    setUserError(data?.message)
                } else if (data?.status && data?.data) {
                    setUser(data?.data)
                }
                setUserLoading(false)
            } catch (error) {
                setUserLoading(false)
                setUserError("Unable to connect to server at this time.")
            }
        }

        if (isMounted) {
            fetchUsers()
        }

        return () => { isMounted = false }
    }, [match?.params?.id])


    return(
        <section className="page-wrp-user-details">
            
            <section className="w-fit">
                <NavLink to={"/users"}>
                    <section className="page-arrow-nav">
                        <i className="fas fa-long-arrow-alt-left" />
                        <span>Back to users</span>
                    </section>
                </NavLink>
            </section>

            <section className="flex-justify-btwn-align-ctr">
                <h1 className="page-heading">
                    Users
                </h1>
                <section className="flex-justfy-end-align-ctr">
                    <Button
                        state="outlined"
                        variant="danger"
                    >
                        BLACKLIST USER
                    </Button>
                    <Button
                        state="outlined"
                        variant="primary"
                    >
                        ACTIVATE USER
                    </Button>
                </section>
            </section>

            <section className="card-full-screen">
                {
                    userLoading
                    ? (
                        <section className="w-100 flex p-18 align-center justify-center">
                            <p className="page-loader">
                                <i className="fas fa-spinner fa-spin" />
                            </p>
                        </section>
                    )
                    : !isEmptyString(userError)
                    ? (
                        <section className="w-100 flex p-18 align-center justify-center">
                            <p className="request-error">
                                {userError}
                            </p>
                        </section>
                    )
                    : (
                                <section className="flex-col_md-row w-100">
                                    <section className="flex-col_lg-row">

                                        <div className="basic-info-card">
                                            <div className="avatar" />
                                            <div className="txt-area">
                                                <p>
                                                    {user?.personal_info.full_name}
                                                </p>
                                                <span>
                                                    LSQFf587g90
                                                </span>
                                            </div>
                                        </div>

                                        <div className="border-wrp" />

                                        <div className="user-tier">
                                            <span>
                                                User Tier
                                            </span>
                                        </div>
                                    </section>

                                    <div className="border-wrp" />

                                    <div className="txt-area">
                                        <p>
                                            {user?.ed_and_emp.monthly_income.split(" ")[0]}
                                        </p>
                                        <span>
                                            {`${
                                                user?.personal_info.account_number
                                                }/${user?.personal_info.bank_name} Bank`}
                                        </span>
                                    </div>
                                </section>
                    )
                }

                <section className="plain-tab">
                    <span>
                        General Details
                    </span>
                    <span>
                        Documents
                    </span>
                    <span>
                        Bank Details
                    </span>
                    <span>
                        Loans
                    </span>
                    <span>
                        Savings
                    </span>
                    <span>
                        App and System
                    </span>
                </section>
            </section>

            <section className="card-full-screen">
                {
                    userLoading
                        ? (
                            <section className="w-100 flex p-18 align-center justify-center">
                                <p className="page-loader">
                                    <i className="fas fa-spinner fa-spin" />
                                </p>
                            </section>
                        )
                        : !isEmptyString(userError)
                            ? (
                                <section className="w-100 flex p-18 align-center justify-center">
                                    <p className="request-error">
                                        {userError}
                                    </p>
                                </section>
                            )
                            : (
                                <>
                                    <section className="container-btm-boder">
                                        <p className="hd-small-light">
                                            PERSONAL INFORMATION
                                        </p>
                                        <section className="txt-grid">
                                            <div className="txt-area">
                                                <span>
                                                    FULL NAME
                                                </span>
                                                <p>
                                                    {user?.personal_info.full_name}
                                                </p>
                                            </div>

                                            <div className="txt-area">
                                                <span>
                                                    PHONE NUMBER
                                                </span>
                                                <p>
                                                    {user?.personal_info.phone_number}
                                                </p>
                                            </div>

                                            <div className="txt-area">
                                                <span>
                                                    Email Adress
                                                </span>
                                                <p>
                                                    {user?.personal_info.email}
                                                </p>
                                            </div>

                                            <div className="txt-area">
                                                <span>
                                                    BVN
                                                </span>
                                                <p>
                                                    {user?.personal_info.bvn}
                                                </p>
                                            </div>

                                            <div className="txt-area">
                                                <span>
                                                    GENDER
                                                </span>
                                                <p>
                                                    {user?.personal_info.gender}
                                                </p>
                                            </div>

                                            <div className="txt-area">
                                                <span>
                                                    MARITAL STATUS
                                                </span>
                                                <p>
                                                    {user?.personal_info.marital_status}
                                                </p>
                                            </div>

                                            <div className="txt-area">
                                                <span>
                                                    CHILDREN
                                                </span>
                                                <p>
                                                    {user?.personal_info.children}
                                                </p>
                                            </div>

                                            <div className="txt-area">
                                                <span>
                                                    TYPE OF RESIDENCE
                                                </span>
                                                <p>
                                                    {user?.personal_info.type_of_residence}
                                                </p>
                                            </div>

                                        </section>
                                    </section>

                                    <section className="container-btm-boder">
                                        <p className="hd-small-light">
                                            Education and Employment
                                        </p>
                                        <section className="txt-grid">
                                            <div className="txt-area">
                                                <span>
                                                    LEVEL OF EDUCATION
                                                </span>
                                                <p>
                                                    {user?.ed_and_emp.level}
                                                </p>
                                            </div>

                                            <div className="txt-area">
                                                <span>
                                                    EMPLOYEMENT STATUS
                                                </span>
                                                <p>
                                                    {user?.ed_and_emp.employment_status}
                                                </p>
                                            </div>

                                            <div className="txt-area">
                                                <span>
                                                    SECTOR OF EMPLOYEMENT
                                                </span>
                                                <p>
                                                    {user?.ed_and_emp.sector_of_employment}
                                                </p>
                                            </div>

                                            <div className="txt-area">
                                                <span>
                                                    DURATION OF EMPLOYEMENT
                                                </span>
                                                <p>
                                                    {`${
                                                        user?.ed_and_emp.duration_of_experience
                                                    } years`}
                                                </p>
                                            </div>

                                            <div className="txt-area">
                                                <span>
                                                    MONTHLY INCOME
                                                </span>
                                                <p>
                                                    {user?.ed_and_emp.monthly_income}
                                                </p>
                                            </div>

                                            <div className="txt-area">
                                                <span>
                                                    LOAN REPAYMENT
                                                </span>
                                                <p>
                                                    {Number(user?.ed_and_emp.loan_repayment)
                                                    .toLocaleString()}
                                                </p>
                                            </div>
                                        </section>
                                    </section>

                                    <section className="container-btm-boder">
                                        <p className="hd-small-light">
                                            Socials
                                        </p>
                                        <section className="txt-grid">
                                            <div className="txt-area">
                                                <span>
                                                    TWITTER
                                                </span>
                                                <p>
                                                    {user?.socials.twitter}
                                                </p>
                                            </div>

                                            <div className="txt-area">
                                                <span>
                                                    FACEBOOK
                                                </span>
                                                <p>
                                                    {user?.socials.facebook}
                                                </p>
                                            </div>

                                            <div className="txt-area">
                                                <span>
                                                    INSTAGRAM
                                                </span>
                                                <p>
                                                    {user?.socials.instagram}
                                                </p>
                                            </div>
                                        </section>
                                    </section>

                                    <section className="container-btm-boder">
                                        <p className="hd-small-light">
                                            Gaurantor
                                        </p>

                                        {
                                            user?.guarantors.map(guarantor => (
                                                <section
                                                    className="container-btm-boder"
                                                    key={guarantor.email}
                                                >
                                                    <section className="txt-grid">
                                                        <div className="txt-area">
                                                            <span>
                                                                FULL NAME
                                                            </span>
                                                            <p>
                                                                {guarantor.full_name}
                                                            </p>
                                                        </div>

                                                        <div className="txt-area">
                                                            <span>
                                                                PHONE NUMBER
                                                            </span>
                                                            <p>
                                                                {guarantor.phone_number}
                                                            </p>
                                                        </div>

                                                        <div className="txt-area">
                                                            <span>
                                                                EMAIL ADDRESS
                                                            </span>
                                                            <p>
                                                                {guarantor.email}
                                                            </p>
                                                        </div>

                                                        <div className="txt-area">
                                                            <span>
                                                                RELATIONSHIP
                                                            </span>
                                                            <p>
                                                                {guarantor.relationship}
                                                            </p>
                                                        </div>
                                                    </section>
                                                </section>
                                            ))
                                        }
                                    </section>
                                </>
                            )
                }
            </section>
        </section>
    )
}

export default ViewUserDetails
