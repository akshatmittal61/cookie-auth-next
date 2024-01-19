import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		avatar: {
			type: String,
			default:
				"https://raw.githubusercontent.com/akshatmittal61/mern-template/master/images/user.svg",
		},
	},
	{ timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
