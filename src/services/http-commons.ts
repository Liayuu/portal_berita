import axios from "axios";

const baseApi = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
        "Content-type": "application/json"
    }
})

export { baseApi };