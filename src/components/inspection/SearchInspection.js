import { useEffect, useState, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button, Label } from 'reactstrap'


import { getInspection, deleteInspection } from '../../services/index';
import { alertNotification } from '../../services/alerts/alert'
import ModalEdit from './ModalEdit';


const SearchInspection = () => {

    const [modal, setModal] = useState(false);
    const [inspections, setInspections] = useState([])
    const [inspectionSelected, setInspectionSelected] = useState({})
    const [modalConfirm, setModalConfirm] = useState(false)
    const [idDelete, setIdDelete] = useState(0)


    const toggle = () => setModal(!modal);
    const toggleConfirm = () => setModalConfirm(!modalConfirm);
    const idUpdate = inspectionSelected.id_inspection;
    const { id } = useParams()


    const deleteI = async () => {
        const response = await deleteInspection(idDelete);
        if (response.data.success == true) {
            const newState = inspections.filter(inspection => inspection.id_inspection !== idDelete);
            setInspections(newState);
            alertNotification("Echo", "El registro se ha eliminado con exito!", "success")
        } else {
            alertNotification("Error", "El registro no se ha eliminado con exito!", "error")
        }
        toggleConfirm()
    }

    useEffect(() => {
        (async () => {
            const response = await getInspection(id);
            if (response.status === 200) {
                setInspections(response.data.value);
            }
        })()
    }, []);



    return (
        <Fragment>

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
                                            <td>{inspection.observation_i}</td>
                                            <td>{inspection.maintenance}</td>
                                            <td>{inspection.employee}</td>
                                            <td className="text-center">
                                                <a className="btn btn-warning text-center" onClick={() => { setModal(true); setInspectionSelected(inspection); }}><FontAwesomeIcon icon={faEdit} /></a>
                                                <a className="btn btn-danger ml-2 text-center" onClick={() => { setModalConfirm(true); setIdDelete(inspection.id_inspection) }} ><FontAwesomeIcon icon={faTrashAlt} /></a>
                                            </td>
                                        </tr>
                                    ))
                                }


                            </tbody>
                        </table>
                    </div>
                </div >
            </div >
            <ModalEdit
                modal={modal}
                toggle={toggle}
                inspections={inspections}
                setInspections={setInspections}
                inspectionSelected={inspectionSelected}
                setInspectionSelected={setInspectionSelected}
                idUpdate={idUpdate}
            />

            <Modal isOpen={modalConfirm}>
                <ModalHeader>
                    <Label>Eliminar registro</Label>
                </ModalHeader>
                <ModalBody>
                    <Label>¿Desea eliminar este registro?</Label>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={deleteI}>Eliminar</Button>
                    <Button color="danger" onClick={toggleConfirm}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </Fragment>


    );
}

export default SearchInspection;