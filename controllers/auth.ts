import { ApiRequest, ApiResponse } from "@/types/api";
import { RESPONSE_MESSAGES } from "@/constants/enum";
import User from "@/models/User";
import jwt from "jsonwebtoken";
import { jwtSecret } from "@/config";

export const login = async (req: ApiRequest, res: ApiResponse) => {
	try {
		const { email, password } = req.body;
		if (!email || !password) {
			return res
				.status(400)
				.json({ message: RESPONSE_MESSAGES.BAD_REQUEST });
        }
        const foundUser = await User.findOne({ email });
		if (!foundUser) {
			return res
				.status(404)
				.json({ message: RESPONSE_MESSAGES.NOT_FOUND });
		}
        console.log(foundUser);
        if (foundUser.password !== password) {
            return res
                .status(401)
                .json({ message: RESPONSE_MESSAGES.FAILED });
        }
		const token = jwt.sign({ id: foundUser._id }, jwtSecret, {
			expiresIn: "30d",
        });
		console.log(token, res);
		return res
			.cookie("token", token, {
				httpOnly: true,
				maxAge: 30 * 24 * 60 * 60 * 1000,
				sameSite: "none",
				secure: true,
			})
			.status(200)
			.json({ message: RESPONSE_MESSAGES.SUCCESS, data: foundUser });
	} catch (error: any) {
		console.error(error);
		return res.status(500).json({
			message: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR,
			error: error.message,
		});
	}
};
