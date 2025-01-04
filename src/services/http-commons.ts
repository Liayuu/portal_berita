import axios from "axios";

const baseApi = axios.create({
    baseURL: "https://9ea92eed-420d-45cc-84d0-4b133b43a640.mock.pstmn.io",
    headers: {
        "Content-type": "application/json"
    }
})

export { baseApi };