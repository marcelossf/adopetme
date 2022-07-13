import styled from "styled-components";

export const FormLogin = styled.form`
	width: 330px;

	background-color: var(--petroleumBlue);
	box-shadow: -1px 1px 2px 2px rgba(0, 0, 0, 0.25);

	border-radius: 15px;
	border: solid 5px var(--orange);

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	gap: 1em;
	padding: 0 0 1.2em 0;

	.btnslogin {
		width: 100px;
		height: 25px;
		background-color: var(--petroleumBlue);
		border-radius: 5px;
		border: solid white 3px;
		color: white;
		font-family: Comfortaa;
		font-weight: bold;
		box-shadow: -1px 1px 2px 2px rgba(0, 0, 0, 0.25);
	}

	.disable {
		background-color: #3b8788;
	}

	.btnslogin:hover {
		background-color: #3b8788;
	}
	.btnslogin--orange {
		width: 100px;
		height: 25px;
		background-color: var(--orange);
		border-radius: 5px;
		border: none;
		color: black;
		font-family: Comfortaa;
		font-weight: bold;
		margin-top: 10px;
		box-shadow: -1px 1px 2px 2px rgba(0, 0, 0, 0.25);
	}
	.btns {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 30px;
	}
`;
