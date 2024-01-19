import GlobalContext from "@/context/GlobalContext";
import { useContext } from "react";

const useStore = () => {
	const context = useContext(GlobalContext);
	return context;
};

export default useStore;
