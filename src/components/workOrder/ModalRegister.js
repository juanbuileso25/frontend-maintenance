import { useState, useEffect } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';

import { getInspection, saveWorkOrder, updateStateInspection } from '../../services/index';
import { alertNotification } from '../../services/alerts/alert';


const ModalRegister = ({ modalWO, toggle, machine }) => {

    const [inspections, setInspections] = useState([]);
    const [errors, setErrors] = useState({
        observation_wo: {
            msg: '',
            error: false
        },
        activity: {
            msg: '',
            error: false
        },
        estimated_time: {
            msg: '',
            error: false
        }
    });

    const [dataForm, setDataForm] = useState({
        id_inspection: 0,
        date_wo: '',
        department_req: 'Mantenimiento',
        person_req: 'Didier',
        zone: 'Soplado',
        employee: 'Didier',
        type_maintenance: 'Preventivo',
        observation_wo: '',
        activity: '',
        estimated_time: ''
    });


    useEffect(() => {
        (async () => {
            const response = await getInspection(machine.id_machine);
            if (response.status === 200) {
                let inspect = response.data.value;
                let newInspectios = inspect.filter(inspection => inspection.state === 'A revisión');
                setInspections(newInspectios);
            }
        })()
    }, [modalWO]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDataForm({
            ...dataForm,
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

    const validateForm = (dataForm, errors, setErrors) => {

        let error = false;
        const copyForm = { ...errors };
        if (dataForm.observation_wo === '') {
            copyForm.observation_wo.msg = "El campo observación es requerido";
            copyForm.observation_wo.error = true;
            error = true;
        }

        if (dataForm.activity === '') {
            copyForm.activity.msg = "El campo actividad es requerido";
            copyForm.activity.error = true;
            error = true;
        }

        if (dataForm.estimated_time === '') {
            copyForm.estimated_time.msg = "El campo tiempo estimado es requerido";
            copyForm.estimated_time.error = true;
            error = true;
        }
        setErrors(copyForm);
        return error;

    }

    const sendDataForm = async (e) => {

        e.preventDefault();

        if (!validateForm(dataForm, errors, setErrors)) {
            dataForm.id_inspection = parseInt(dataForm.id_inspection.split(' ')[2])
            const response = await saveWorkOrder(dataForm);
            await updateStateInspection(dataForm.id_inspection)
            if (response.data.success == true) {
                alertNotification("Echo", "Orden de trabajo guardada con exito!", "success");
            } else {
                alertNotification("Error", "No se ha guardado la orden de trabajo !", "error");
            }

            toggle();
        }

    }

    return (
        <Modal isOpen={modalWO} size="lg" scrollable>
            <ModalHeader>
                <FormGroup className="headerNorma">
                    <img sm={6} src="imgs/logo.JPG" />
                    <img className="imgNorma" src="imgs/Normal.JPG" />
                </FormGroup>
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup row>
                        <Label for="date_WO" sm={2}>Fecha</Label>
                        <Col sm={4}>
                            <Input type="date" name="date_wo" onChange={handleChange} />
                        </Col>
                        <Label for="zone" sm={2}>Zona</Label>
                        <Col sm={4}>
                            <Input type="select" name="zone" onChange={handleChange}>
                                <option>Soplado</option>
                                <option>Inyección</option>
                                <option>Taller</option>
                                <option>Torres</option>
                                <option>Compresores</option>
                            </Input>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="employee" sm={2} >Encargado</Label>
                        <Col sm={4}>
                            <Input type="select" name="employee" onChange={handleChange}>
                                <option>Didier</option>
                                <option>Anderson</option>
                                <option>Jose</option>
                            </Input>
                        </Col>
                        <Label for="type_maintenance" sm={2}>Mantenimiento</Label>
                        <Col sm={4}>
                            <Input type="select" name="type_maintenance" onChange={handleChange}>
                                <option>Preventivo</option>
                                <option>Correctivo</option>
                            </Input>
                        </Col>

                    </FormGroup>

                    <FormGroup row>
                        <Label for="inspection" sm={2}>Inspección</Label>
                        <Col sm={10}>
                            <Input type="select" name="id_inspection" onChange={handleChange}>
                                <option>Seleccione una opcion</option>
                                {
                                    inspections.map(inspection => (
                                        <option>Inspección # {inspection.id_inspection} - {inspection.observation_i}</option>
                                    ))
                                }
                            </Input>
                        </Col>
                    </FormGroup>

                    <hr />
                    <FormGroup>
                        <Label for="observation_wo">Observación</Label>
                        <Input
                            className={errors.observation_wo.error && "is-invalid"}
                            type="text"
                            name="observation_wo"
                            onChange={handleChange}
                            value={dataForm.observation_wo}
                            required
                        />
                        {errors.observation_wo.error && <p className="mt-2 invalid-input">{errors.observation_wo.msg}</p>}


                    </FormGroup>
                    <hr />
                    <FormGroup>
                        <Label for="date" className="text-center" size="sm" sm={12}>MANO DE OBRA</Label>
                    </FormGroup>
                    <hr />
                    <Row form>
                        <Col md={6}>

                            <Label for="activity">Actividad</Label>
                            <Input
                                className={errors.activity.error && "is-invalid"}
                                type="text"
                                name="activity"
                                onChange={handleChange}
                                value={dataForm.activity}
                                required
                            />
                            {errors.activity.error && <p className="mt-2 invalid-input">{errors.activity.msg}</p>}
                        </Col>
                        <Col md={6}>

                            <Label for="activity">Tiempo estimado</Label>
                            <Input
                                className={errors.estimated_time.error && "is-invalid"}
                                type="text"
                                name="estimated_time"
                                onChange={handleChange}
                                value={dataForm.estimated_time}
                                required
                            />
                            {errors.estimated_time.error && <p className="mt-2 invalid-input">{errors.estimated_time.msg}</p>}




                        </Col>
                    </Row>
                </Form>

            </ModalBody>

            <ModalFooter>
                <Button color="primary" onClick={sendDataForm}>Guardar</Button>
                <Button color="danger" onClick={() => { toggle() }}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
}

export default ModalRegister;