import axios from "axios";

const baseApi = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-type": "application/json"
    }
})

export { baseApi };