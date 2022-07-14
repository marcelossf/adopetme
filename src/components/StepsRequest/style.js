import styled, { css } from "styled-components";

import setaAprovado from "../../assets/setaAprovado.png";
import setaEntregue from "../../assets/setaEntregue.png";
import setaNegado from "../../assets/setaNegado.png";
import setaPendente from "../../assets/setaPendente.png";
import setaRevisao from "../../assets/setaRevisao.png";

export const CardSection = styled.section`
	cursor: default;
	display: flex;
	flex-wrap: wrap;
	gap: 2em;

	width: 100%;
	max-width: 1450px;
	padding: 0 1em;
	margin: 90px auto;

	h4 {
		display: flex;
		flex-direction: column;

		color: #e9a82f;

		letter-spacing: 0.06em;
		font-weight: 700;
		font-size: 2rem;
		line-height: 33px;
		padding-left: 1em;
		font-family: fredoka;

		span {
			color: #9747ff;

			font-weight: 700;
			font-size: 1.5rem;
			line-height: 28px;
		}
		@media (min-width: 450px) {
			width: 450px;
		}
		@media (min-width: 768px) {
			padding-left: 0;

			span {
				font-weight: 700;
			}
		}
	}

	.cards-container {
		width: 100%;
		display: flex;
		justify-content: start;
		flex-wrap: nowrap;
		gap: 1em;

		height: fit-content;

		overflow-y: hidden;
		overflow-x: scroll;
		scroll-behavior: smooth;

		padding: 2em 0.5em;

		::-webkit-scrollbar {
			height: 10px;
			width: 10x;
			background: #d9d9d9;
			transition: ease-in-out 200ms;
		}
		::-webkit-scrollbar-thumb:horizontal {
			background: #9747ff;
			border-radius: 10px;
		}
		@media (min-width: 1024px) {
			gap: 3em;
			width: 80%;
			flex-wrap: wrap;
			overflow: hidden;
		}
	}
`;

export const CardRequest = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	gap: 1em;

	border-radius: 15px;

	padding: 2em 3em;
	max-width: 300px;
	width: 100%;

	box-shadow: -9px 11px 11px 0px rgba(0, 0, 0, 0.25);

	${(props) => {
		switch (props.type) {
			case "pendente":
				return css`
					background: rgba(77, 177, 179, 1);
				`;
			case "revisao":
				return css`
					background: rgba(233, 168, 47, 1);
				`;
			case "aprovado":
				return css`
					background: #83b200;
				`;
			case "entregue":
				return css`
					background: #d9d9d9;
s				`;
			case "negado":
				return css`
					background: rgba(242, 34, 34, 1);
				`;
			default:
				return false;
		}
	}};

	.status-title {
		color: #ffffff;

		font-family: fredoka;
		text-align: center;
		letter-spacing: 0.06em;
		font-weight: 700;
		font-size: 20px;
		line-height: 24px;

		@media (min-width: 768px) {
			font-size: 30px;
			line-height: 38px;
		}
	}
	.status-title.entregue {
		color: #3b8788;
	}

	.status-text {
		position: relative;

		display: flex;
		align-items: center;

		background: #ffffff;
		box-shadow: -6px 10px 1px rgba(0, 0, 0, 0.25);

		border-radius: 15px;

		height: 100%;
		max-height: 211px;
		width: 240px;
		padding: 1em 3em;

		text-align: start;
		font-size: 15px;
		line-height: 17px;
		font-weight: 400;
	}

	.status-text::before {
		position: absolute;
		left: 5px;
		transform: scale(0.7);

		${(props) => {
			switch (props.type) {
				case "pendente":
					return css`
						content: url(${setaPendente});
					`;
				case "revisao":
					return css`
						content: url(${setaRevisao});
					`;
				case "aprovado":
					return css`
						content: url(${setaAprovado});
					`;
				case "entregue":
					return css`
						content: url(${setaEntregue});
					`;
				case "negado":
					return css`
						content: url(${setaNegado});
					`;
				default:
					return false;
			}
		}};
	}
`;
