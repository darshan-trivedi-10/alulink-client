import axios from "axios";
import { baseURL } from "../static/data";

// http://localhost:5000/api/v1/organizations/search?query=ahme
const API = axios.create({ baseURL: baseURL + 'organizations' });

export const register = (userData) => {
    return API.post("/", userData);
}

export const searchOrganization = async (inputValue) => {
    let { data } = await API.get(`/search?query=${inputValue}`);

    let organizationList = data.data.map(org => {
        return { label: org.name, value: org._id, established: org.established };
    });
    return organizationList;
}