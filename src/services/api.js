import Axios from "axios";

// Axios Instance
export const api = Axios.create({
    baseURL: 'https://interiorica-backend.onrender.com/admin/',
    headers: {
        Accept: 'application/json, text/plain, */*',
    },
})

export default api;