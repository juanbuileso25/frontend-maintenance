import { Link } from "react-router-dom";

const Sidebar = () => {
    return (


        <div className="vertical-nav sidebar">


            <h5 className="text-gray font-weight-bold text-uppercase px-1 ml-3 pb-4 mb-0 mt-5">
                <Link to="/">
                    Mantenimiento <i className="fas fa-tools"></i>
                </Link>

            </h5>

            <ul className="nav flex-column mb-0 mt-4">

                <li className="nav-item">
                    <Link to="/inspection" className="nav-link text-gray active">
                        <i className="fas fa-car-battery mr-3 text-primary fa-fw"></i>
                        Inspecciones
                    </Link>
                </li>

                <li className="nav-item">
                    <a className="nav-link text-gray active">
                        <i className="fas fa-file-signature mr-3 text-primary fa-fw"></i>
                        Ordenes de trabajo
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link text-gray active">
                        <i className="fas fa-wrench mr-3 text-primary fa-fw"></i>
                        Inventarios
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link text-gray active">
                        <i className="fas fa-users-cog mr-3 text-primary fa-fw"></i>
                        Requerimientos
                    </a>
                </li>

            </ul>


        </div>


    );
}

export default Sidebar;