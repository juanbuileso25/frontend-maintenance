import { useState, useEffect, Fragment } from "react";
import { getMachines } from "../../services/index";


import Machines from './Machines';


const Inspection = () => {

    const [machines, setMachines] = useState([]);


    useEffect(() => {
        async function loadMachines() {
            const response = await getMachines();

            if (response.status === 200) {
                setMachines(response.data.value);
            }
        }
        loadMachines();
    }, []);


    return (

        <Fragment>
            <div className="row">

                <h2 className="text-center">INSPECCIONES</h2>

                {
                    machines.map(machine => (
                        <Machines
                            key={machine.id_machine}
                            machine={machine}
                        />
                    ))
                }

            </div>


        </Fragment>
    );
}

export default Inspection;