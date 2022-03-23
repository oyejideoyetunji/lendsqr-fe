import React, { SelectHTMLAttributes } from "react";
import { isEmptyString } from "../../lib/validations/general";

export interface SelectProps {
    label?: string
    error?: string;
}

const Select = (props: SelectProps & SelectHTMLAttributes<HTMLSelectElement>) => {
    const { label, error, ...rest } = props
    return (
        <div className="select-container">
            {!isEmptyString(label) && (
                <span className="label">{label}</span>
            )}
            <select {...rest} />
            {!isEmptyString(error) && (
                <span className="error">{error}</span>
            )}
        </div>
    )
}

export default Select
