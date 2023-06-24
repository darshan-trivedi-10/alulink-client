import axios from "axios";
import { baseURL } from "../static/data";

// http://localhost:5000/api/v1/organizations/search?query=ahme
const API = axios.create({ baseURL: baseURL + 'user' });

export const register = (userData) => {
    return API.post("/", userData);
}

// {/* http://localhost:5000/api/v1/user/unverified */}

export const getUnverifiedUser = async (organizationData) => {
    return await API.post("/unverified", organizationData);
}

export const verifyUser = async (userData) => {
    return await API.post('/verify', userData);
}

export const getAllUser = async (data) => {
    return API.post('/all', data);
}