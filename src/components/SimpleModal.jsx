import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const SimpleModal = props => {
    const { title, text, modal, toggle } = props

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>{title}</ModalHeader>
            <ModalBody>
                {text}
            </ModalBody>
            <ModalFooter>
                <Button color="success" onClick={toggle}>Ok</Button>
            </ModalFooter>
        </Modal>
    );
};

Modal.propTypes = {

};

export default SimpleModal;