import React, { InputHTMLAttributes } from "react";
import { isEmptyString } from "../../lib/validations/general";

interface InputProps {
    label?: string;
    error?: string;
    noBorder?: boolean;
}

const Input = (props: InputProps & InputHTMLAttributes<HTMLInputElement>) => {

    const { label, error, noBorder, ...rest } = props 

    return (
        <div className="input-wrapper">
            {!isEmptyString(label) && (
                <span className="label">{label}</span>
            )}
            <div className="input-wrapper">
                <input
                    {...rest}
                    className={
                        `${noBorder ? "no-border" : isEmptyString(error) ? "focus-border" : "error-border"}`
                    }
                />
            </div>
            {!isEmptyString(error) && (
                <span className="error">{error}</span>
            )}
        </div>
    )
}

export default Input
