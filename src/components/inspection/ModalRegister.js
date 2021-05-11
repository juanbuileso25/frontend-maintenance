
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';



import { useFormRegister } from '../../hooks/inspections/useFormRegister';

const ModalRegister = ({ modal, toggle, machine }) => {


    const dataForm = {
        type_inspection: {
            val: '',
            msg: '',
            error: false
        },
        id_machine: {
            val: machine.id_machine,
            msg: '',
            error: false
        },
        date_i: {
            val: new Date().toLocaleString().split(' ')[0].replace(new RegExp('/', "g"), '-'),
            msg: '',
            error: false
        },
        observation_i: {
            val: '',
            msg: '',
            error: false
        },
        maintenance: {
            val: 'Si',
            msg: '',
            error: false
        },
        employee: {
            val: 'Didier',
            msg: '',
            error: false
        },
        state: {
            val: 'A revisión',
            msg: '',
            error: false
        }
    }

    const regularExpression = /[a-zA-Z]$/;

    const validationForm = (form, setForm) => {
        let errors = false;
        const copyForm = { ...form };
        if (form.type_inspection.val === '') {
            copyForm.type_inspection.msg = "El campo tipo inspecciòn es requerido";
            copyForm.type_inspection.error = true;
            errors = true;
        }

        if (form.observation_i.val === '') {
            copyForm.observation_i.msg = "El campo observación es requerido";
            copyForm.observation_i.error = true;
            errors = true;
        }
        setForm(copyForm);
        return errors;
    }

    const { form, handleChange, handleSubmit } = useFormRegister(dataForm, validationForm, toggle)

    return (
        <>
            <div>
                <Modal isOpen={modal}>
                    <ModalHeader>REGISTRO DE INSPECCION {machine.name}</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="type_inspection">Tipo Inspección</Label>
                                <Input
                                    className={form.type_inspection.error && "is-invalid"}
                                    type="text"
                                    name="type_inspection"
                                    onChange={handleChange}

                                    value={form.type_inspection.val}
                                    required
                                />
                                {form.type_inspection.error && <p className="mt-2 invalid-input">{form.type_inspection.msg}</p>}
                            </FormGroup>



                            <FormGroup>
                                <Label for="date">Fecha</Label>
                                <Input
                                    type="date"
                                    name="date_i"
                                    onChange={handleChange}
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label for="observation_i">Observación</Label>
                                <Input
                                    className={form.observation_i.error && "is-invalid"}
                                    type="text"
                                    name="observation_i"
                                    onChange={handleChange}

                                    value={form.observation_i.val}
                                    required
                                />
                                {form.observation_i.error && <p className="mt-2 invalid-input">{form.observation_i.msg}</p>}
                            </FormGroup>


                            <FormGroup>
                                <Label for="exampleSelect">Requiere Mantenimiento</Label>
                                <Input type="select" name="maintenance" required onChange={handleChange} >
                                    <option>Si</option>
                                    <option>No</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleSelect">Encargado</Label>
                                <Input type="select" name="employee" required onChange={handleChange} >
                                    <option>Didier</option>
                                    <option>Anderson</option>
                                    <option>Jose</option>
                                </Input>
                            </FormGroup>

                        </Form>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={handleSubmit}>Guardar</Button>
                        <Button color="danger" onClick={() => { toggle(); }}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>

        </>
    );
}

export default ModalRegister;