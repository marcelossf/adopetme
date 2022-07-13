import styled from "styled-components";

export const Section = styled.section`
	background-color: #f2ae2f;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	position: fixed;
	z-index: 9999;
	top: 5px;
	left: 0;

	padding: 1em 1em 2em;
	width: max-content;
	min-width: fit-content;
	height: 40%;

	border-top-right-radius: 15px;
	border-bottom-right-radius: 15px;

	animation: slide-right 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;

	@-webkit-keyframes slide-right {
		0% {
			-webkit-transform: translateX(-300px);
			transform: translateX(-300px);
		}
		100% {
			-webkit-transform: translateX(0);
			transform: translateX(0);
		}
	}
	@keyframes slide-right {
		0% {
			-webkit-transform: translateX(-300px);
			transform: translateX(-300px);
		}
		100% {
			-webkit-transform: translateX(0);
			transform: translateX(0);
		}
	}

	.container-img {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.logoClose-button {
		background: none;
		border: 0 none;
		width: 100%;
	}

	@media (min-width: 1024px) {
		display: none;
	}

	.links-container {
		font-weight: 500;
		font-size: 18px;
		line-height: 22px;

		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 1em;

		color: white;

		border-bottom: 2px solid transparent;
		transition: ease-in-out 200ms;

		width: 100%;
	}

	.link--selected {
		border-bottom: 2px solid white;
		width: 100%;
	}
`;

export const Link = styled.a`
	width: 100%;
	cursor: pointer;

	font-family: "Fredoka";
	font-weight: 500;
	font-size: 1.3rem;
	line-height: 27px;

	text-indent: 25px;

	color: white;

	border-bottom: 2px solid transparent;

	transition: ease-in-out 200ms;

	&:hover {
		border-bottom: 2px solid white;
	}

	@media (min-width: 1024px) {
		display: none;
	}
`;
