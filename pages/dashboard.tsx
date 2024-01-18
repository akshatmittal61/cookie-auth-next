import React, { useState } from "react";
import { Button, Input } from "@/library";
import http from "@/utils/http";

const Dashboard = () => {
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		try {
			setLoading(true);
			const res = await http.post("/auth/logout");
			console.log(res.data);
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
