import { backendBaseUrl } from "@/constants/variables";
import axios from "axios";

const http = axios.create({
	baseURL: backendBaseUrl,
});

export default http;
