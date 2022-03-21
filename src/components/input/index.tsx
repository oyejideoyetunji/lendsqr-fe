import React, { InputHTMLAttributes, ReactNode } from "react";
import { isEmptyString } from "../../lib/validations/general";

interface InputProps {
    label?: string;
    error?: string;
    noBorder?: boolean;
    childNode?: ReactNode;
    childNodeWidth?:  string;
    childNodeTop?:    string;
    childNodeBottom?: string
    childNodeLeft?:   string
    childNodeRight?:  string
}

const Input = (props: InputProps & InputHTMLAttributes<HTMLInputElement>) => {

    const {
        label,
        error,
        noBorder,
        childNode,
        childNodeWidth,
        childNodeTop,
        childNodeBottom,
        childNodeLeft,
        childNodeRight, 
        ...rest
    } = props 

    return (
        <div className="input-container">
            {!isEmptyString(label) && (
                <span className="label">{label}</span>
            )}
            <div className="input-wrapper">
                <div
                    className="position-wrp"
                    style={{
                        top: childNodeTop,
                        bottom: childNodeBottom,
                        left: childNodeLeft,
                        right: childNodeRight,
                    }}
                >
                    {childNode}
                </div>
                <input
                    {...rest}
                    className={
                        `${noBorder ? "no-border" : isEmptyString(error) ? "focus-border" : "error-border"}`
                    }
                    style={{
                        padding: `6px ${
                            childNodeRight ? childNodeWidth : "12px"
                        } 6px ${childNodeLeft ? childNodeWidth : "12px"}`
                    }}
                />
            </div>
            {!isEmptyString(error) && (
                <span className="error">{error}</span>
            )}
        </div>
    )
}

export default Input
