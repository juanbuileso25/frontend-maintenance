import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import ModalI from './ModalRegister';
import ModalWO from '../workOrder/ModalRegister';



const Machines = ({ machine, workOrder }) => {

    const [modalI, setModalI] = useState(false);
    const [modalWO, setModalWO] = useState(false);
    const toggleI = () => setModalI(!modalI);
    const toggleWO = () => setModalWO(!modalWO);



    return (
        <div className="col-sm-4 mt-4">
            <Fragment>


                <div className="card">
                    <div className="card-body">
                        <h4 className=" mt-1 mb-3 text-center">{machine.name}</h4>
                        <div className="text-center">
                            <button className="ml-4 btn btn-primary" onClick={workOrder === "workOrder" ? () => setModalWO(true) : () => setModalI(true)}>
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
            </Fragment>
        </div>





    );
}

export default Machines;
