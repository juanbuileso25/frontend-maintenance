import { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import ModalViewWorkOrder from './ModalViewWorkOrder';
import { getWorkOrder } from '../../services/index';


const SearchWorkOrder = () => {

    const { id } = useParams()


    const [workOrdes, setWorkOrders] = useState([])
    const [workOrderSelected, setWorkOrderSelected] = useState({})
    const [modalViewWO, setModalViewWO] = useState(false)



    const toggle = () => setModalViewWO(!modalViewWO);


    useEffect(() => {
        (async () => {
            const responseWO = await getWorkOrder(id);
            if (responseWO.status === 200) {
                setWorkOrders(responseWO.data.value);
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
                                <h4 className="card-title">Ordenes de Trabajo</h4>

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
                                    <th className="border-top-0">Fecha</th>
                                    <th className="border-top-0">Zona</th>
                                    <th className="border-top-0">Mantenimiento</th>
                                    <th className="border-top-0">Observación</th>
                                    <th className="border-top-0">Estado</th>
                                    <th className="border-top-0">Encargado</th>
                                    <th className="border-top-0">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    workOrdes.map(work_order => (

                                        <tr className="tr-work">

                                            <td onClick={() => { setModalViewWO(true); setWorkOrderSelected(work_order) }}>{work_order.date_wo.split('T')[0]}</td>
                                            <td onClick={() => { setModalViewWO(true); setWorkOrderSelected(work_order) }}>{work_order.zone}</td>
                                            <td onClick={() => { setModalViewWO(true); setWorkOrderSelected(work_order) }}>{work_order.type_maintenance}</td>
                                            <td onClick={() => { setModalViewWO(true); setWorkOrderSelected(work_order) }}>{work_order.observation_wo}</td>
                                            <td onClick={() => { setModalViewWO(true); setWorkOrderSelected(work_order) }}>{work_order.state}</td>
                                            <td onClick={() => { setModalViewWO(true); setWorkOrderSelected(work_order) }}>{work_order.employee}</td>
                                            <td className="text-center">
                                                <a className="btn btn-warning text-center" onClick={() => { alert("Eliminar") }}><FontAwesomeIcon icon={faEdit} /></a>
                                                <a className="btn btn-danger ml-2 text-center" ><FontAwesomeIcon icon={faTrashAlt} /></a>
                                            </td>

                                        </tr>

                                    ))
                                }


                            </tbody>
                        </table>
                    </div>
                </div >
            </div >
            {/* <ModalEdit
                modal={modal}
                toggle={toggle}
                inspections={inspections}
                setInspections={setInspections}
                inspectionSelected={inspectionSelected}
                setInspectionSelected={setInspectionSelected}
                idUpdate={idUpdate}
            /> */}

            <ModalViewWorkOrder
                modalViewWO={modalViewWO}
                toggle={toggle}
                workOrderSelected={workOrderSelected}
            />
        </Fragment>
    );
}

export default SearchWorkOrder;