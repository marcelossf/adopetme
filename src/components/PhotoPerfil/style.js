import styled from "styled-components";

export const DivImg = styled.div`
	display: none;
	position: relative;

	@media (min-width: 1024px) {
		cursor: pointer;
		display: flex;
		align-items: flex-end;
		flex-direction: column;

		.perfil {
			max-width: 100px;
			max-height: 100px;
			width: auto;
			height: auto;
		}
	}
`;

export const ModalPerfil = styled.div`
	width: 130px;
	height: 100px;

	position: absolute;
	top: 100px;
	right: 0;

	border-radius: 15px;
	background-color: var(--green);

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 10px;
	font-size: 18px;
	color: white;
	font-weight: bold;

	.seta {
		background-color: var(--green);
		width: 100px;
		height: px;
	}

	.logout {
		width: 100px;
		height: 30px;
		background-color: var(--orange);
		cursor: pointer;

		border: none;
		border-radius: 5px;
		box-shadow: -1px 1px 2px 2px rgba(0, 0, 0, 0.25);
		z-index: 99999;
	}
`;
