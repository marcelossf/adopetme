import styled from "styled-components";

export const Main = styled.main`
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
			/* width: 148px; */
			/* height: 139px; */
			position: absolute;
			right: 0;
			bottom:0;
		}
	}
	@media (max-width: 1025px) {
		.redPaw {
			display: none;
		}
	}
`;

export const List = styled.ul`
	display: flex;
	flex-direction: row;
	align-items: center;
	overflow: scroll;
	margin-top: -13px;
	max-height: 345px;
	height: 331px;
	min-width: 271px;

	.imgFace {
		max-width: 124px;
		min-width: 103px;
	}

	.list-who {
		display: flex;
		flex-direction: column;
		align-content: center;
		align-items: center;
		margin-right: 16px;
		margin-top: 12px;
	}
	.container-informations {
		display: flex;
		flex-direction: column;
		background-color: #d9d9d9;
		border-radius: 30px;
		max-width: 153px;
		border-radius: 30px;
		max-height: 142px;
		justify-content: center;
		box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
		min-width: 141px;
		min-height: 121px;
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
		display: flex;
		align-items: center;
		justify-content: space-evenly;
	}

	.phrase-link,
	.phrase-git,
	.name {
		font-size: 15px;
		font-weight: 700;
		color: black;
		text-decoration: none;
	}

	@media (min-width: 1025px) {
		justify-content: center;
		overflow: hidden;

		.list-who {
			margin-right: 74px;
		}
	}

	@media (min-width: 800px) {
		justify-content: center;
	}
`;

export const DivText = styled.div`
	display: flex;
	justify-content: center;

	.title-ul {
		font-size: 35px;
		font-family: "Fredoka One";
		color: #f22222;
	}

	@media (max-width: 1025px) {
		display: none;
	}
`;
