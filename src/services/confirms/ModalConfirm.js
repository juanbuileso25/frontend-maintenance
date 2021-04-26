import { Label, Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap"

const ModalConfirm = () => {
    return (
        <Modal size="lg" scrollable>
            <ModalHeader>
                <Label>Eliminar registro</Label>
            </ModalHeader>
            <ModalBody>
                <Label>¿Desea eliminar este registro?</Label>
            </ModalBody>
            <ModalFooter>
                <Button color="primary">Eliminar</Button>
                <Button color="danger">Cancel</Button>
            </ModalFooter>
        </Modal>
    );
}

export default ModalConfirm;