
import { useState, useEffect, Fragment } from "react";
import { UncontrolledCollapse, Button } from "reactstrap";
import { getMachines } from "../../services/index";


import Machines from './Machines';


const Inspection = () => {

    const [machines, setMachines] = useState([]);

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    console.log("Emanuel")


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

            <h2 className="text-center titulo">INSPECCIONES A MAQUINAS</h2>

            <Button onClick={() => { alert('Le diste click') }}>Emanuel</Button>


            <hr></hr>

            <div className="mt-4">
                <Button className="machines" id="togglerSpl">SOPLADORAS</Button>

                <UncontrolledCollapse className="row" toggler="#togglerSpl">
                    {
                        machines.filter(machine => machine.id_type_machine === 1).map(machine => (
                            <Machines
                                key={machine.id_machine}
                                machine={machine}
                            />
                        ))
                    }
                </UncontrolledCollapse>
            </div>



            <div className="mt-2">
                <Button className="machines" id="togglerIny">INYECTORAS</Button>
                <UncontrolledCollapse className="row" toggler="#togglerIny">
                    {
                        machines.filter(machine => machine.id_type_machine === 2).map(machine => (
                            <Machines
                                key={machine.id_machine}
                                machine={machine}
                            />
                        ))
                    }
                </UncontrolledCollapse>
            </div>


            <div className="mt-2">
                <Button className="machines" id="togglerFrs">FRESADORAS</Button>
                <UncontrolledCollapse className="row" toggler="#togglerFrs">
                    {
                        machines.filter(machine => machine.id_type_machine === 3).map(machine => (
                            <Machines
                                key={machine.id_machine}
                                machine={machine}
                            />
                        ))
                    }
                </UncontrolledCollapse>
            </div>



            <div className="mt-2">
                <Button className="machines" id="togglerTrn">TORNOS</Button>
                <UncontrolledCollapse className="row" toggler="#togglerTrn">
                    {
                        machines.filter(machine => machine.id_type_machine === 4).map(machine => (
                            <Machines
                                key={machine.id_machine}
                                machine={machine}
                            />
                        ))
                    }
                </UncontrolledCollapse>
            </div>

            <div className="mt-2">
                <Button className="machines" id="togglerMln">MOLINOS</Button>
                <UncontrolledCollapse className="row" toggler="#togglerMln">
                    {
                        machines.filter(machine => machine.id_type_machine === 5).map(machine => (
                            <Machines
                                key={machine.id_machine}
                                machine={machine}
                            />
                        ))
                    }
                </UncontrolledCollapse>
            </div>

            <div className="mt-2">
                <Button className="machines" id="togglerTlv">TOLVAS</Button>
                <UncontrolledCollapse className="row" toggler="#togglerTlv">
                    {
                        machines.filter(machine => machine.id_type_machine === 6).map(machine => (
                            <Machines
                                key={machine.id_machine}
                                machine={machine}
                            />
                        ))
                    }
                </UncontrolledCollapse>
            </div>

            <div className="mt-2">
                <Button className="machines" id="togglerDhf">DESHUMIFICADOR</Button>
                <UncontrolledCollapse className="row" toggler="#togglerDhf">
                    {
                        machines.filter(machine => machine.id_type_machine === 7).map(machine => (
                            <Machines
                                key={machine.id_machine}
                                machine={machine}
                            />
                        ))
                    }
                </UncontrolledCollapse>
            </div>

            <div className="mt-2">
                <Button className="machines" id="togglerScd">SECADORES</Button>
                <UncontrolledCollapse className="row" toggler="#togglerScd">
                    {
                        machines.filter(machine => machine.id_type_machine === 8 || machine.id_type_machine === 9).map(machine => (
                            <Machines
                                key={machine.id_machine}
                                machine={machine}
                            />
                        ))
                    }
                </UncontrolledCollapse>
            </div>

            <div className="mt-2">
                <Button className="machines" id="togglerCmp">COMPRESORES</Button>
                <UncontrolledCollapse className="row" toggler="#togglerCmp">
                    {
                        machines.filter(machine => machine.id_type_machine === 10 || machine.id_type_machine === 11).map(machine => (
                            <Machines
                                key={machine.id_machine}
                                machine={machine}
                            />
                        ))
                    }
                </UncontrolledCollapse>
            </div>

            <div className="mt-2">
                <Button className="machines" id="togglerTde">TORRES DE ENFRIAMIENTO</Button>
                <UncontrolledCollapse className="row" toggler="#togglerTde">
                    {
                        machines.filter(machine => machine.id_type_machine === 12).map(machine => (
                            <Machines
                                key={machine.id_machine}
                                machine={machine}
                            />
                        ))
                    }
                </UncontrolledCollapse>
            </div>


            <div className="mt-2">
                <Button className="machines" id="togglerCll">CHILLERS</Button>
                <UncontrolledCollapse className="row" toggler="#togglerCll">
                    {
                        machines.filter(machine => machine.id_type_machine === 13).map(machine => (
                            <Machines
                                key={machine.id_machine}
                                machine={machine}
                            />
                        ))
                    }
                </UncontrolledCollapse>
            </div>

        </Fragment>
    );
}

export default Inspection;