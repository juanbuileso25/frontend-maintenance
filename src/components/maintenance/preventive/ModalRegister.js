import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';


const ModalRegister = ({ modalP, toggle, machine }) => {
    return (
        <>
            <div>
                <Modal isOpen={modalP}>
                    <ModalHeader>REGISTRO DE MANTENIMIENTO PREVENTIVO</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="date">Fecha</Label>
                                <Input
                                    type="date"
                                    name="date_c"
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label for="description">Equipo</Label>
                                <Input
                                    type="text"
                                    name="equipament"
                                    required
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label for="date">Fecha ultima revisión</Label>
                                <Input
                                    type="date"
                                    name="date_revision"
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label for="date">Fecha programada</Label>
                                <Input
                                    type="date"
                                    name="date_program"
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label for="description">Actividades programadas</Label>
                                <Input
                                    type="text"
                                    name="activity_c"
                                    required
                                />
                            </FormGroup>




                            {/* <FormGroup>
                                <Label for="exampleSelect">Requiere Mantenimiento</Label>
                                <Input type="select" name="maintenance" required  >
                                    <option>Si</option>
                                    <option>No</option>
                                </Input>
                            </FormGroup> */}


                        </Form>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary">Guardar</Button>
                        <Button color="danger" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        </>
    );
}

export default ModalRegister;