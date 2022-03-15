import Axios, { AxiosError } from "axios";

const axios = Axios.create({
    baseURL: process.env.NODE_ENV === "production"
        ? "https://lendsqr-fe-task.herokuapp.com/api"
        : "http://localhost:8000/api"
})

async function get(url: string) {
    try {
        const response = await axios.get(url)
        return {
            status: response.status,
            statusText: response.statusText,
            data: response.data
        }
    } catch (e) {
        const { response } = e as AxiosError
        return {
            status: response?.status,
            statusText: response?.statusText || "Network Error",
            data: response?.data,
        }
    }
}

const request = { get }
export default request
