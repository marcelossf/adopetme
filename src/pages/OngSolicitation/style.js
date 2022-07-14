import styled from "styled-components";

export const Container = styled.div`
	.empty {
		display: flex;
		justify-content: center;
		align-items: center;

		background: rgba(77, 177, 179, 1);
		border: 5px solid var(--orange);
		color: white;

		letter-spacing: 0.06em;

		max-width: 1300px;
		width: 100%;
		border-radius: 15px;
		margin: 0 auto;
		height: 200px;
	}

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 2rem;
`;
