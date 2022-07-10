import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";

const UserRequest = () => {
	return (
		<>
			<Footer>
				<Link to="/">Início</Link>
				<Link to="">Quero adotar</Link>
				<Link to="/">Solicitações</Link>
			</Footer>
		</>
	);
};

export default UserRequest;
