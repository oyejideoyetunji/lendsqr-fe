import React, { SelectHTMLAttributes } from "react";

export interface SelectProps {
    label?: string
}

const Select = (props: SelectProps & SelectHTMLAttributes<HTMLSelectElement>) => {
    const { label, ...rest } = props
    return (
        <div className="select-container">
            <select {...rest} />
        </div>
    )
}

export default Select
