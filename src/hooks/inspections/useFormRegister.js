import { useState } from 'react'

import { saveInspection } from '../../services/index';
import { alertNotification } from '../../services/alerts/alert';

export const useFormRegister = (initialForm, validateForm, toggle) => {

    const [form, setForm] = useState(initialForm);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: {
                val: value,
                msg: '',
                error: false
            }
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (form.maintenance.val === 'Si') {
            form.state.val = 'A revisión'
        } else {
            form.state.val = 'Terminada'
        }

        const newForm = {
            type_inspection: form.type_inspection.val,
            date_i: form.date_i.val,
            observation_i: form.observation_i.val,
            id_machine: form.id_machine.val,
            maintenance: form.maintenance.val,
            employee: form.employee.val,
            state: form.state.val
        }

        if (!validateForm(form, setForm)) {
            const response = await saveInspection(newForm);
            if (response.data.success === true) {
                alertNotification("Echo", "inspección guardada con exito!", "success");
            } else {
                alertNotification("Error", "No se ha guardado la inspección !", "error");
            }
            toggle();
        }
    }

    return {
        form,
        handleChange,
        handleSubmit
    }
}