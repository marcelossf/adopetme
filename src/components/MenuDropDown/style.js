import styled from "styled-components";

export const InnerMenu = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 0.5rem 1rem;

	background-color: var(--orange);
	width: 100%;

	transition: ease-in-out 200ms;

	&:hover {
		filter: brightness(90%);
	}

	span {
		font-family: "Fredoka";
		font-weight: 700;
		font-size: 1.3rem;

		padding: 0.5em 0;
		display: flex;
		align-items: center;
		text-align: center;
		letter-spacing: 0.02em;
		color: white;
	}

	svg {
		color: white;
		filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
	}
`;

export const InnerContaier = styled.div`
	display: flex;
	flex-direction: column;
	background-color: white;
	width: 90%;
	margin: 0 auto;
	gap: 1rem;
	border-radius: 10px;
`;

export const FilterContent = styled.div`
	display: flex;
	align-items: center;
	padding: 0.5rem 1rem;
	color: var(--orange);
	transition: ease-in-out 200ms;

	&:hover,
	span:hover {
		color: var(--petroleumBlue);
	}

	svg {
		color: var(--orange);
		filter: drop-shadow(0px 7px 3px rgba(0, 0, 0, 0.3));
		transition: ease-in-out 200ms;
	}

	span {
		font-family: "Fredoka";
		font-weight: 700;
		font-size: 1.3rem;

		display: flex;
		align-items: center;
		color: var(--orange);

		transition: ease-in-out 200ms;
	}
`;
