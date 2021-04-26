
import { useState, useEffect } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
import { updateWorkOrder } from '../../services';
import { alertNotification } from '../../services/alerts/alert'


const ModalEdit = ({ modalEdit, workOrderSelected, toggleEdit, idUpdate, workOrdes, setWorkOrders }) => {

    const [dataFormEdit, setDataFormEdit] = useState({})

    useEffect(() => {
        (() => {
            setDataFormEdit(workOrderSelected);
        })()
    }, [modalEdit])


    const sendDataFormUpdate = async () => {
        console.log(dataFormEdit)
        dataFormEdit.date_wo = dataFormEdit.date_wo.split('T')[0]

        const response = await updateWorkOrder(idUpdate, dataFormEdit);
        if (response.data.success == true) {
            const newData = workOrdes.map(work_order => work_order.id_work_order == dataFormEdit.id_work_order ? dataFormEdit : work_order);
            setWorkOrders(newData);
            alertNotification("Echo", "Orden de Trabajo modificada con exito !", "success");
        } else {
            alertNotification("Error", "No se ha modificado la order de trabajo!", "error");
        }
        toggleEdit();
    }


    const handleInputChange = (e) => {
        setDataFormEdit({
            ...dataFormEdit,
            [e.target.name]: e.target.value
        })
    }



    return (
        <Modal isOpen={modalEdit} size="lg" scrollable>
            <ModalHeader>
                <FormGroup className="headerNorma">
                    <img sm={6} src="/imgs/logo.JPG" />
                    <img className="imgNorma" src="/imgs/Normal.JPG" />
                </FormGroup>
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup row>
                        <Label for="date_WO" sm={2}>Fecha</Label>
                        <Col sm={4}>
                            <Input type="date" name="date_wo" value={Object.keys(workOrderSelected).length === 0 ? '' : workOrderSelected.date_wo.split('T')[0]} onChange={handleInputChange} />
                        </Col>
                        <Label for="zone" sm={2}>Zona</Label>
                        <Col sm={4}>
                            <Input type="select" name="zone" value={dataFormEdit.zone} onChange={handleInputChange} >
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
                            <Input type="select" name="employee" value={dataFormEdit.employee} onChange={handleInputChange} >
                                <option>Didier</option>
                                <option>Anderson</option>
                                <option>Jose</option>
                            </Input>
                        </Col>
                        <Label for="type_maintenance" sm={2}>Mantenimiento</Label>
                        <Col sm={4}>
                            <Input type="select" name="type_maintenance" value={dataFormEdit.type_maintenance} onChange={handleInputChange} >
                                <option>Preventivo</option>
                                <option>Correctivo</option>
                            </Input>
                        </Col>

                    </FormGroup>

                    {/* <FormGroup row>
                        <Label for="inspection" sm={2}>Inspección</Label>
                        <Col sm={10}>
                            <Input type="select" name="id_inspection">
                                { <option>Seleccione una opcion</option>
                                {
                                    inspections.map(inspection => (
                                        <option>Inspección # {inspection.id_inspection} - {inspection.observation}</option>
                                    ))
                                }
                            </Input>
                        </Col>
                    </FormGroup> */}

                    <hr />
                    <FormGroup>
                        <Label for="">Observación</Label>
                        <Input type="textarea" name="observation_wo" value={dataFormEdit.observation_wo} rows="2" onChange={handleInputChange} />
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
                                <Input type="text" name="activity" value={dataFormEdit.activity} onChange={handleInputChange} />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="estimated_time">Tiempo estimado(h)</Label>
                                <Input type="number" name="estimated_time" value={dataFormEdit.estimated_time} onChange={handleInputChange} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="activity">Estado</Label>
                                <Input type="text" name="state" value={dataFormEdit.state} onChange={handleInputChange} />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="estimated_time">Tiempo Real(h)</Label>
                                <Input type="number" name="real_time" value={dataFormEdit.real_time} onChange={handleInputChange} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <hr></hr>
                    <FormGroup row>
                        <Label for="date_WO" sm={2}>Fecha Terminado</Label>
                        <Col sm={4}>
                            <Input type="date" name="date_complete" value={dataFormEdit.date_complete} onChange={handleInputChange} />
                        </Col>
                        <Label for="zone" sm={2}>Fecha Revisado</Label>
                        <Col sm={4}>
                            <Input type="date" name="date_revision" value={dataFormEdit.date_revision} onChange={handleInputChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="date_WO" sm={2}>Fecha Aprobado</Label>
                        <Col sm={4}>
                            <Input type="date" name="date_aprobbal" value={dataFormEdit.date_aprobbal} onChange={handleInputChange} />
                        </Col>
                        <Label for="zone" sm={2}>Firma</Label>

                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={sendDataFormUpdate}>Guardar</Button>
                <Button color="danger" onClick={toggleEdit}>Cerrar</Button>
            </ModalFooter>
        </Modal>
    );
}

export default ModalEdit;