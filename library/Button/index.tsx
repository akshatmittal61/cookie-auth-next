import React, { forwardRef } from "react";
import { IButtonProps } from "./types";

const Button: React.ForwardRefRenderFunction<
	HTMLButtonElement,
	IButtonProps
> = (
	{
		children,
		className,
		variant = "filled",
		size = "medium",
		loading = false,
		icon,
		iconPosition = "left",
		...props
	},
	ref
) => {
	return (
		<button
            className="btn btn--size--medium btn--variant--filled"
			disabled={props.disabled || loading}
			ref={ref}
			{...props}
		>
			{loading ? (
				<div className="btn__loader"></div>
			) : children}
		</button>
	);
};

export default forwardRef<HTMLButtonElement, IButtonProps>(Button);
