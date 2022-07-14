import styled from "styled-components";

export const DropDownContainer = styled.div`
	position: absolute;
	top: 130%;
	z-index: 10;

	background-color: var(--orange);
	box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);

	max-width: 230px;
	width: 100%;
	height: fit-content;
	overflow-y: auto;
	display: flex;
	flex-direction: column;

	border-radius: 10px 0 10px 10px;
	cursor: pointer;
`;
