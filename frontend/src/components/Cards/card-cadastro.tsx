import React from "react"
import { ContainerCard, Container } from "../../styles/CardStyle";

interface CardProps {
    text?: string;
    icon?: React.ReactElement
}

export const CardCadastro: React.FC<CardProps> = (props)=>{    

    return( 
        <Container>
            <ContainerCard>
                
            </ContainerCard>
        </Container>
    );
}

