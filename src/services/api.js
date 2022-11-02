import axios from "axios";

export const api = axios.create({
    baseURL: "https://rocketnotes-api3.herokuapp.com"
})