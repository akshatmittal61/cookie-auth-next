import React from "react";
import { useRouter } from "next/router";
import { Button } from "@/library";

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
