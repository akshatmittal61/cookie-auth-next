import { backendBaseUrl } from "@/constants/variables";
import axios from "axios";

const http = axios.create({
	baseURL: backendBaseUrl,
	headers: {
		"Content-Type": "application/json",
	},
	withCredentials: true,
});

export default http;
