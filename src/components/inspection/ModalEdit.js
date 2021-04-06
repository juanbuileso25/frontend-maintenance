import { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';


const ModalEdit = ({ modal, toggle, inspectionSelected }) => {




    const [dataFormEdit, setDataFormEdit] = useState({

    })

    useEffect(() => {
        function loadModal() {
            setDataFormEdit(inspectionSelected)
        }
        loadModal();
    }, [])


    const handleInputChange = (e) => {
        setDataFormEdit({
            ...dataFormEdit,
            [e.target.name]: e.target.value
        })
    }

    // const sendDataForm = (e) => {
    //     e.preventDefault();
    //     console.log(dataFormEdit)
    //     toggle();
    // }

    return (
        <div>
            <Modal isOpen={modal}>
                <ModalHeader>EDITAR INSPECCION </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Tipo Inspección</Label>
                            <Input type="text" value={dataFormEdit.type_inspection} onChange={handleInputChange} name="type_inspection" />
                        </FormGroup>
                        {/* <FormGroup>
                            <Label for="date">Fecha</Label>
                            <Input type="date" value={date_i} name="date_i" onChange={handleInputChange} />
                        </FormGroup> */}
                        <FormGroup>
                            <Label for="examplePassword">Observación</Label>
                            <Input type="text" name="observation" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleSelect">Requiere Mantenimiento</Label>
                            <Input type="select" name="maintenance" >
                                <option>Si</option>
                                <option>No</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleSelect">Encargado</Label>
                            <Input type="select" name="employee">
                                <option>Didier</option>
                                <option>Anderson</option>
                                <option>Jose</option>
                            </Input>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" >Guardar</Button>
                    <Button color="danger" onClick={toggle} >Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalEdit;