import styled from "styled-components";

export const Container = styled.section`
	width: 100vw;
	padding: 2em 1em;

	background-color: var(--petroleumBlue);
	box-shadow: 0px 10px 15px 5px rgba(0, 0, 0, 0.25);

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2em;

	@media (min-width: 1024px) {
		justify-content: space-between;
		flex-direction: row;
	}

	.searchWrapper,
	.filterWrapper {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2em;
	}
	.searchWrapper {
		flex-direction: column;
	}

	@media (min-width: 1024px) {
		.searchWrapper,
		.filterWrapper {
			flex-direction: row;
			width: 50%;
		}
	}
`;

export const SloganContainer = styled.div`
	min-width: 100px;

	h2 {
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		font-family: "Fredoka";
		font-weight: 700;
		font-size: 1.8rem;

		letter-spacing: 0.06em;
		color: white;
	}
`;

export const FilterBox = styled.div`
	max-width: 200px;
	width: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
`;

export const FilterContainer = styled.div`
	background-color: var(--orange);
	max-width: 230px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	padding: 0 1rem;
	align-items: center;
	box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
	cursor: pointer;

	span {
		font-family: "Fredoka";
		font-weight: 700;
		font-size: 1.3rem;

		display: flex;
		align-items: center;
		letter-spacing: 0.06em;
		color: white;
	}

	svg {
		color: white;
		filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
	}
`;

export const SearchContaier = styled.div`
	width: 100%;
	max-width: 400px;
	display: flex;
	justify-content: center;
	align-items: center;

	input {
		width: 65%;
		height: 50px;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

		border-radius: 10px 0px 0px 10px;

		border: 0 none;
		padding-left: 1rem;
		font-size: 1rem;
		outline: none;

		::placeholder {
			color: #cfcfcf;
			font-family: Comfortaa;
		}
	}

	button {
		width: 58px;
		height: 50px;

		border-radius: 0px 10px 10px 0px;
		border: none;
		background-color: var(--orange);
		color: white;
	}
`;
