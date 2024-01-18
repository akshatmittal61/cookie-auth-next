import React, { useRef } from "react";
import { InputProps } from "./types";

const Input: React.FC<InputProps> = ({
	label,
	styles,
	style,
	className,
	...props
}) => {
	const inputRef = useRef<any>(null);

	return (
		<div className={`input ${className}`} style={styles?.box}>
			{label ? (
				<label className="input__label" style={styles?.label}>
					{label}
				</label>
			) : null}
			<div className="input__input-container">
				<input
					className="input__input"
					ref={inputRef}
					style={{
						...styles?.input,
						...style,
					}}
					{...props}
				/>
			</div>
		</div>
	);
};

export default Input;
