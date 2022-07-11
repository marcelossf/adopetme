import { Modal } from "@mui/material"
import { useState, useContext } from "react"
import Profile from "../../assets/ProfileIcon.png"
import {DivImg,ModalPerfil} from "./style"
import {LoginLogoutContext} from '../../context/login-logout';
 

function PhotoPerfil (){
    const [open, setOpen] = useState(false) 
    const {logado, changeLogado} = useContext(LoginLogoutContext);

    const logout = () => {
        changeLogado();
        localStorage.removeItem('token');
        console.log(logado)
      };
    return(

        <>
        <DivImg>

            <img src={Profile} className="perfil" alt="Perfil" onClick={()=>setOpen(!open)}/>
            {open?(
              
            <ModalPerfil>


                {"Name"}
                    <button type="button" onClick={() => {
                        logout();
                        }} className="logout">Logout
                    </button>
        </ModalPerfil>):('')}
        </DivImg>
      
        
        </>

    )


}export default PhotoPerfil