import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';


const ModalRegister = ({ modalC, toggle, machine }) => {
    return (
        <>
            <div>
                <Modal isOpen={modalC}>
                    <ModalHeader>REGISTRO DE MANTENIMIENTO CORRECTIVO</ModalHeader>
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
                                <Label for="description">Descripción</Label>
                                <Input
                                    type="text"
                                    name="description"
                                    required
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label for="description">¿Cómo se corrigió?</Label>
                                <Input
                                    type="text"
                                    name="correction"
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