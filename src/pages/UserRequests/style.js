import styled from "styled-components";

export const HeaderContainer = styled.header`
	width: 100%;
	margin: 0 auto;

	display: flex;
	flex-direction: row;
	@media (min-width: 768px) {
		gap: 1em;
		flex-direction: column;
	}
`;

export const NAVCONTAINER_MOBILE = styled.nav`
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
	max-width: 1450px;

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
		font-size: 2rem;
		letter-spacing: 0.06em;
		line-height: 40px;
		text-align: center;

		width: 220px;

		@media (min-width: 450px) {
			font-size: 2.5em;
			line-height: 48px;
		}
		@media (min-width: 1024px) {
			font-size: 3.5em;
			width: 320px;
			line-height: 60px;
		}
	}
`;

export const MainContainer = styled.main`
	width: 100%;
	margin-bottom: 90px;
	padding: 0 1em 0 0;

	.request-container {
		height: 600px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;

		@media (min-width: 1024px) {
			margin: 0 auto;
			width: 70%;
		}
	}

	.request-caption {
		background: #3b8788;

		border-top-right-radius: 15px;
		width: 100%;
		max-width: 70%;
		padding: 1em;

		color: var(--white);
		text-shadow: 2px 2px 4px #000000;

		font-weight: 700;
		font-size: 16px;
		font-family: fredoka;
		line-height: 19px;
		letter-spacing: 0.06em;

		text-transform: uppercase;
		text-align: center;

		@media (min-width: 768px) {
			font-size: 18px;
			line-height: 25px;
			max-width: 40%;
		}
		@media (min-width: 1024px) {
			font-size: 24px;
			line-height: 31px;
			border-top-left-radius: 15px;
		}
	}
`;
