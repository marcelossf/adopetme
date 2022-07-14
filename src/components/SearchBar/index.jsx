import React, { useContext, useState } from "react";
import { ImSearch } from "react-icons/im";
import { IoMdArrowDropdown } from "react-icons/io";
import { SearchContext } from "../../context/search";
import { Button } from "../Button";
import { FilterDropDown } from "../FilterDropDown";
import {
	Container,
	FilterBox,
	FilterContainer,
	SearchContaier,
	SloganContainer,
} from "./style";

export const SearchBar = () => {
	const { setInput } = useContext(SearchContext);
	const [active, setActive] = useState(false);
	const { setFiltredPets } = useContext(SearchContext);

	return (
		<Container>
			<div className="searchWrapper">
				<SloganContainer>
					<h2>Adote um amigo!</h2>
				</SloganContainer>
				<SearchContaier>
					<input
						onChange={(event) => setInput(event.target.value)}
						type="text"
						placeholder="Procure aqui."
					/>
					<button>
						<ImSearch size={30} />
					</button>
				</SearchContaier>
			</div>

			<div className="filterWrapper">
				<Button onClick={() => setFiltredPets([])}>
					Limpar Filtros
				</Button>

				<FilterBox>
					<FilterContainer onClick={() => setActive(!active)}>
						<span>Filtros</span>
						<IoMdArrowDropdown size={50} />
					</FilterContainer>
					{active && <FilterDropDown />}
				</FilterBox>
			</div>
		</Container>
	);
};
