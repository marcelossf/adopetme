import styled from "styled-components";
export const FormCadastre = styled.form`
	width: 330px;
	padding-bottom: 1.2em;

	border-radius: 15px;
	border: solid 5px var(--orange);

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 1em;

	background-color: var(--petroleumBlue);
	box-shadow: -1px 1px 2px 2px rgba(0, 0, 0, 0.25);

	.observation {
		font-size: 0.8rem;
		color: var(--white);
	}

	.disable {
		background-color: #3b8788;
	}
	.btn-container {
		width: 100%;

		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 0.8em;
	}
	.selectForm {
		width: 285px;
		height: 30px;
		background-color: #3b8788;
		border-radius: 5px;
		border: solid white 3px;
		padding-left: 5px;
		color: white;
		font-family: Comfortaa;
		font-weight: bold;

		box-shadow: -4px 4px 4px 0px rgba(0, 0, 0);
		::placeholder {
			color: white;
		}
	}
`;
export const BtnFormEnter = styled.button`
	width: 55%;
	/* height: 30px; */

	padding: 0.8em 2em;
	background-color: var(--orange);
	border-radius: 5px;
	border: 0 none;
	color: black;
	font-family: Comfortaa;
	font-weight: bold;
	margin: 1em;
	box-shadow: -1px 1px 2px 2px rgba(0, 0, 0, 0.25);
`;

export const ButtonForm = styled.button`
	padding: 1em;
	border-radius: 5px;
	border: solid white 3px;

	font-family: Comfortaa;

	color: white;
	background-color: var(--petroleumBlue);
	box-shadow: -1px 1px 2px 2px rgba(0, 0, 0, 0.25);

	transition: ease-in-out 200ms;

	&:hover {
		filter: brightness(80%);
	}
	span {
		font-weight: bold;
		border-bottom: 2px solid white;
	}
`;

export const TitleForm = styled.h2`
	background-color: var(--orange);
	color: var(--white);
	box-shadow: 0px 3px 2px 2px rgba(0, 0, 0, 0.25);

	text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	text-align: center;
	font-size: 1.2rem;
	width: 70%;
	padding: 0.3em 1em;

	border-bottom-right-radius: 5px;
	border-bottom-left-radius: 5px;
`;
