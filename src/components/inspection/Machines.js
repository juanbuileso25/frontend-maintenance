import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import ModalI from './ModalRegister';



const Machines = ({ machine }) => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);



    return (
        <div className="col-sm-4 mt-4">
            <Fragment>


                <div className="card">
                    <div className="card-body">
                        <h4 className=" mt-1 mb-3 text-center">{machine.name}</h4>
                        <div className="text-center">
                            <button className="ml-4 btn btn-primary" onClick={() => setModal(true)}>
                                <i className="fas fa-plus-circle mr-1"></i>
                                    Registrar
                            </button>

                            <Link to={`/search-inspection/${machine.id_machine}`} className="ml-2 btn btn-success">
                                <i className="fas fa-search mr-1"></i>
                                    Consultar
                            </Link>
                        </div>
                    </div>
                </div>



                <ModalI
                    modal={modal}
                    toggle={toggle}
                    machine={machine}
                />
            </Fragment>
        </div>





    );
}

export default Machines;
