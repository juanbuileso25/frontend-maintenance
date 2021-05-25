import { useState } from 'react';

export const useFormRegister = (initialForm, validationForm, toggle) => {

    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({
        observation_wo: {
            msg: '',
            error: false
        },
        activity: {
            msg: '',
            error: false
        },
        estimated_time: {
            msg: '',
            error: false
        }
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDataFormEdit({
            ...dataFormEdit,
            [name]: value
        })
        setErrors({
            ...errors,
            [name]: {
                msg: '',
                error: false
            }
        })
    }

    return {
        form,
        handleChange
    }
}