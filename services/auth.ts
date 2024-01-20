import { IUser } from "@/types/user";
import { jwtSecret } from "@/config";
import User from "@/models/User";
import jwt from "jsonwebtoken";
import connectDB from "@/db";

export const authenticate = async (token: string): Promise<IUser | null> => {
	try {
		await connectDB();
		const decoded: any = jwt.verify(token, jwtSecret);
		const foundUser = await User.findById(decoded.id);
		if (!foundUser) {
			return null;
		}
		return foundUser;
	} catch (error) {
		console.error(error);
		return null;
	}
};
