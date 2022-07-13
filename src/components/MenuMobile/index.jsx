import LogoBlack from "../../assets/adoPetPreto.png";
import Close from "../../assets/fechar.png";
import { Section } from "./style";

const MenuMobile = ({ OpenModal, selected, children }) => {


	return (
		<Section>
			<div className="container-img">
				<img className="logoBlack" src={LogoBlack} alt="AdoPetMe" />
				<button className="logoClose-button">
					<img
						onClick={OpenModal}
						className="logoClose"
						src={Close}
						alt="LogoClose"
					/>
				</button>
			</div>
			<div className="links-container">{children}</div>
		</Section>
	);
};

export default MenuMobile;
