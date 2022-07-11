import styled from "styled-components";

export const SloganContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1em;

	padding: 0 2em;
	margin: 0 auto 30px;
	width: 100%;
	max-width: 1350px;

	text-align: center;

	h3 {
		font-family: Fredoka;
		font-size: 20px;
		font-weight: 700;
		line-height: 24px;
		letter-spacing: 0.06em;
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

		background: rgba(242, 34, 34, 1);
		color: #ffffff;

		border-radius: 15px;

		padding: 1em;
		width: 100%;

		@media (min-width: 768px) {
			font-size: 30px;
			line-height: 38px;
		}
	}

	p {
		font-size: 15px;
		font-weight: 700;
		line-height: 17px;

		@media (min-width: 768px) {
			font-size: 18px;
			line-height: 20px;
		}
	}
`;
