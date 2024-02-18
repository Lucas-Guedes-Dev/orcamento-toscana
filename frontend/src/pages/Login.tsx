
import { useState } from 'react';
import { EyeOff, Eye } from 'react-feather';
import { postData } from '../serivce/api';
import { useNavigate } from 'react-router-dom'; // Importe useHistory

import { 
    ContainerInputLogin, 
    ButtonEye, 
    ButtonLogin, 
    BodyContainerLogin, 
    ContainerLogin, 
    FooterContainerLogin, 
    HeaderContainerLogin, 
    InputLogin, 
    TitleLogin 
} from "../styles/LoginStyle";

export default function Login(){
    const [ eyeOn, setEyeOn ] = useState(false);

    const navigate = useNavigate();
    
    const SendLogin = async () => {
        try{
            const response = await postData('/login', {username: 'teste', senha: 'teste'});
            localStorage.setItem('logado', response.login);
            navigate('/home');
        }catch (error){
            console.log(error)
        }
    }

    return(
        <ContainerLogin>
            <HeaderContainerLogin>
                <TitleLogin>Login</TitleLogin>
            </HeaderContainerLogin>
            <BodyContainerLogin>
                <ContainerInputLogin>
                    <InputLogin placeholder="Usuário"/>
                </ContainerInputLogin>
                <ContainerInputLogin>
                    <InputLogin placeholder="Senha" type={eyeOn ? "text" : "password"}/>
                    <ButtonEye onClick={()=>{setEyeOn(!eyeOn)}}>
                        { eyeOn ? 
                            (
                                <Eye size={15} style={{color: "rgb(80, 80, 80)", margin: 0}} />
                            ):(
                                <EyeOff size={15} style={{color: "rgb(80, 80, 80)", margin: 0}}/>
                            )
                        }
                    </ButtonEye>
                </ContainerInputLogin>
            </BodyContainerLogin>
            <FooterContainerLogin>
                <ButtonLogin onClick={SendLogin}>
                    Enviar
                </ButtonLogin>
            </FooterContainerLogin>
        </ContainerLogin>
    );
}