import styled from "styled-components";

export const StyledButton = styled.button`
	padding: 0.8rem 1.3rem;
	width: ${(props) => props.width};

	font-family: "Comfortaa";
	font-weight: 700;
	font-size: 1rem;
	line-height: 22px;

	border-radius: 10px;
	border: 0 none;

	background-color: ${(props) => (props.blackSchema ? "#F2AE2F" : "#4DB1B3")};
	box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25) inset;
	color: ${(props) => (props.blackSchema ? "#000" : "#ffff")};
	transition: ease-in-out 0.2s;

	&:hover {
		box-shadow: 0px 0px 19px 6px rgba(0, 0, 0, 0.63) inset;
	}
`;
