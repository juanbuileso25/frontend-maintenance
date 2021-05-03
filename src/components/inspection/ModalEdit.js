import { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

import { updateInspection } from '../../services/index';
import { alertNotification } from '../../services/alerts/alert';
import InputForm from '../formComponents/Input';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const ModalEdit = ({ modal, toggle, inspectionSelected, inspections, setInspections, idUpdate }) => {

    const [dataFormEdit, setDataFormEdit] = useState({})

    const [typeInspection, setTypeInspection] = useState({})
    const [observation, setObservation] = useState({})
    const [formValid, setFormValid] = useState(true)

    console.log(typeInspection)

    useEffect(() => {
        (() => {
            setDataFormEdit(inspectionSelected);
            setTypeInspection({ input: inspectionSelected.type_inspection, valid: true })
            setObservation({ input: inspectionSelected.observation_i, valid: true })
        })()
    }, [modal])

    const regularExpression = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

    const sendDataFormUpdate = async () => {

        if (typeInspection.valid === true && observation.valid === true) {
            inspectionSelected.date_i = inspectionSelected.date_i.split('T')[0]

            const response = await updateInspection(idUpdate, dataFormEdit);
            if (response.data.success == true) {
                const newData = inspections.map(inspection => inspection.id_inspection == dataFormEdit.id_inspection ? dataFormEdit : inspection);
                setInspections(newData);
                alertNotification("Echo", "Inspeccion modificada con exito !", "success");
            } else {
                alertNotification("Error", "No se ha modificado la inspección!", "error");
            }
            setFormValid(true)
            setTypeInspection({ input: '', valid: null })
            setObservation({ input: '', valid: null })
            toggle();
        } else {
            setFormValid(false)
        }

    }

    const handleInputChange = (e) => {
        setDataFormEdit({
            ...dataFormEdit,
            [e.target.name]: e.target.value
        })
        setTypeInspection({ ...typeInspection, input: e.target.value })
        setObservation({ ...observation, input: e.target.value })
        setFormValid(true)
    }

    return (
        <div>
            <Modal isOpen={modal}>
                <ModalHeader>EDITAR INSPECCION </ModalHeader>
                <ModalBody>
                    <Form>

                        <InputForm
                            label="Tipo Inspección"
                            type="text"
                            handleInputChange={handleInputChange}
                            name="type_inspection"
                            state={typeInspection}
                            setState={setTypeInspection}
                            value={dataFormEdit.type_inspection}
                            regularExpression={regularExpression}
                        />

                        <InputForm
                            label="Observación"
                            type="text"
                            handleInputChange={handleInputChange}
                            name="observation_i"
                            state={observation}
                            setState={setObservation}
                            value={dataFormEdit.observation_i}
                            regularExpression={regularExpression}
                        />

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
                    <Button color="primary" onClick={sendDataFormUpdate}>Guardar</Button>
                    <Button color="danger" onClick={() => { toggle(); setFormValid(true); setTypeInspection({ input: '', valid: null }); setObservation({ input: '', valid: null }) }} >Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalEdit;