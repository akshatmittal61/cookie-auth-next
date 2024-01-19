import { createContext } from "react";
import { IUser } from "@/types/user";

const GlobalContext = createContext({
	isLoggedIn: false,
	setLsLoggedIn: (_: boolean) => {},
	user: null as IUser | null,
	setUser: (_: Partial<IUser> | null) => {},
});

export default GlobalContext;
