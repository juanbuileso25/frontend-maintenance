import { Fragment, useState, useEffect } from 'react';
import { getMachines } from "../../services/index";


import Machines from '../inspection/Machines';

const WorkOrder = () => {

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

                {
                    machines.map(machine => (
                        <Machines
                            key={machine.id_machine}
                            machine={machine}
                            workOrder="workOrder"
                        />
                    ))
                }

            </div>



        </Fragment>
    );
}

export default WorkOrder;