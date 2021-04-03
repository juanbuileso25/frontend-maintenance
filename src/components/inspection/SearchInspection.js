import { useEffect, useState, Fragment } from 'react';
import axios from 'axios';


const API_URL = "http://localhost:5000";




const SearchInspection = () => {
    return (

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
                            <tr>

                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td class="text-center">
                                    <a class="btn btn-warning text-center"><i class="fas fa-edit"></i></a>
                                    <a class="btn btn-danger ml-2 text-center"> <i class="fas fa-trash-alt"></i></a>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div >
        </div >

    );
}

export default SearchInspection;