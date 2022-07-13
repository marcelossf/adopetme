import styled from "styled-components";

export const Container = styled.div`
	padding: 2em 2em;
	width: 350px;
	height: 550px;

	background-color: #e8e8e8;
	border-radius: 30px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 2em;
	align-items: center;

	box-shadow: 11px 11px 10px rgba(0, 0, 0, 0.25);
`;

export const FigureStyled = styled.div`
	border-radius: 5% 5% 1% 1%;
	border: 5px solid white;

	box-shadow: 11px 11px 10px rgba(0, 0, 0, 0.25);
	background-color: white;

	text-align: center;
	width: 100%;

	figure {
		border-top-left-radius: 5%;
		border-top-right-radius: 5%;

		overflow: hidden;
		height: 200px;

		img {
			z-index: -1;
			inset: 0;

			height: 100%;
			width: 100%;
			object-fit: cover;
			object-position: top;
			transition: transform 200ms;
		}

		&:hover > img {
			transform: scale(1.05);
		}
	}
	p {
		border-top: 5px solid black;
		border-top: 5px solid white;

		padding: 0.5em 0;
		background-color: white;
		font-family: "Fredoka";
		font-weight: 500;
		font-size: 1.2rem;
	}

	/* @media (min-width: 1000px) {
		margin-top: -5px;
		img {
			width: 333.98px;
			height: 185.45px;

			border-radius: 15px 15px 0px 0px;
		}
	} */
`;

export const DivInfos = styled.div`
	box-sizing: border-box;
	gap: 15px;

	width: 267px;
	height: 138.63px;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;

	font-family: "Fredoka";
	font-size: 20px;
	font-weight: 500;
	line-height: 24px;
	color: #000000;

	@media (min-width: 1000px) {
		width: 85%;
	}
`;
