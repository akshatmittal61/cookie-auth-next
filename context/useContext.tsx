import { IUser } from "@/types/user";
import { useState } from "react";

const useContextData = () => {
	const [isLoggedIn, setLsLoggedIn] = useState(false);
	const [user, setUser] = useState<IUser | null>(null);

	const handleLoggedIn = (value: boolean) => {
		setLsLoggedIn(value);
	};

	const handleUser = (value: Partial<IUser> | null) => {
		if (!value) {
			setUser(null);
		} else {
			setUser((prev: any) => ({
				...prev,
				...value,
			}));
		}
	};

	return {
		isLoggedIn,
		setLsLoggedIn: handleLoggedIn,
		user,
		setUser: handleUser,
	};
};

export default useContextData;
