import { RESPONSE_MESSAGES } from "@/constants/enum";
import connectDB from "@/db";
import { register } from "@/controllers/auth";
import { ApiRequest, ApiResponse } from "@/types/api";

const handler = async (req: ApiRequest, res: ApiResponse) => {
	try {
		await connectDB();
		const { method } = req;
		switch (method) {
			case "POST":
				return register(req, res);
			default:
				res.setHeader("Allow", ["POST"]);
				return res.status(405).end(`Method ${method} Not Allowed`);
		}
	} catch (error) {
		console.error(error);
		return res
			.status(500)
			.json({ error: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR });
	}
};

export default handler;
