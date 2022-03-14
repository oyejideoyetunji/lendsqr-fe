import React, { MouseEvent, ReactNode } from "react";

interface ModalProps {
    handleCloseModal?(): void;
    children: ReactNode;
    showModal: boolean;
    className?: string;
}

const Modal = (props: ModalProps) => {
    return (
        <section
            onClick={onCloseModal}
            className={
                `container-modal ${props.className} ${props.showModal ? "show" : ""}`
            }
        >
            {props.children}
        </section>
    )

    function onCloseModal(event: MouseEvent<HTMLElement>) {
        if (event.target === event.currentTarget) {
            if (props.handleCloseModal) { props.handleCloseModal() }
        }
    }
}

export default Modal
