import React, { useState } from "react";
import { Button } from "@/library";
import http from "@/utils/http";
import { useRouter } from "next/router";

const Dashboard = () => {
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		try {
			setLoading(true);
			const res = await http.post("/auth/logout");
			console.log(res.data);
			router.push("/login");
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<main className="register">
			<h1 className="text-center text-4xl font-bold">Dashboard</h1>
			<Button loading={loading} onClick={handleSubmit}>
				Logout
			</Button>
		</main>
	);
};

export default Dashboard;
