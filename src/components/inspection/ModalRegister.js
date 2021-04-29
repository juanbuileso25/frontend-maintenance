import { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

import { saveInspection } from '../../services/index';
import { alertNotification } from '../../services/alerts/alert';
import InputForm from '../formComponents/Input';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const ModalRegister = ({ modal, toggle, machine }) => {

    // States for input validation
    const [typeInspection, setTypeInspection] = useState({ input: '', valid: null })
    const [observation, setObservation] = useState({ input: '', valid: null })

    const [modalValid, setModalValid] = useState(false)
    const [formValid, setFormValid] = useState(true)


    const toggleValid = () => setModalValid(!modalValid)


    const [dataForm, setDataForm] = useState({
        type_inspection: '',
        id_machine: machine.id_machine,
        date_i: new Date().toLocaleString().split(' ')[0].replace(new RegExp('/', "g"), '-'),
        observation_i: '',
        maintenance: 'Si',
        employee: 'Didier',
        state: 'A revisión'
    });

    const regularExpression = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

    const handleInputChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
        setTypeInspection({ ...typeInspection, input: e.target.value })
        setObservation({ ...observation, input: e.target.value })
        setFormValid(true)
    }

    const sendDataForm = async (e) => {
        e.preventDefault();
        if (dataForm.maintenance === 'Si') {
            dataForm.state = 'A revisión'
        } else {
            dataForm.state = 'Terminada'
        }

        if (typeInspection.valid === true && observation.valid === true) {
            const response = await saveInspection(dataForm);
            if (response.data.success === true) {
                alertNotification("Echo", "inspección guardada con exito!", "success");
            } else {
                alertNotification("Error", "No se ha guardado la inspección !", "error");
            }
            setFormValid(true)
            setTypeInspection({ input: '', valid: null })
            setObservation({ input: '', valid: null })
            toggle();
        } else {
            setFormValid(false)
        }

    }


    return (
        <>
            <div>
                <Modal isOpen={modal}>
                    <ModalHeader>REGISTRO DE INSPECCION {machine.name}</ModalHeader>
                    <ModalBody>
                        <Form>
                            <InputForm
                                state={typeInspection}
                                setState={setTypeInspection}
                                name="type_inspection"
                                label="Tipo Inspección"
                                handleInputChange={handleInputChange}
                                type="text"
                                regularExpression={regularExpression}
                            />

                            <FormGroup>
                                <Label for="date">Fecha</Label>
                                <Input
                                    type="date"
                                    name="date_i"
                                    onChange={handleInputChange}
                                />
                            </FormGroup>

                            <InputForm
                                state={observation}
                                setState={setObservation}
                                name="observation_i"
                                label="Observación"
                                handleInputChange={handleInputChange}
                                type="text"
                                regularExpression={regularExpression}
                            />

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
                        {
                            formValid === false &&
                            <div>
                                <Label className="invalid">Complete los campos correctamente
                                    <FontAwesomeIcon icon={faTimesCircle} className="ml-3 fa-fw" />
                                </Label>
                            </div>
                        }

                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={sendDataForm}>Guardar</Button>
                        <Button color="danger" onClick={() => { toggle(); setFormValid(true); setTypeInspection({ input: '', valid: null }); setObservation({ input: '', valid: null }) }}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>

            <Modal isOpen={modalValid} centered>
                <ModalBody>
                    Complete los campos correctamente
            </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggleValid}>Close</Button>
                </ModalFooter>
            </Modal>

        </>
    );
}

export default ModalRegister;