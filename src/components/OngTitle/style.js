import styled from "styled-components";

export const DivStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	text-align: start;
	width: 100%;
	padding: 0 1rem;
	gap: 2em;

	.ong-container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;

		justify-content: center;

		gap: 1rem;

		max-width: 80%;
	}
	.title-ong {
		font-family: "Fredoka";
		font-weight: 500;
		font-size: 2rem;

		color: #4db1b3;
	}

	.paragraph-ong {
		color: #000000;
		font-family: "Fredoka";
		font-size: 25px;
	}

	.adopet-logo {
		display: none;
	}

	@media (min-width: 1024px) {
		flex-direction: row;
		justify-content: center;

		margin: 0 auto;
		width: 100%;

		.adopet-logo {
			display: block;
			max-width: 30%;
		}
		.ong-container {
			gap: 2rem;

			width: 30%;
		}
	}
`;
