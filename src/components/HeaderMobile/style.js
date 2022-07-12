import styled from "styled-components";

export const Head = styled.header`
	background: #f2f2f2;
	box-shadow: -3px 7px 9px 2px rgb(0 0 0 / 25%);

	display: flex;
	justify-content: space-between;
	align-items: center;

	width: 100%;

	.menuMobile-button {
		position: fixed;
		z-index: 9999;
		top: 4px;
		left: 0;

		cursor: pointer;
		width: fit-content;

		border: 0 none;
		background: none;

		@media (min-width: 450px) {
			top: 10%;
		}
	}

	.imgLogo {
		width: 100%;
		max-width: 398px;
		height: auto;
		min-height: 99px;
		/* padding-right: 10px; */
	}

	.pawsLogo,
	.logo-circle {
		display: none;
	}

	@media (min-width: 1024px) {
		background-color: #f2ae2f;
		box-shadow: -3px 7px 9px 2px rgb(0 0 0 / 25%);

		padding: 1em;
		top: 0;

		position: fixed;
		z-index: 9999;

		.imgLogo,
		.imgMenu {
			display: none;
		}

		.logo-nav {
			width: 130px;
			height: 130px;
			padding: 1%;
			/* background-color: #f2f2f2; */
			position: relative;
		}
		.logo-circle {
			margin: 0 auto;
			width: 100%;
			height: 100%;

			border-radius: 50px;

			background-color: #e9a82f;
			box-shadow: -3px 7px 9px 2px rgba(0, 0, 0, 0.25);

			display: block;
		}

		.pawsLogo {
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;

			position: absolute;
			width: 117px;

			display: block;
		}
	}
`;

// export const StyledButton = styled.button`
// 	@media (max-width: 1024px) {
// 		display: none;
// 	}
// 	@media (min-width: 1024px) {
// 		padding: 0.5rem 2rem;
// 		color: white;
// 		font-family: "Comfortaa";
// 		font-style: normal;
// 		font-weight: 700;
// 		font-size: 15px;
// 		line-height: 22px;
// 		display: flex;
// 		align-items: center;
// 		text-align: center;
// 		box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);
// 		border-radius: 10px;
// 		border: none;
// 		background-color: var(--petroleumBlue);
// 		margin-right: 32px;
// 		display: block;
// 		&:hover {
// 			box-shadow: inset 0px 0px 19px 6px rgba(0, 0, 0, 0.63);
// 		}
// 	}
// `;
