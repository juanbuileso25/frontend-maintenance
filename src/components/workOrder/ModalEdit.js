
import { useState, useEffect } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
import { updateWorkOrder } from '../../services';
import { alertNotification } from '../../services/alerts/alert'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

import InputForm from '../formComponents/Input';

const ModalEdit = ({ modalEdit, workOrderSelected, toggleEdit, idUpdate, workOrdes, setWorkOrders }) => {

    const [observation, setObservation] = useState({})
    const [activity, setActivity] = useState({})
    const [estimatedTime, setEstimatedTime] = useState({})
    const [state, setState] = useState()
    const [formValid, setFormValid] = useState(true)

    const [dataFormEdit, setDataFormEdit] = useState({})

    useEffect(() => {
        (() => {
            setObservation({ input: workOrderSelected.observation_wo, valid: true })
            setActivity({ input: workOrderSelected.activity, valid: true })
            setEstimatedTime({ input: workOrderSelected.estimated_time, valid: true })
            setState({ input: workOrderSelected.state, valid: true })
            setDataFormEdit(workOrderSelected);
        })()
    }, [modalEdit])

    const regularExpression = {
        observation: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        activity: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        estimated_time: /^[0-9\.]{1,3}$/,
        state: /^[a-zA-ZÀ-ÿ\s]{1,40}$/
    };


    const sendDataFormUpdate = async () => {
        if (observation.valid === true && activity.valid === true && estimatedTime.valid === true && state.valid === true) {
            dataFormEdit.date_wo = dataFormEdit.date_wo.split('T')[0]

            const response = await updateWorkOrder(idUpdate, dataFormEdit);
            if (response.data.success == true) {
                const newData = workOrdes.map(work_order => work_order.id_work_order == dataFormEdit.id_work_order ? dataFormEdit : work_order);
                setWorkOrders(newData);
                alertNotification("Echo", "Orden de Trabajo modificada con exito !", "success");
            } else {
                alertNotification("Error", "No se ha modificado la order de trabajo!", "error");
            }
            setFormValid(true)
            toggleEdit();
        } else {
            setFormValid(false)
        }


    }


    const handleInputChange = (e) => {
        setDataFormEdit({
            ...dataFormEdit,
            [e.target.name]: e.target.value
        })
        setObservation({
            ...observation,
            input: e.target.value
        })
        setActivity({
            ...activity,
            input: e.target.value
        })
        setEstimatedTime({
            ...estimatedTime,
            input: e.target.value
        })
        setState({
            ...state,
            input: e.target.value
        })
        setFormValid(true)
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

                    <InputForm
                        label="Observación"
                        type="textarea"
                        handleInputChange={handleInputChange}
                        name="observation_wo"
                        state={observation}
                        setState={setObservation}
                        value={dataFormEdit.observation_wo}
                        regularExpression={regularExpression.observation}
                    />
                    <hr />
                    <FormGroup>
                        <Label for="date" className="text-center" size="sm" sm={12}>MANO DE OBRA</Label>
                    </FormGroup>
                    <hr />
                    <Row form>
                        <Col md={6}>

                            <InputForm
                                label="Actividad a realizar"
                                type="text"
                                handleInputChange={handleInputChange}
                                name="activity"
                                state={activity}
                                setState={setActivity}
                                value={dataFormEdit.activity}
                                regularExpression={regularExpression.activity}
                            />
                        </Col>
                        <Col md={6}>

                            <InputForm
                                label="Tiempo estimado(h)"
                                type="number"
                                handleInputChange={handleInputChange}
                                name="estimated_time"
                                state={estimatedTime}
                                setState={setEstimatedTime}
                                value={dataFormEdit.estimated_time}
                                regularExpression={regularExpression.estimated_time}
                            />
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={6}>

                            <InputForm
                                label="Estado"
                                type="text"
                                handleInputChange={handleInputChange}
                                name="state"
                                state={state}
                                setState={setState}
                                value={dataFormEdit.state}
                                regularExpression={regularExpression.state}
                            />
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


                    </FormGroup>
                    <FormGroup row>
                        <Label for="date_WO" sm={2}>Firma</Label>
                        <Col sm={4}>
                            <Input type="file" name="date_aprobbal" />
                        </Col>


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
                <Button color="danger" onClick={() => { toggleEdit() }}>Cerrar</Button>
            </ModalFooter>
        </Modal>
    );
}

export default ModalEdit;