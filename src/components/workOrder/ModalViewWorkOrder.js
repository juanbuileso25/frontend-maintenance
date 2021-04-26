import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';


const ModalViewWorkOrder = ({ modalViewWO, toggleView, workOrderSelected }) => {


    return (
        <Modal isOpen={modalViewWO} size="lg" scrollable>
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
                            <Input type="text" name="date_wo" value={Object.keys(workOrderSelected).length === 0 ? '' : workOrderSelected.date_wo.split('T')[0]} />
                        </Col>
                        <Label for="zone" sm={2}>Zona</Label>
                        <Col sm={4}>
                            <Input type="text" name="zone" value={workOrderSelected.zone} />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="employee" sm={2} >Encargado</Label>
                        <Col sm={4}>
                            <Input type="text" value={workOrderSelected.employee} />
                        </Col>
                        <Label for="type_maintenance" sm={2}>Mantenimiento</Label>
                        <Col sm={4}>
                            <Input type="text" name="type_maintenance" value={workOrderSelected.type_maintenance} />
                        </Col>

                    </FormGroup>

                    <FormGroup row>
                        <Label for="inspection" sm={2}>Inspección</Label>
                        <Col sm={10}>
                            <Input type="select" name="id_inspection">
                                {/* <option>Seleccione una opcion</option>
                                {
                                    inspections.map(inspection => (
                                        <option>Inspección # {inspection.id_inspection} - {inspection.observation}</option>
                                    ))
                                } */}
                            </Input>
                        </Col>
                    </FormGroup>

                    <hr />
                    <FormGroup>
                        <Label for="">Observación</Label>
                        <Input type="textarea" name="observation" value={workOrderSelected.observation_wo} rows="2" />
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
                                <Input type="text" name="activity" value={workOrderSelected.activity} />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="estimated_time">Tiempo estimado(h)</Label>
                                <Input type="number" name="estimated_time" value={workOrderSelected.estimated_time} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="activity">Estado</Label>
                                <Input type="text" name="activity" value={workOrderSelected.state} />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="estimated_time">Tiempo Real(h)</Label>
                                <Input type="number" name="estimated_time" value={workOrderSelected.real_time} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <hr></hr>
                    <FormGroup row>
                        <Label for="date_WO" sm={2}>Fecha Terminado</Label>
                        <Col sm={4}>
                            <Input type="text" name="date_wo" value={workOrderSelected.date_complete} />
                        </Col>
                        <Label for="zone" sm={2}>Fecha Revisado</Label>
                        <Col sm={4}>
                            <Input type="text" name="zone" value={workOrderSelected.date_revision} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="date_WO" sm={2}>Fecha Aprobado</Label>
                        <Col sm={4}>
                            <Input type="text" name="date_wo" value={workOrderSelected.date_aprobbal} />
                        </Col>
                        <Label for="zone" sm={2}>Firma</Label>

                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="danger" onClick={toggleView}>Cerrar</Button>
            </ModalFooter>
        </Modal>
    );
}

export default ModalViewWorkOrder;