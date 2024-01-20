import React from "react";
import { useRouter } from "next/router";
import { Button } from "@/library";
import http from "@/utils/http";

const Home: React.FC = () => {
	const router = useRouter();
	return (
		<main className="w-screen h-screen flex justify-center items-center flex-col gap-8">
			<h1 className="text-4xl font-bold">Cookie-based auth tryout</h1>
			<div className="flex gap-4">
				<Button onClick={() => router.push("/login")}>Login</Button>
				<Button onClick={() => router.push("/register")}>
					Register
				</Button>
				<Button onClick={() => router.push("/dashboard")}>
					Dashboard
				</Button>
			</div>
		</main>
	);
};

export default Home;

/* export const getServerSideProps = async (context: any) => {
	const { req } = context;
	const cookies = req.cookies;
	console.log("cookies in _app", cookies);
	/* if (!cookies.token) {
		return {
			redirect: {
				destination: "/login",
				permanent: false,
			},
		};
	} *
	try {
		const res = await http.get("/auth/verify", {
			headers: {
				cookie: req.headers.cookie,
			},
		});
		console.log("res in _app", res.data);
		return {
			props: {},
		};
	} catch (error: any) {
		console.error(error.message);
		return {
			redirect: {
				destination: "/login",
				permanent: false,
			},
		};
	}
}; */
