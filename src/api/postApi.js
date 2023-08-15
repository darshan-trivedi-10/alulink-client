import axios from "axios";
import { baseURL } from "../static/data";

const API = axios.create({ baseURL: baseURL + 'post' });

export const createPost = async (postData) => {
    try {
        let data = await API.post('/create', postData);
        return data;
    } catch (error) {
        if (error.response && error.response.status === 401) {
            console.log('Unauthorized access');
            alert("You are not verified User");
        } else {
            console.log('An error occurred');
            // Handle other types of errors
        }
    }
};

export const fetchAllPost = async (userData) => {
    let data = await API.post('/all', userData);
    return data;
}