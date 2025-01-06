import axios from "axios";

const baseApi = axios.create({
    baseURL: "https://30d696f4-bd7a-4495-9860-01297c5ce074.mock.pstmn.io",
    headers: {
        "Content-type": "application/json"
    }
})

export { baseApi };