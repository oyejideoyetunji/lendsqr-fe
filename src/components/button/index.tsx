import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps {
    state?: "filled" | "outlined"
    variant?: "primary" | "danger"
}

const Button = (props: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {

    const { state, variant, className, ...rest } = props

    return (
        <button
            {...rest}
            className={
                `base-button ${state || "filled"} ${variant || "primary"} ${className}`
            }
        >
        </button>
    )
}

export default Button
