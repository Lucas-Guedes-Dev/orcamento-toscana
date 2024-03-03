import React, { useEffect, useState } from "react"
import { ContainerForm, RowContainer, HeaderForm, TitleForm, FooterForm, ButtonBuild, SectionFooter} from "../../styles/FormsStyles";

import { MenuFormType } from "../../types/CardapioTypes";

interface CardapioProps{
    fieldList?: Array<React.ReactElement>;
    onPress: (event: MenuFormType)=>void;
}

export const MenuForm: React.FC<CardapioProps> = (props)=>{    

    const onPressRegister = () => {

    }

    return( 
        <ContainerForm>
            <HeaderForm>
                <TitleForm>Cardapio</TitleForm>
            </HeaderForm>
            <SectionFooter>
                
            </SectionFooter>
            <FooterForm>
                <SectionFooter></SectionFooter>
                <SectionFooter></SectionFooter>
                <SectionFooter>
                    <ButtonBuild onClick={onPressRegister}>Cadastrar</ButtonBuild>
                </SectionFooter>
            </FooterForm>
        </ContainerForm>
    );
}

