export interface Action<T, K> {
    type: T
    payload: K
}

export interface AuthUser {
    email: string
}

export interface LoginInput {
    email: string;
    password: string;
}

export enum UserStatus {
    INACTIVE = "inactive",
    ACTIVE = "active",
    PENDING = "pending",
    BLACKLISTED = "blacklisted",
}

export interface UserSumary {
    id: string
    user_name: string
    email: string
    phone_number: string
    organization: string
    status: UserStatus
    date_joined: string
    loan: number
    savings: number
}

export interface UserDetails {
    id: string
    user_name: string
    email: string
    phone_number: string
    organization: string
    status: string
    date_joined: string
    personal_info: {
        full_name: string,
        email: string
        phone_number: string
        gender: string
        bvn: string
        marital_status: "single" | "married"
        children: "none" | "yes",
        type_of_residence: string
    }
    ed_and_emp: {
        level: "SSCE" | "OND/NCE" | "HND/HNCE" | "B.Sc" | "M.Sc" | "Phd",
        employment_status: "unemployed" | "selfemployed" | "employed",
        sector_of_employment: string,
        duration_of_experience: number,
        office_email: string,
        monthly_income: string,
        loan_repayment: number
    }
    socials: {
        instagram: string
        twitter: string
        facebook: string
    }
    guarantors: {
        full_name: string,
        phone_number: string,
        email: string,
        elationship: string
    }[]
}
