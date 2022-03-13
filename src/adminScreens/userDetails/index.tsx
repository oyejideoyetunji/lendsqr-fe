import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../components/button";


const UserDetails = () => {
    return(
        <section className="page-wrp-user-details">
            <NavLink to={"/users"}>
                <section className="page-arrow-nav">
                    <i className="fas fa-long-arrow-alt-left" />
                    <span>Back to users</span>
                </section>
            </NavLink>

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
                <section className="flex-col_md-row w-100">
                    <section className="flex-col_lg-row">

                        <div className="basic-info-card">
                            <div className="avatar" />
                            <div className="txt-area">
                                <p>
                                    Grace Effiom
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
                            ₦200,000.00
                        </p>
                        <span>
                            9912345678/Providus Bank
                        </span>
                    </div>
                </section>

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
                    ["1", "2", "3", "4", "5", "6", "7"].map(itm => (
                        <section className="container-btm-boder">
                            <p className="hd-small-light">
                                PERSONAL INFORMATION
                            </p>
                            <section className="txt-grid">
                                {
                                    ["1", "2", "3", "4", "5", "6", "7"].map(itm => (
                                        <div key={itm} className="txt-area">
                                            <span>
                                                FULL NAME
                                            </span>
                                            <p>
                                                Grace Effiom
                                            </p>
                                        </div>
                                    ))
                                }
                            </section>
                        </section>
                    ))
                }
            </section>
        </section>
    )
}

export default UserDetails
