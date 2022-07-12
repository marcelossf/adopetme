import { Modal } from "@mui/material"
import { useState, useContext } from "react"
import Profile from "../../assets/ProfileIcon.png"
import {DivImg,ModalPerfil ,Divtotal} from "./style"
import {LoginLogoutContext} from '../../context/login-logout';
 

function PhotoPerfil (){
    const [open, setOpen] = useState(false) 
    const {logado, changeLogado} = useContext(LoginLogoutContext);
    const user = JSON.parse(localStorage.getItem('user'))
    const {name} = user
    const logout = () => {
        changeLogado();
        localStorage.removeItem('token');
        console.log(logado)
      };
    return(

        <Divtotal>
        <DivImg >

            <img src={Profile} className="perfil" alt="Perfil" onClick={()=>setOpen(!open)}/>
           
        </DivImg>
       {open?(
              
            <ModalPerfil>


                {name}
                    <button type="button" onClick={() => {
                        logout();
                        }} className="logout">Logout
                    </button>
        </ModalPerfil>):('')}
        
        </Divtotal>

    )


}export default PhotoPerfil