import axios from "axios";
import { baseURL } from "../static/data";


const API = axios.create({ baseURL: baseURL + 'organizations' });

export const register = (userData) => {
    return API.post("/", userData);
}