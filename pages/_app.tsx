import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/layouts";
import useContextData from "@/context/useContext";
import GlobalContext from "@/context/GlobalContext";

export default function App({ Component, pageProps }: AppProps) {
	const contextData = useContextData();
	return (
		<GlobalContext.Provider value={contextData}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</GlobalContext.Provider>
	);
}
