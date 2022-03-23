import React, { ChangeEvent, SyntheticEvent, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/button";
import Input from "../../components/input";
import Select from "../../components/select";
import { isEmptyString } from "../../lib/validations/general";
import { StoreState } from "../../store/reducers";
import { setFilteredUsers } from "../../store/reducers/usersReducer";

const statusOptions = [
    "",
    "inactive",
    "active",
    "pending",
    "blacklisted",
]

const UsersTableFilter = () => {
    const dispcth = useDispatch()

    const [formFields, setFormFields] = useState({
        organization: "",
        username: "",
        email: "",
        date: "",
        phoneNumber: "",
        status: "",
    })

    const {
        users: { users },
    } = useSelector((state: StoreState) => state)

    return (
        <form
            className="w-100 container-users-table-filter"
            onSubmit={onFormSubmit}
        >
            <section className="w-100 p-12">
                <Input
                    label="Organization"
                    placeholder="Organization"
                    name="organization"
                    value={formFields.organization}
                    onChange={onFormFieldsChange}
                />
            </section>

            <section className="w-100 p-12">
                <Input
                    label="Username"
                    placeholder="user"
                    name="username"
                    value={formFields.username}
                    onChange={onFormFieldsChange}
                />
            </section>

            <section className="w-100 p-12">
                <Input
                    label="Email"
                    placeholder="Email"
                    name="email"
                    value={formFields.email}
                    onChange={onFormFieldsChange}
                />
            </section>

            <section className="w-100 p-12">
                <Input
                    type="date"
                    label="Date"
                    placeholder="Date"
                    name="date"
                    value={formFields.date}
                    onChange={onFormFieldsChange}
                />
            </section>

            <section className="w-100 p-12">
                <Input
                    type="tel"
                    label="Phone Number"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    value={formFields.phoneNumber}
                    onChange={onFormFieldsChange}
                />
            </section>

            <section className="w-100 p-12">
                <Select
                    label="Status"
                    placeholder="Select"
                    name="status"
                    value={formFields.status}
                    onChange={onFormFieldsChange}
                >
                    {
                        statusOptions.map(itm => (
                            <option key={itm} value={itm}>
                                {itm.toUpperCase()}
                            </option>
                        ))
                    }
                </Select>
            </section>

            <section className="w-100 p-12 flex align-center justify-around">
                <Button
                    className="w-40"
                    state="outlined" variant="primary"
                    type="button"
                    onClick={onFormReset}
                >
                    Reset
                </Button>
                <Button
                    className="w-40"
                    type="submit"
                >
                    Filter
                </Button>
            </section>
        </form>
    )

    function onFormFieldsChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const {value, name} = event.target

        setFormFields({
            ...formFields,
            [name]: value.trim()
        })
    }

    function onFormReset() {
        setFormFields({
            organization: "",
            username: "",
            email: "",
            date: "",
            phoneNumber: "",
            status: "",
        })

        dispcth(setFilteredUsers(users))
    }

    function onFormSubmit(event: SyntheticEvent) {
        event.preventDefault()

        dispcth(setFilteredUsers(users.filter(
            user => (
                (
                    user.email.toLowerCase().includes(formFields.email.trim().toLowerCase())
                    && user.user_name.toLowerCase().includes(formFields.username.trim().toLowerCase())
                    && user.phone_number.toLowerCase().includes(formFields.phoneNumber.trim().toLowerCase())
                    && user.organization.toLowerCase().includes(formFields.organization.trim().toLowerCase())
                    && user.status.toLowerCase().includes(formFields.status.trim().toLowerCase())
                )
                && (
                    isEmptyString(formFields.date)
                    || new Date(user.date_joined).toDateString() === new Date(formFields.date).toDateString()
                )
            )
        )))
    }
}

export default UsersTableFilter
