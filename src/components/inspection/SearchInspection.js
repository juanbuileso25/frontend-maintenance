import { useEffect, useState, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';


import { getInspection, updateInspection } from '../../services/index';
import ModalEdit from './ModalEdit';


const SearchInspection = () => {

    const [modal, setModal] = useState(false);
    const [inspections, setInspections] = useState([])
    const [inspectionSelected, setInspectionSelected] = useState({})


    const toggle = () => setModal(!modal);
    const idUpdate = inspectionSelected.id_inspection;
    const { id } = useParams()

    const sendDataFormUpdate = async () => {
        inspectionSelected.date_i = inspectionSelected.date_i.split('T')[0]
        await updateInspection(idUpdate, inspectionSelected);
        toggle();
    }

    useEffect(() => {
        async function loadInspections() {
            const response = await getInspection(id);

            if (response.status === 200) {
                setInspections(response.data.value);
            }
        }
        loadInspections();
    });

    const handleInputChange = (e) => {
        setInspectionSelected({
            ...inspectionSelected,
            [e.target.name]: e.target.value
        })
    }




    return (
        <Fragment>

            {/* <ModalEdit
                modal={modal}
                toggle={toggle}
                inspectionSelected={inspectionSelected}
            /> */}
            <div className="col-md-12 mt-4">
                <div className="card">
                    <div className="card-body">

                        <div className="d-md-flex align-items-center">
                            <div>
                                <h4 className="card-title">Inspecciones a máquina</h4>

                            </div>
                            <div className="ml-auto">
                                <div className="dl">
                                    <select className="custom-select">
                                        <option value="0" selected="">Mensual</option>
                                        <option value="1">Diario</option>
                                        <option value="2">Semanal</option>
                                        <option value="3">Anual</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="table-responsive">
                        <table className="table v-middle">
                            <thead>
                                <tr className="bg-light">

                                    <th className="border-top-0">Tipo</th>
                                    <th className="border-top-0">Fecha</th>
                                    <th className="border-top-0">Hora</th>
                                    <th className="border-top-0">Observación</th>
                                    <th className="border-top-0">Requiere O.T</th>
                                    <th className="border-top-0">Encargado</th>
                                    <th className="border-top-0">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    inspections.map(inspection => (
                                        <tr>
                                            <td>{inspection.type_inspection}</td>
                                            <td>{inspection.date_i.split('T')[0]}</td>
                                            <td>{inspection.time_i}</td>
                                            <td>{inspection.observation}</td>
                                            <td>{inspection.maintenance}</td>
                                            <td>{inspection.employee}</td>
                                            <td className="text-center">
                                                <a className="btn btn-warning text-center" onClick={() => { setModal(true); setInspectionSelected(inspection); }}><FontAwesomeIcon icon={faEdit} /></a>
                                                <a className="btn btn-danger ml-2 text-center"><FontAwesomeIcon icon={faTrashAlt} /></a>
                                            </td>
                                        </tr>
                                    ))
                                }


                            </tbody>
                        </table>
                    </div>
                </div >
            </div >


            <Modal isOpen={modal}>
                <ModalHeader>EDITAR INSPECCION </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Tipo Inspección</Label>
                            <Input type="text" value={inspectionSelected.type_inspection} onChange={handleInputChange} name="type_inspection" />
                        </FormGroup>
                        {/* <FormGroup>
                            <Label for="date">Fecha</Label>
                            <Input type="date" value={date_i} name="date_i" onChange={handleInputChange} />
                        </FormGroup> */}
                        <FormGroup>
                            <Label for="examplePassword">Observación</Label>
                            <Input type="text" name="observation" value={inspectionSelected.observation} onChange={handleInputChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleSelect">Requiere Mantenimiento</Label>
                            <Input type="select" name="maintenance" value={inspectionSelected.maintenance} onChange={handleInputChange}>
                                <option>Si</option>
                                <option>No</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleSelect">Encargado</Label>
                            <Input type="select" name="employee" value={inspectionSelected.employee} onChange={handleInputChange}>
                                <option>Didier</option>
                                <option>Anderson</option>
                                <option>Jose</option>
                            </Input>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={sendDataFormUpdate}>Guardar</Button>
                    <Button color="danger" onClick={toggle} >Cancel</Button>
                </ModalFooter>
            </Modal>

        </Fragment>


    );
}

export default SearchInspection;