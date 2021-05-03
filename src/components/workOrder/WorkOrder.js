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

                <h2 className="text-center">ORDENES DE TRABAJO</h2>
                <h3>SOPLADORAS</h3>
                {
                    machines.filter(machine => machine.id_type_machine === 1).map(machine => (
                        <Machines
                            key={machine.id_machine}
                            machine={machine}
                            workOrder="workOrder"
                        />
                    ))
                }


                <h3>INYECTORAS</h3>
                {
                    machines.filter(machine => machine.id_type_machine === 2).map(machine => (
                        <Machines
                            key={machine.id_machine}
                            machine={machine}
                            workOrder="workOrder"
                        />
                    ))
                }


                <h3>FRESADORAS</h3>
                {
                    machines.filter(machine => machine.id_type_machine === 3).map(machine => (
                        <Machines
                            key={machine.id_machine}
                            machine={machine}
                            workOrder="workOrder"
                        />
                    ))
                }


                <h3>TORNOS</h3>
                {
                    machines.filter(machine => machine.id_type_machine === 4).map(machine => (
                        <Machines
                            key={machine.id_machine}
                            machine={machine}
                            workOrder="workOrder"
                        />
                    ))
                }

                <h3>MOLINOS</h3>
                {
                    machines.filter(machine => machine.id_type_machine === 5).map(machine => (
                        <Machines
                            key={machine.id_machine}
                            machine={machine}
                            workOrder="workOrder"
                        />
                    ))
                }

                <h3>TOLVAS</h3>
                {
                    machines.filter(machine => machine.id_type_machine === 6).map(machine => (
                        <Machines
                            key={machine.id_machine}
                            machine={machine}
                            workOrder="workOrder"
                        />
                    ))
                }

                <h3>DESHUMIFICADOR</h3>
                {
                    machines.filter(machine => machine.id_type_machine === 7).map(machine => (
                        <Machines
                            key={machine.id_machine}
                            machine={machine}
                            workOrder="workOrder"
                        />
                    ))
                }

                <h3>SECADORES</h3>
                {
                    machines.filter(machine => machine.id_type_machine === 8 || machine.id_type_machine === 9).map(machine => (
                        <Machines
                            key={machine.id_machine}
                            machine={machine}
                            workOrder="workOrder"
                        />
                    ))
                }

                <h3>COMPRESORES</h3>
                {
                    machines.filter(machine => machine.id_type_machine === 10 || machine.id_type_machine === 11).map(machine => (
                        <Machines
                            key={machine.id_machine}
                            machine={machine}
                            workOrder="workOrder"
                        />
                    ))
                }

                <h3>TORRES DE ENFRIAMIENTO</h3>
                {
                    machines.filter(machine => machine.id_type_machine === 12).map(machine => (
                        <Machines
                            key={machine.id_machine}
                            machine={machine}
                            workOrder="workOrder"
                        />
                    ))
                }

                <h3>CHILLERS</h3>
                {
                    machines.filter(machine => machine.id_type_machine === 13).map(machine => (
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