import { ApiRequest, ApiResponse } from "@/types/api";
import { RESPONSE_MESSAGES } from "@/constants/enum";
import User from "@/models/User";
import jwt from "jsonwebtoken";
import { jwtSecret } from "@/config";

export const verify = async (req: ApiRequest, res: ApiResponse) => {
	try {
		console.log(req.cookies);
		const token = req.cookies.token;
		console.log(token);
		if (!token) {
			return res
				.status(401)
				.json({ message: RESPONSE_MESSAGES.BAD_REQUEST });
		}
		const decoded: any = jwt.verify(token, jwtSecret);
		console.log(decoded);
		const foundUser = await User.findById(decoded.id);
		console.log(foundUser);
		if (!foundUser) {
			return res
				.status(404)
				.json({ message: RESPONSE_MESSAGES.NOT_FOUND });
		}
		return res
			.status(200)
			.json({ message: RESPONSE_MESSAGES.SUCCESS, data: foundUser });
	} catch (error) {
		console.error(error);
		return res
			.status(500)
			.json({ message: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR });
	}
};

export const register = async (req: ApiRequest, res: ApiResponse) => {
	try {
		const { name, email, password } = req.body;
		if (!name || !email || !password) {
			return res
				.status(400)
				.json({ message: RESPONSE_MESSAGES.BAD_REQUEST });
		}
		const foundEmail = await User.findOne({ email });
		if (foundEmail) {
			return res
				.status(409)
				.json({ message: RESPONSE_MESSAGES.BAD_REQUEST });
		}
		const user = await User.create({
			name,
			email,
			password,
		});
		return res
			.status(201)
			.json({ message: RESPONSE_MESSAGES.SUCCESS, data: user });
	} catch (error) {
		console.error(error);
		return res
			.status(500)
			.json({ message: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR });
	}
};

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
		/* .cookie("token", token, {
				httpOnly: true,
				maxAge: 30 * 24 * 60 * 60 * 1000,
				sameSite: "none",
				secure: true,
			}) */
		res.setHeader(
			"Set-Cookie",
			`token=${token}; HttpOnly; Path=/; Max-Age=${30 * 24 * 60 * 60 * 1000}; SameSite=None; Secure=true`
		);
		return res
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
