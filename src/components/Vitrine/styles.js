import styled from "styled-components";

export const ContainerVitrine = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2em;

	margin: 3rem 0;
	cursor: default;

	.fraseVitrine {
		color: var(--black);

		font-family: "Fredoka";
		font-size: 2.3rem;
		font-weight: 500;
		text-align: center;
	}

	ul,
	.vitrine-container {
		display: flex;
		justify-content: space-evenly;
		align-items: flex-start;
		gap: 2em;

		overflow-x: scroll;
		scroll-behavior: smooth;

		padding: 2em 0;
		max-width: 90%;
		width: 100%;
		justify-content: flex-start;
		flex-wrap: nowrap;
	}
`;

export const ContainerOng = styled.div`
	width: 90%;
`;
export const AbaSolicitacoes = styled.div`
	box-sizing: border-box;
	padding: 15px 10px 20px 10px;

	width: 120px;
	height: 19px;
	color: #ffffff;
	background-color: #3b8788;

	border-radius: 20px 20px 0 0;

	display: flex;
	justify-content: center;
	align-items: flex-start;
	text-align: center;
	font-size: 16px;
	font-family: "Freedoka";
	font-weight: 400;
`;
export const DivSolicitacoes = styled.div`
	width: 346px;
	height: 276px;
	background-color: var(--petroleumBlue);

	border-radius: 0 15px 15px 15px;
`;

export const ButtonsLeftRight = styled.div`
	width: 95%;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-left: 3vw;
	button {
		background-color: #ffffff;
		border: none;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

export const ButtonContainer = styled.div`
	display: inline-flex;
	justify-content: space-between;
	width: 85%;
	margin: 0 auto;
`;
