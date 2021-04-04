import { useEffect, useState, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { getInspection } from '../../services/index';


const SearchInspection = () => {

    const [inspections, setInspections] = useState([])

    const { id } = useParams()

    useEffect(() => {
        async function loadInspections() {
            const response = await getInspection(id);

            if (response.status === 200) {
                setInspections(response.data.value);
            }
        }
        loadInspections();
    }, []);

    return (
        <Fragment>
            <div class="col-md-12 mt-4">
                <div class="card">
                    <div class="card-body">

                        <div class="d-md-flex align-items-center">
                            <div>
                                <h4 class="card-title">Inspecciones a máquina</h4>

                            </div>
                            <div class="ml-auto">
                                <div class="dl">
                                    <select class="custom-select">
                                        <option value="0" selected="">Mensual</option>
                                        <option value="1">Diario</option>
                                        <option value="2">Semanal</option>
                                        <option value="3">Anual</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="table-responsive">
                        <table class="table v-middle">
                            <thead>
                                <tr class="bg-light">

                                    <th class="border-top-0">Tipo</th>
                                    <th class="border-top-0">Fecha</th>
                                    <th class="border-top-0">Hora</th>
                                    <th class="border-top-0">Observación</th>
                                    <th class="border-top-0">Requiere O.T</th>
                                    <th class="border-top-0">Encargado</th>
                                    <th class="border-top-0">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    inspections.map(inspection => (
                                        <tr>
                                            <td>{inspection.type_inspection}</td>
                                            <td>{inspection.date_i}</td>
                                            <td>{inspection.time_i}</td>
                                            <td>{inspection.observation}</td>
                                            <td>{inspection.maintenance}</td>
                                            <td>{inspection.employee}</td>
                                            <td class="text-center">
                                                <a class="btn btn-warning text-center"><FontAwesomeIcon icon={faEdit} /></a>
                                                <a class="btn btn-danger ml-2 text-center"><FontAwesomeIcon icon={faTrashAlt} /></a>
                                            </td>
                                        </tr>
                                    ))
                                }


                            </tbody>
                        </table>
                    </div>
                </div >
            </div >
        </Fragment>


    );
}

export default SearchInspection;