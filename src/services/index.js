import axios from "axios";

const API_URL = 'http://localhost:5000';

export async function getMachines() {
    try {
        const response = await axios({
            url: `${API_URL}/machine`,
            method: 'GET'
        });
        return response;
    } catch (err) {
        console.log(err);
    }
}

export async function saveInspection(inspectionData) {
    try {
        const response = await axios({
            url: `${API_URL}/inspection`,
            method: 'POST',
            data: inspectionData
        });
        return (response);
    } catch (err) {
        console.log(err);
    }
}

export async function getInspection(id) {
    try {
        const response = await axios({
            url: `${API_URL}/inspection/${id}`,
            method: 'GET'
        });
        return (response);
    } catch (err) {
        console.log(err);
    }
}

export async function updateInspection(id, dataUpdate) {
    try {
        const response = await axios({
            url: `${API_URL}/inspection/${id}`,
            method: 'PUT',
            data: dataUpdate
        });
        return response;
    } catch (err) {
        console.log(err);
    }
}

export async function deleteInspection(id) {
    try {
        const response = await axios({
            url: `${API_URL}/inspection/${id}`,
            method: 'DELETE'
        });
        return response;
    } catch (err) {
        console.log(err);
    }
}

export async function deleteWorkOrder(id) {
    try {
        const response = await axios({
            url: `${API_URL}/work-order/${id}`,
            method: 'DELETE'
        });
        return response;
    } catch (error) {
        console.log(error)
    }
}

export async function saveWorkOrder(workOrderData) {
    try {
        const response = await axios({
            url: `${API_URL}/work-order`,
            method: 'POST',
            data: workOrderData
        });
        return (response);
    } catch (err) {
        console.log(err);
    }
}

export async function getWorkOrder(id) {
    try {
        const response = await axios({
            url: `${API_URL}/work-order/${id}`,
            method: 'GET'
        });
        return (response);
    } catch (err) {
        console.log(err);
    }
}

