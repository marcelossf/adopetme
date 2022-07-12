import styled from "styled-components";

export const Section = styled.section`
	background-color: #f2ae2f;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;

	position: fixed;
	top: 10px;
	left: 0;
	z-index: 9999;

	max-width: 310px;
	width: 100%;
	max-height: 350px;
	height: 100%;
	padding-right: 2em;

	border-radius: 0px 25px 25px 0px;

	-webkit-animation: slide-right 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
		both;
	animation: slide-right 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

	.container-img {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;

		width: 100%;

		cursor: pointer;
	}

	.menu-links {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.link-menu {
		padding: 2px;

		font-family: "Fredoka";
		font-weight: 500;
		font-size: 18px;
		line-height: 22px;

		display: flex;
		align-items: center;
		text-indent: 25px;

		color: white;

		animation: scale-up-hor-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1)
			both;

		border-bottom: 2px solid transparent;
		transition: ease-in-out 200ms;
		cursor: pointer;

		&:hover {
			border-bottom: 2px solid white;
		}
	}

	.link-menu--selected {
		border-bottom: 2px solid white;
	}

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

	.logoBlack {
		max-width: 273px;
		min-width: 195px;
		margin-top: 12px;
	}
	.logoClose {
		max-width: 39px;
		min-width: 29px;
		margin-top: 19px;
	}
`;
