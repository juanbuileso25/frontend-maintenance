import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

const ModalRegister = ({ modal, toggle, machine }) => {

    const [dataForm, setDataForm] = useState({
        type_inspection: '',
        id_machine: machine.id_machine,
        date: '',
        observation: '',
        maintenance: 'Si',
        employee: 'Didier'
    });

    const handleInputChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }

    const sendDataForm = (e) => {
        e.preventDefault();
        console.log(dataForm);
    }

    return (
        <div>
            <Modal isOpen={modal}>
                <ModalHeader>REGISTRO DE INSPECCION {machine.name}</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Tipo Inspección</Label>
                            <Input type="email" name="type_inspection" onChange={handleInputChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="date">Fecha</Label>
                            <Input type="date" name="date" onChange={handleInputChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Observación</Label>
                            <Input type="text" name="observation" onChange={handleInputChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleSelect">Requiere Mantenimiento</Label>
                            <Input type="select" name="maintenance" onChange={handleInputChange} >
                                <option>Si</option>
                                <option>No</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleSelect">Encargado</Label>
                            <Input type="select" name="employee" onChange={handleInputChange} >
                                <option>Didier</option>
                                <option>Anderson</option>
                                <option>Jose</option>
                            </Input>
                        </FormGroup>
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