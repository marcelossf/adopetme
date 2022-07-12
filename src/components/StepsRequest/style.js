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
	padding: 0 2em;
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
			font-size: 64px;
			line-height: 77px;

			span {
				font-weight: 700;
				font-size: 48px;
				line-height: 58px;
			}
		}
	}

	.cards-container {
		display: flex;
		justify-content: right;
		flex-wrap: wrap;
		gap: 3em;

		@media (max-width: 768px) {
			justify-content: center;
			margin: 0 auto;
		}
	}
`;

export const CardRequest = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	gap: 1em;

	border-radius: 15px;

	padding: 2em 1em;
	max-width: 400px;
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
		display: flex;
		align-items: center;
		gap: 1em;

		background: #ffffff;
		box-shadow: -6px 10px 1px rgba(0, 0, 0, 0.25);

		border-radius: 15px;

		height: 100%;
		max-height: 211px;
		padding: 1em 2em;

		font-size: 15px;
		line-height: 17px;
		font-weight: 400;

		@media (min-width: 768px) {
			font-size: 20px;
			line-height: 24px;
		}
	}

	.status-text::before {
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
