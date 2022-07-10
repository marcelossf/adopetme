import styled from "styled-components";

export const FootContainer = styled.footer`
	width: 100%;
	display: flex;
	background-color: var(--green);
`;

export const Container = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	flex-direction: row;
	min-height: 200px;
	max-height: 300px;
	padding: 0 1rem;

	img {
		display: none;
	}

	@media (min-width: 768px) {
		& {
			display: flex;
			align-items: center;
			justify-content: space-evenly;
			width: 100vw;
		}

		img {
			display: flex;
			max-width: 248px;
			max-height: 248px;
			border-radius: 50%;
			background-color: black;
		}
	}
	.text-container {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;

		margin: 0 0 0 auto;
		@media (max-width: 450px) {
			& {
				width: 100%;
			}
		}
		@media (max-width: 376px) {
			& {
				gap: 0;
			}
		}
	}
`;

export const TitleContainer = styled.div`
	width: 165px;
	margin: 0 30px;

	@media (min-width: 768px) {
		margin: 0 70px;
		width: 200px;
	}
	@media (max-width: 450px) {
		& {
			margin: 0px;
		}
	}
	h2 {
		font-family: "Fredoka";
		font-style: normal;
		font-weight: 700;
		font-size: 32px;

		line-height: 39px;
		width: 100%;

		display: flex;
		text-align: start;
		align-items: center;

		color: #f2f2f2;
		text-shadow: 6px 4px 4px rgba(0, 0, 0, 0.25);

		@media (min-width: 768px) {
			& {
				font-size: 38px;
				line-height: 45px;
			}
		}
		@media (max-width: 450px) {
			& {
				font-size: 25px;
				line-height: 30px;
			}
		}
	}
`;

export const Separator = styled.div`
	background-color: white;

	height: 120px;
	width: 2px;
	border-radius: 1em;

	@media (min-width: 768px) {
		height: 150px;
	}

	@media (max-width: 376px) {
		display: none;
	} ;
`;

export const NavContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-end;
	/* gap: 10px; */
	gap: 10px;

	padding: 0 10px;

	font-size: 1.2rem;
	line-height: 25px;
	font-weight: 700;

	@media (min-width: 768px) {
		font-size: 1.4em;
		line-height: 30px;

		padding: 0 70px;
	}

	@media (max-width: 450px) {
		font-size: 16px;
		padding: 0;
		line-height: 20px;
	}

	a {
		color: #ffffff;
		text-align: right;
		transition: all 200ms;
		width: 100%;
		&:hover {
			text-decoration: underline;
			text-decoration-color: #d9d9d9;
		}
	}
`;
