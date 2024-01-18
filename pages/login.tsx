import React, { useState } from "react";
import {Button, Input} from "@/library";
import http from "@/utils/http";

const LoginPage = () => {
	const [loading, setLoading] = useState(false);
	const [creds, setCreds] = useState({
		email: "",
		password: "",
	});

	const handleChange = (e: any) => {
		setCreds({
			...creds,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		try {
			setLoading(true);
			const res = await http.post("/auth/login", creds);
			console.log(res.data);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<main className="login">
            <h1 className="text-center text-4xl font-bold">
                Login
            </h1>
			<form onSubmit={handleSubmit}>
				<Input
					type="email"
					name="email"
					placeholder="Email"
					onChange={handleChange}
				/>
				<Input
					type="password"
					name="password"
					placeholder="Password"
					onChange={handleChange}
				/>
				<Button loading={loading} type="submit">
					Login
				</Button>
			</form>
		</main>
	);
};

export default LoginPage;