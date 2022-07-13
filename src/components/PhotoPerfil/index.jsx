import { useState, useContext } from "react";
import Profile from "../../assets/ProfileIcon.png";
import { DivImg, ModalPerfil } from "./style";
import { UserContext } from "../../context/user";

function PhotoPerfil() {
  const [open, setOpen] = useState(false);
  const { logout, user } = useContext(UserContext);

  return (
    <>
      <DivImg>
        <img
          src={Profile}
          className="perfil"
          alt="Perfil"
          onClick={() => setOpen(!open)}
        />
        {open ? (
          <ModalPerfil>
            {user.name}
            <button
              type="button"
              onClick={() => {
                logout();
              }}
              className="logout"
            >
              Logout
            </button>
          </ModalPerfil>
        ) : (
          ""
        )}
      </DivImg>
    </>
  );
}
export default PhotoPerfil;
