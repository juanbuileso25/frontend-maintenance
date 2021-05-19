import { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

import { updateInspection } from '../../services/index';
import { alertNotification } from '../../services/alerts/alert';

const ModalEdit = ({ modal, toggle, inspectionSelected, inspections, setInspections, idUpdate }) => {

    const [dataFormEdit, setDataFormEdit] = useState({})
    const [errors, setErrors] = useState({
        type_inspection: {
            msg: '',
            error: false
        },
        observation_i: {
            msg: '',
            error: false
        }
    })

    useEffect(() => {
        (() => {
            setDataFormEdit(inspectionSelected);
            console.log(dataFormEdit)
        })()
    }, [modal])


    const handleChange = (e) => {
        const { name, value } = e.target;
        setDataFormEdit({
            ...dataFormEdit,
            [name]: value
        })
        setErrors({
            ...errors,
            [name]: {
                msg: '',
                error: false
            }
        })
    }

    const validateForm = (dataFormEdit, errors, setErrors) => {

        let error = false;
        const copyForm = { ...errors };
        if (dataFormEdit.type_inspection === '') {
            copyForm.type_inspection.msg = "El campo tipo inspecciòn es requerido";
            copyForm.type_inspection.error = true;
            error = true;
        }

        if (dataFormEdit.observation_i === '') {
            copyForm.observation_i.msg = "El campo observación es requerido";
            copyForm.observation_i.error = true;
            error = true;
        }
        setErrors(copyForm);
        return error;

    }

    const sendDataFormUpdate = async (e) => {
        e.preventDefault();

        if (!validateForm(dataFormEdit, errors, setErrors)) {
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




    }

    // const { form, handleChange, handleSubmit } = useFormEdit(dataFormEdit, validateForm, toggle);

    return (
        <div>
            <Modal isOpen={modal}>
                <ModalHeader>EDITAR INSPECCION </ModalHeader>
                <ModalBody>
                    <Form>

                        <FormGroup>
                            <Label for="type_inspection">Tipo Inspección</Label>
                            <Input
                                className={errors.type_inspection.error && "is-invalid"}
                                type="text"
                                name="type_inspection"
                                onChange={handleChange}

                                value={dataFormEdit.type_inspection}
                                required
                            />
                            {errors.type_inspection.error && <p className="mt-2 invalid-input">{errors.type_inspection.msg}</p>}
                        </FormGroup>


                        <FormGroup>
                            <Label for="observation_i">Observación</Label>
                            <Input
                                className={errors.observation_i.error && "is-invalid"}
                                type="text"
                                name="observation_i"
                                onChange={handleChange}
                                value={dataFormEdit.observation_i}
                                required
                            />
                            {errors.observation_i.error && <p className="mt-2 invalid-input">{errors.observation_i.msg}</p>}
                        </FormGroup>


                        <FormGroup>
                            <Label for="exampleSelect">Requiere Mantenimiento</Label>
                            <Input type="select" name="maintenance" value={dataFormEdit.maintenance} onChange={handleChange}>
                                <option>Si</option>
                                <option>No</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleSelect">Encargado</Label>
                            <Input type="select" name="employee" value={dataFormEdit.employee} onChange={handleChange}>
                                <option>Didier</option>
                                <option>Anderson</option>
                                <option>Jose</option>
                            </Input>
                        </FormGroup>
                    </Form>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={sendDataFormUpdate}>Guardar</Button>
                    <Button color="danger" onClick={() => { toggle(); }} >Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalEdit;