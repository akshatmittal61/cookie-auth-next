import { NextApiRequest, NextApiResponse } from "next";

interface ApiRequest extends NextApiRequest {
	user?: {
		id: string;
	};
	cookie: (name: string, value: string, options: any) => ApiRequest;
}

interface ApiResponse extends NextApiResponse {
	user?: {
		id: string;
	};
	cookie: (name: string, value: string, options: any) => ApiResponse;
}

export type { ApiRequest, ApiResponse };
