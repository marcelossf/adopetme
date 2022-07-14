import { useContext, useEffect, useState } from "react";

import { AnimalsListContext } from "../../context/animals";
import { PetOngContext } from "../../context/ong";
import { SearchContext } from "../../context/search";
import { UserContext } from "../../context/user";

import Card from "../Card";
import { Loading } from "../Loading";

import { ContainerVitrine } from "./styles";

function Vitrine() {
	const { pets, loading } = useContext(AnimalsListContext);
	const { input, filtredPets } = useContext(SearchContext);
	const { user } = useContext(UserContext);
	const { ongPets } = useContext(PetOngContext);

	return (
		<ContainerVitrine>
			{loading ? (
				<Loading />
			) : (
				<>
					{user && user.type === "ong" ? (
						<>
							<h1 className="fraseVitrine ">
								Seus
								<span style={{ color: "red" }}> Pets</span>!
							</h1>
							<ul className="vitrine-container vitrine-container--Ong">
								{ongPets?.map((pet) => {
									return (
										<li key={pet.id}>
											<Card pet={pet} />
										</li>
									);
								})}
							</ul>
						</>
					) : (
						<>
							{filtredPets.length === 0 ? (
								<>
									<h1 className="fraseVitrine">
										Amigo não se compra,
										<span style={{ color: "red" }}>
											adote
										</span>
										!
									</h1>
									<ul className="vitrine-container vitrine-container--HomePage">
										{pets
											?.filter(
												({ petName, species }) =>
													petName
														.toLowerCase()
														.includes(
															input.toLowerCase()
														) ||
													species
														.toLowerCase()
														.includes(
															input.toLowerCase()
														)
											)
											.map((pet) => (
												<li key={pet.id}>
													<Card pet={pet} />
												</li>
											))}
									</ul>
								</>
							) : filtredPets.length > 0 ? (
								<>
									<ul className="vitrine-container">
										{filtredPets.length > 0 ? (
											filtredPets.map((pet) => (
												<li key={pet.id}>
													<Card pet={pet} />
												</li>
											))
										) : (
											<h1> Pet não encontrado :( </h1>
										)}
									</ul>
								</>
							) : (
								<>
									<h1>sem dog</h1>
								</>
							)}
						</>
					)}
				</>
			)}
		</ContainerVitrine>
	);
}

export default Vitrine;
