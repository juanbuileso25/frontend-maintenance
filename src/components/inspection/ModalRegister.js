import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

import { saveInspection } from '../../services/index';
import { alertNotification } from '../../services/alerts/alert';


const ModalRegister = ({ modal, toggle, machine }) => {


    const [dataForm, setDataForm] = useState({
        type_inspection: '',
        id_machine: machine.id_machine,
        date_i: '',
        observation_i: '',
        maintenance: 'Si',
        employee: 'Didier',
        state: 'A revisión'
    });

    const handleInputChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }

    const sendDataForm = async (e) => {
        e.preventDefault();
        if (dataForm.maintenance === 'Si') {
            dataForm.state = 'A revisión'
        } else {
            dataForm.state = 'Terminada'
        }

        const response = await saveInspection(dataForm);
        if (response.data.success === true) {
            alertNotification("Echo", "inspección guardada con exito!", "success");
        } else {
            alertNotification("Error", "No se ha guardado la inspección !", "error");
        }
        toggle();
    }


    return (
        <div>
            <Modal isOpen={modal}>
                <ModalHeader>REGISTRO DE INSPECCION {machine.name}</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Tipo Inspección</Label>
                            <Input type="email" name="type_inspection" required onChange={handleInputChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="date">Fecha</Label>
                            <Input type="date" name="date_i" required onChange={handleInputChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Observación</Label>
                            <Input type="text" name="observation_i" required onChange={handleInputChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleSelect">Requiere Mantenimiento</Label>
                            <Input type="select" name="maintenance" required onChange={handleInputChange} >
                                <option>Si</option>
                                <option>No</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleSelect">Encargado</Label>
                            <Input type="select" name="employee" required onChange={handleInputChange} >
                                <option>Didier</option>
                                <option>Anderson</option>
                                <option>Jose</option>
                            </Input>
                        </FormGroup>
                        {/* <FormGroup>
                            <Label for="exampleSelect">Estado</Label>
                            <Input name="state" type="text" value={dataForm.maintenance == "Si" ? "En revisión" : "Verificada"} onChange={handleInputChange} />
                        </FormGroup> */}
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={sendDataForm}>Guardar</Button>
                    <Button color="danger" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalRegister;