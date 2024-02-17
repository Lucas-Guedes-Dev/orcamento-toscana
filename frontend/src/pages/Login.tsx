
import {ButtonLogin, BodyContainerLogin, ContainerLogin, FooterContainerLogin, HeaderContainerLogin, InputLogin, TitleLogin } from "../styles/LoginStyle";
export default function Login(){
    return(
        <ContainerLogin>
            <HeaderContainerLogin>
                <TitleLogin>Login</TitleLogin>
            </HeaderContainerLogin>
            <BodyContainerLogin>
                <InputLogin placeholder="Usuário"/>
                <InputLogin placeholder="Senha"/>
            </BodyContainerLogin>
            <FooterContainerLogin>
                <ButtonLogin>
                    Enviar
                </ButtonLogin>
            </FooterContainerLogin>
        </ContainerLogin>
    );
}