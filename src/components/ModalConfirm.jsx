import React from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

const ModalConfirm = ({ title, text, modal, toggle, confirm, select }) => {
    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>{title}</ModalHeader>
            <ModalBody>
                {text}
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={toggle}>Cancelar</Button>
                <Button color="success" onClick={() => confirm(select)}>Si</Button>
            </ModalFooter>
        </Modal>
    )
}

export default ModalConfirm