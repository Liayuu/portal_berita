import axios from "axios";

const baseApi = axios.create({
    baseURL: "https://e1501be9-d997-40f8-bcd1-8d0fc30478a6.mock.pstmn.io",
    headers: {
        "Content-type": "application/json"
    }
})

export { baseApi };