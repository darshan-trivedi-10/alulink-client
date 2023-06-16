import axios from "axios";
import { baseURL } from "../static/data";

// http://localhost:5000/api/v1/organizations/search?query=ahme
const API = axios.create({ baseURL: baseURL + 'user' });

export const register = (userData) => {
    return API.post("/", userData);
}