import styled from "styled-components";

import selector from "../../assets/topic-request.png";
export const HeaderContainer = styled.header`
	/* background-color: aqua; */
	/* max-width: 1400px; */
	width: 100%;
	margin: 0 auto;
	/* padding: 0 1em; */

	display: flex;
	flex-direction: row;
	@media (min-width: 768px) {
		gap: 1em;
		flex-direction: column;
	}
`;

export const NavContainer_mobile = styled.nav`
	margin-top: 1em;
	position: relative;

	.Menu-button {
		position: fixed;
		background: 0 none;
		border: 0 none;
		z-index: 2;
	}

	@media (min-width: 768px) {
		display: none;
	} ;
`;

export const Title = styled.div`
	max-width: 1300px;
	width: 100%;

	margin: 0 auto 30px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (min-width: 768px) {
		padding: 0 2em;

		justify-content: space-around;
		flex-direction: row;
		align-items: center;
	}
	@media (min-width: 1024px) {
		justify-content: space-between;
	}

	.Logo {
		margin-top: 0.5em;
		max-width: 250px;
		width: 100%;

		@media (min-width: 450px) {
			max-width: 350px;
		}
		@media (min-width: 768px) {
			max-width: 300px;
			margin: 0;
		}
		@media (min-width: 1024px) {
			max-width: 600px;
		}
	}

	h1 {
		color: rgba(151, 71, 255, 1);
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

		font-weight: 700;
		font-size: 36px;
		letter-spacing: 0.06em;
		line-height: 40px;
		text-align: center;

		width: 220px;

		@media (min-width: 450px) {
			font-size: 40px;
			line-height: 48px;
		}
	}
`;

export const MainContainer = styled.main`
	width: 100%;
	margin-bottom: 30px;
	padding: 0 1em 0 0;

	.request-container {
		width: 100%;
		height: 100%;
		min-height: 300px;
	}

	.request-caption {
		background: #4db1b3;

		border-top-right-radius: 15px;
		width: 100%;
		max-width: 70%;
		padding: 1em;

		color: #d9d9d9;
		text-shadow: 2px 2px 4px #000000;

		font-weight: 700;
		font-size: 16px;
		font-family: fredoka;
		line-height: 19px;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		text-align: center;
	}

	.request-table {
		background: #4db1b3;

		border-top-right-radius: 15px;
		border-bottom-right-radius: 15px;

		padding: 1em 1.5em;
		width: 100%;
		max-width: 1260px;
		height: 100%;
		min-height: 300px;
		max-height: 800px;

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
			}
		}

		.table-data {
			transition: transform 200ms;

			display: flex;
			justify-content: space-evenly;

			align-items: center;
			gap: 1em;
			padding: 1em 0;

			td {
				width: 100%;
				color: #ffffff;

				text-align: center;
				font-weight: 700;
				font-size: 14px;
				line-height: 17px;
			}
		}
		.first {
			display: flex;
			align-items: center;

			span {
				content: url(${selector});

				display: inline-block;

				opacity: 0;
				transition: opacity 200ms;
			}
		}

		.table-data :hove {
			transform: none;
		}
		.table-data:hover > .first > span {
			opacity: 1;
		}
	}
`;
