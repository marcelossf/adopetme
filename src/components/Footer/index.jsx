import React from "react";
import {
	Container,
	FootContainer,
	NavContainer,
	Separator,
	TitleContainer,
} from "./style";
// import FooterImg from "../../assets/gatinho.png";

export const Footer = ({ children }) => {
	return (
		<FootContainer>
			<Container>
				<img src="#" alt="" />
				<div className="text-container">
					<TitleContainer>
						<h2>Faça Parte dessa Corrente!</h2>
					</TitleContainer>
					<Separator></Separator>
					<NavContainer>{children}</NavContainer>
				</div>
			</Container>
		</FootContainer>
	);
};
