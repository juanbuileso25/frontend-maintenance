import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import ModalI from './ModalRegister';
import ModalWO from '../workOrder/ModalRegister';
import ModalC from '../maintenance/corrective/ModalRegister';
import ModalP from '../maintenance/preventive/ModalRegister';


const Machines = ({ machine, workOrder, corrective, preventive }) => {

    const [modalI, setModalI] = useState(false);
    const [modalWO, setModalWO] = useState(false);
    const [modalC, setModalC] = useState(false);
    const [modalP, setModalP] = useState(false)

    const toggleI = () => setModalI(!modalI);
    const toggleWO = () => setModalWO(!modalWO);
    const toggleC = () => setModalC(!modalC)
    const toggleP = () => setModalP(!modalP)

    console.log(modalC)
    return (
        <div className="col-sm-4 mt-4">
            <Fragment>


                <div className="card">
                    <div className="card-body">
                        <h4 className=" mt-1 mb-3 text-center">{machine.name}</h4>
                        <div className="text-center">
                            <button className="ml-4 btn btn-primary" onClick={corrective === "corrective" ? () => setModalC(true) : workOrder === "workOrder" ? () => setModalWO(true) : preventive === "preventive" ? () => setModalP(true) : () => setModalI(true)}>
                                <i className="fas fa-plus-circle mr-1"></i>
                                    Registrar
                            </button>

                            <Link to={workOrder === "workOrder" ? `/search-work-order/${machine.id_machine}` : `/search-inspection/${machine.id_machine}`} className="ml-2 btn btn-success">
                                <i className="fas fa-search mr-1"></i>
                                    Consultar
                            </Link>
                        </div>
                    </div>
                </div>



                <ModalI
                    modal={modalI}
                    toggle={toggleI}
                    machine={machine}
                />

                <ModalWO
                    modalWO={modalWO}
                    toggle={toggleWO}
                    machine={machine}
                />

                <ModalC
                    modalC={modalC}
                    toggle={toggleC}
                    machine={machine}
                />

                <ModalP
                    modalP={modalP}
                    toggle={toggleP}
                    machine={machine}
                />
            </Fragment>
        </div>





    );
}

export default Machines;
