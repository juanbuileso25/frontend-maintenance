import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faCarBattery, faFileSignature, faWrench, faUsersCog } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (


        <div className="vertical-nav sidebar">


            <h5 className="text-gray font-weight-bold text-uppercase px-1 ml-3 pb-4 mb-0 mt-5">
                <Link to="/" className="tittle-maintenance">
                    Mantenimiento <FontAwesomeIcon icon={faTools} />
                </Link>

            </h5>

            <ul className="nav flex-column mb-0 mt-4">

                <li className="nav-item">
                    <Link to="/inspection" className="nav-link text-gray active">
                        <FontAwesomeIcon icon={faCarBattery} className="mr-3 fa-fw" />
                        Inspecciones
                    </Link>
                </li>

                <li className="nav-item">
                    <a className="nav-link text-gray active">
                        <FontAwesomeIcon icon={faFileSignature} className="mr-3 fa-fw" />
                        Ordenes de trabajo
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link text-gray active">
                        <FontAwesomeIcon icon={faWrench} className="mr-3 fa-fw" />
                        Inventarios
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link text-gray active">
                        <FontAwesomeIcon icon={faUsersCog} className="mr-3 fa-fw" />
                        Requerimientos
                    </a>
                </li>

            </ul>


        </div>


    );
}

export default Sidebar;