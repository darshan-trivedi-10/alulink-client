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
            // Display an error message to the user or perform any other necessary actions
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