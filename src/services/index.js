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
