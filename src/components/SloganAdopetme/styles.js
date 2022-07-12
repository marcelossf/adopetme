import styled from "styled-components";
import VectorDesktop from "../../assets/vectorDesktop.png";
import VectorMobile from "../../assets/vectorMobile.png";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 30px auto;
	width: 100%;

	@media (min-width: 1024px) {
		padding: 2em;
	}
	.logoAdopetme {
		display: none;
		@media (min-width: 1024px) {
			display: block;
			width: 50%;
		}
	}
`;

export const Slogan = styled.figure`
	display: flex;
	justify-content: flex-end;
	align-items: flex-start;

	padding: 3em 2em;
	max-width: 100%;
	width: 100%;

	height: 100%;
	min-height: 255px;

	background-image: url(${VectorMobile});
	background-size: contain;
	background-repeat: no-repeat;
	@media (max-width: 375px) {
		padding: 3em 2em;
	}
	@media (min-width: 450px) {
		padding: 4em 4em;
		min-height: 450px;
	}
	@media (min-width: 530px) {
		padding: 5em 4em;
	}
	@media (min-width: 768px) {
		background-image: url(${VectorDesktop});
		justify-content: flex-start;
	}

	p {
		width: 350px;

		height: fit-content;

		font-family: "Fredoka";
		font-weight: 500;
		text-align: end;

		color: #ffffff;

		font-size: 1.5rem;
		@media (max-width: 375px) {
			font-size: 1.3rem;
			width: 300px;
		}
		@media (min-width: 450px) {
			font-size: 1.8rem;
		}
		@media (min-width: 530px) {
			font-size: 2rem;
		}
		@media (min-width: 768px) {
			width: 430px;
			margin-left: 3%;

			text-align: start;

			font-size: 2.5rem;
		}
		@media (min-width: 768px) {
			margin-top: 3%;
		}
	}
`;
