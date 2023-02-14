import axios from "axios";
import {API} from "../../constants";
const axiosService = axios.create({baseURL:API});

export {
    axiosService
}
