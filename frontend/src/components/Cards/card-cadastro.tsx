import React from "react"
import { ContainerCard, Container, BodyCard, FooterCard, TextFooter } from "../../styles/CardStyle";
import { useNavigate, NavigateOptions } from "react-router-dom";

interface CardProps {
    text: string;
    icon: React.ReactElement
    page: string;
    optionsPage?: NavigateOptions
}

export const CardCadastro: React.FC<CardProps> = (props)=>{   
    const navigate = useNavigate();

    const onCardPress = () => {
        navigate(props.page, props.optionsPage)
    }

    return( 
        <Container onClick={onCardPress}>
            <ContainerCard>
                <BodyCard>
                    {props.icon}
                </BodyCard>
                <FooterCard>
                    <TextFooter>
                        {props.text}
                    </TextFooter>
                </FooterCard>
            </ContainerCard>
        </Container>
    );
}

