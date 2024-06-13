import axios from "axios";
export const instance = axios.create({
    baseURL: 'https://666a97027013419182cfef1c.mockapi.io/api/ltkv1/',
    timeout: 3000,
    headers: {}
});