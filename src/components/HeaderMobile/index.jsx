import { useState } from "react";
import LogoAdopetme from "../../assets/logoAdopet.png";
import Menu from "../../assets/Menu.png";
import MenuMobile from "../MenuMobile";
import { NavMobile } from "./style";

const HeaderMobile = ({ children, selected }) => {
	const [open, setOpen] = useState(false);
	
	const OpenModal = () => {
		setOpen(!open);
	};

	return (
		<>
			<NavMobile>
				<button className="menuMobile-button">
					<img onClick={OpenModal} src={Menu} alt="Menu" />
				</button>
				<img src={LogoAdopetme} alt="logo" className="imgLogo" />
				{open === true && (
					<MenuMobile OpenModal={OpenModal} selected={selected}>
						{children}
					</MenuMobile>
				)}
			</NavMobile>
		</>
	);
};

export default HeaderMobile;
