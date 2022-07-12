import React from "react";
import { StyledButton } from "./style";

export const Button = ({ children, blackSchema, width, ...rest }) => {
	return (
		<StyledButton width={width} blackSchema={blackSchema} {...rest}>
			{children}
		</StyledButton>
	);
};
