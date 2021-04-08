import { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { updateInspection } from '../../services/index';
import { alertNotification } from '../../services/alerts/alert';

const ModalEdit = ({ modal, toggle, inspectionSelected, inspections, setInspections, idUpdate }) => {

    const [dataFormEdit, setDataFormEdit] = useState({})

    useEffect(() => {
        (() => {
            setDataFormEdit(inspectionSelected);
        })()
    }, [modal])

    const sendDataFormUpdate = async () => {
        inspectionSelected.date_i = inspectionSelected.date_i.split('T')[0]

        const response = await updateInspection(idUpdate, dataFormEdit);
        if (response.data.success == true) {
            const newData = inspections.map(inspection => inspection.id_inspection == dataFormEdit.id_inspection ? dataFormEdit : inspection);
            setInspections(newData);
            alertNotification("Echo", "Inspeccion modificada con exito !", "success");
        } else {
            alertNotification("Error", "No se ha modificado la inspección!", "error");
        }
        toggle();
    }

    const handleInputChange = (e) => {
        setDataFormEdit({
            ...dataFormEdit,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <Modal isOpen={modal}>
                <ModalHeader>EDITAR INSPECCION </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Tipo Inspección</Label>
                            <Input type="text" value={dataFormEdit.type_inspection} onChange={handleInputChange} name="type_inspection" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Observación</Label>
                            <Input type="text" name="observation" value={dataFormEdit.observation} onChange={handleInputChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleSelect">Requiere Mantenimiento</Label>
                            <Input type="select" name="maintenance" value={dataFormEdit.maintenance} onChange={handleInputChange}>
                                <option>Si</option>
                                <option>No</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleSelect">Encargado</Label>
                            <Input type="select" name="employee" value={dataFormEdit.employee} onChange={handleInputChange}>
                                <option>Didier</option>
                                <option>Anderson</option>
                                <option>Jose</option>
                            </Input>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={sendDataFormUpdate}>Guardar</Button>
                    <Button color="danger" onClick={toggle} >Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalEdit;