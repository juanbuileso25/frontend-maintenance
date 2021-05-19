import { useState, useEffect } from 'react';

export const useFormEdit = (initialForm, validateForm, toggle) => {

    const [form, setForm] = useState();


    console.log(form)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    }


    return {
        form,
        handleChange,
        handleSubmit
    }
}