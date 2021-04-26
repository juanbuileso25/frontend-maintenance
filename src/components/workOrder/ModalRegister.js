import { useState, useEffect } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';

import { getInspection } from '../../services/index';
import { saveWorkOrder } from '../../services/index';
import { alertNotification } from '../../services/alerts/alert';


const ModalRegister = ({ modalWO, toggle, machine }) => {

    const [inspections, setInspections] = useState([]);

    const [dataForm, setDataForm] = useState({
        id_inspection: 0,
        date_wo: '',
        department_req: 'Mantenimiento',
        person_req: 'Didier',
        zone: 'Soplado',
        employee: 'Didier',
        type_maintenance: 'Preventivo',
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

    const handleInputChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }

    const sendDataForm = async (e) => {
        dataForm.id_inspection = parseInt(dataForm.id_inspection.split(' ')[2])
        e.preventDefault();


        const response = await saveWorkOrder(dataForm);
        if (response.data.success == true) {
            alertNotification("Echo", "Orden de trabajo guardada con exito!", "success");
        } else {
            alertNotification("Error", "No se ha guardado la orden de trabajo !", "error");
        }
        toggle();
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
                            <Input type="date" name="date_wo" onChange={handleInputChange} />
                        </Col>
                        <Label for="zone" sm={2}>Zona</Label>
                        <Col sm={4}>
                            <Input type="select" name="zone" onChange={handleInputChange}>
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
                            <Input type="select" name="employee" onChange={handleInputChange}>
                                <option>Didier</option>
                                <option>Anderson</option>
                                <option>Jose</option>
                            </Input>
                        </Col>
                        <Label for="type_maintenance" sm={2}>Mantenimiento</Label>
                        <Col sm={4}>
                            <Input type="select" name="type_maintenance" onChange={handleInputChange}>
                                <option>Preventivo</option>
                                <option>Correctivo</option>
                            </Input>
                        </Col>

                    </FormGroup>

                    <FormGroup row>
                        <Label for="inspection" sm={2}>Inspección</Label>
                        <Col sm={10}>
                            <Input type="select" name="id_inspection" onChange={handleInputChange}>
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
                        <Input type="textarea" name="observation_wo" placeholder="Observación" rows="3" onChange={handleInputChange} />
                    </FormGroup>
                    <hr />
                    <FormGroup>
                        <Label for="date" className="text-center" size="sm" sm={12}>MANO DE OBRA</Label>
                    </FormGroup>
                    <hr />
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="activity">Actividad a realizar</Label>
                                <Input type="text" name="activity" onChange={handleInputChange} />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="estimated_time">Tiempo estimado(h)</Label>
                                <Input type="number" name="estimated_time" onChange={handleInputChange} />
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={sendDataForm}>Guardar</Button>
                <Button color="danger" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
}

export default ModalRegister;