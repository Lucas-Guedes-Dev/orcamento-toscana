
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
    InputLogin 
} from "../styles/LoginStyle";
import LogoToscana from '../components/Icons/LogoToscana';

export default function Login(){
    const [ eyeOn, setEyeOn ] = useState(false);
    const [password, setPassword] = useState<string>();
    const [username, setUsername] = useState<string>();

    const navigate = useNavigate();
    
    const SendLogin = async () => {
        try{
            const response = await postData('/login', {username: username, password: password});
            localStorage.setItem('logado', response.login);
            navigate('/home');
        }catch (error){
            // console.log(error)
        }
    }

    return(
        <ContainerLogin>
            <HeaderContainerLogin>
                <LogoToscana width={150}/>
            </HeaderContainerLogin>
            <BodyContainerLogin>
                <ContainerInputLogin>
                    <InputLogin onChange={(event)=>{setUsername(event.target.value)}} placeholder="Usuário"/>
                </ContainerInputLogin>
                <ContainerInputLogin>
                    <InputLogin onChange={(event)=>{setPassword(event.target.value)}} placeholder="Senha" type={eyeOn ? "text" : "password"}/>
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