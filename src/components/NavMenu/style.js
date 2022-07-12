import styled from "styled-components";

export const NavContainer = styled.div`
	display: flex;
	width: 787px;
	justify-content: center;

	@media (max-width: 1024px) {
		display: none;
	}

	@media (min-width: 1024px) {
		font-family: "Comfortaa";
		font-weight: 700;
		font-size: 15px;
		line-height: 22px;
		text-align: center;

		display: inline-flex;
		align-items: center;
		justify-content: space-between;
		gap: 2em;

		margin: 0 auto;
		max-width: 70%;
		width: 100%;
		color: white;

		border-radius: 10px;
		border: 0 none;
	}

	.button-selected {
		box-shadow: 0px 0px 19px 6px rgba(0, 0, 0, 0.63) inset;
	}
`;
