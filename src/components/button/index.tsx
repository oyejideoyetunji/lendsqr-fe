import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps {
    state?: string
    variant?: string
}

const Button = (props: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {

    const { state, variant, ...rest } = props

    return (
        <button
            {...rest}
            className="base-button primary filled"
        >
        </button>
    )
}

export default Button
