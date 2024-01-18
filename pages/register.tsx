import React, { useState } from "react";
import {Button, Input} from "@/library";
import http from "@/utils/http";

const RegisterPage = () => {
	const [loading, setLoading] = useState(false);
    const [creds, setCreds] = useState({
        name: "",
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
			const res = await http.post("/auth/register", creds);
			console.log(res.data);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<main className="register">
            <h1 className="text-center text-4xl font-bold">
                Register
            </h1>
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                />
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
					Register
				</Button>
			</form>
		</main>
	);
};

export default RegisterPage;