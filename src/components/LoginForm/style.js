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
	padding-bottom: 1.2em;

	.disable {
		background-color: #3b8788;
	}

	.btns {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 30px;
	}
`;
