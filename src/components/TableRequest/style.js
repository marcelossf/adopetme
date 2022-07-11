import styled, { css } from "styled-components";
import selector from "../../assets/topic-request.png";
export const RequestTable = styled.table`
	background: #3b8788;

	border-top-right-radius: 15px;
	border-bottom-right-radius: 15px;

	padding: 1em 1.5em;
	width: 100%;
	max-width: 1450px;

	height: 500px;

	display: block;
	overflow-y: auto;

	&::-webkit-scrollbar {
		width: 10px;
	}
	&::-webkit-scrollbar-thumb {
		background-color: #f2ae2f;
		border-radius: 10px;
	}

	@media (min-width: 1024px) {
		border-radius: 15px;
		border-top-left-radius: 0px;
	}

	.table-headers {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		gap: 1em;

		border-bottom: 2px solid #f2ae2f;
		padding: 1em 0;

		th {
			color: var(--white);

			font-size: 14px;
			font-weight: 700;
			font-family: fredoka;

			letter-spacing: 0.06em;
			line-height: 17px;
			text-transform: uppercase;

			@media (min-width: 450px) {
				font-size: 18px;
				line-height: 21px;
			}
			@media (min-width: 1024px) {
				font-size: 28px;
				line-height: 31px;
			}
		}
	}

	.table-data {
		cursor: default;
		transition: transform 200ms;

		display: flex;
		justify-content: space-evenly;

		align-items: center;
		gap: 1em;
		padding: 1em 0;
		width: 100%;

		td {
			width: 100%;
			color: #ffffff;

			text-align: center;
			font-weight: 700;
			font-size: 14px;
			line-height: 17px;

			@media (min-width: 450px) {
				font-size: 16px;
				line-height: 19px;
			}
			@media (min-width: 1024px) {
				font-size: 24px;
				line-height: 31px;
			}
		}
	}
	.first {
		display: flex;
		align-items: center;
		justify-content: center;

		span {
			content: url(${selector});

			display: inline-block;

			opacity: 0;
			transition: opacity 200ms;

			@media (min-width: 768px) {
				padding: 1em;
			}
		}
	}

	.table-data :hove {
		transform: none;
	}
	.table-data:hover > .first > span {
		opacity: 1;
	}
`;

export const StatusRequest = styled.td`
	border-radius: 50px;

	${(props) => {
		switch (props.statusColor) {
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
					background: rgba(255, 255, 255, 1);
					color: rgba(59, 135, 136, 1);
				`;
			case "negado":
				return css`
					background: rgba(242, 34, 34, 1);
				`;
			default:
				return false;
		}
	}};
`;
