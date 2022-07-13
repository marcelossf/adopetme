import styled from "styled-components";

export const ParagraphWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	.paragraph-container {
		display: flex;
		flex-direction: column;
		
		@media(min-width:1000px){
		flex-direction: row;
		}
	.paragraph {
		background-color: #4db1b3;
		box-shadow: 1px 2px 3px 5px #4db1b3;
		color: white;

		display: flex;
		align-items: center;

		text-align: center;
		line-height: 25px;
		font-weight: 700px;
		font-size: 1rem;

		padding: 0.5em;
		margin-bottom: 2.5em;

		width: 100%;
		height: 250px;
		min-height: 157px;
		@media(min-width:1000px){
			text-align: justify;
			padding: 0 2em;
		}
	}
	.div-half {
		display: none;

		@media(min-width:1000px){
			display: block;
			position: relative;

			height: 250px;
			border: 2px solid var(--orange);
			border-radius: 2px;
			
			background-color: #f2ae2f;
		}
	}
}
		.redPaw {
			position: absolute;
			right: 0;
			bottom:0;
			@media (max-width: 1000px) {
					display: none;
			}
		}
	}
`;

export const List = styled.ul`
	display: flex;
	flex-direction: row;
	align-items: center;
	overflow: scroll;
	gap: 3em;

	height: 350px;
	width: 100%;

	margin: 4em auto;
	@media (min-width: 1000px) {
		overflow: hidden;
		justify-content: center;
	}

	.list-who {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1em;
	}

	.imgFace {
		max-width: 124px;
		min-width: 103px;
	}
	p.name {
		font-size: 1.3rem;
	}
	.container-informations {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		gap: 1em;

		padding: 2em;

		background-color: #d9d9d9;

		border-radius: 30px;
		box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
	}
	.logoLink,
	.logoGit {
		max-width: 31px;
		max-height: 31px;
		min-width: 23px;
		min-height: 26px;
	}

	.box-link,
	.box-git {
		width: 100%;
		display: flex;
		gap: 0.5em;
		align-items: center;
		justify-content: space-between;
	}

	.phrase-link,
	.phrase-git,
	.name {
		font-weight: 700;
	}
`;

export const DivText = styled.div`
	display: flex;
	justify-content: center;

	.title-ul {
		font-size: 2.3rem;
		font-family: "fredoka";
		color: var(--red);
	}

	@media (max-width: 1025px) {
		display: none;
	}
`;
