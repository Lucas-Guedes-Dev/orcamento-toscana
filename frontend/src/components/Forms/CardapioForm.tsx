import React, { useEffect, useState } from "react"
import { ContainerForm, RowContainer, HeaderForm, TitleForm, FooterForm, ButtonBuild, SectionFooter} from "../../styles/FormsStyles";

import { CadapFormType } from "../../types/CardapioTypes";

interface CardapioProps{
    fieldList?: Array<React.ReactElement>;
    onPress: (event: CadapFormType)=>void;
}

export const CardapioForm: React.FC<CardapioProps> = (props)=>{    
    return( 
        <ContainerForm>
            <HeaderForm>
                <TitleForm>Cardapio</TitleForm>
            </HeaderForm>
            <SectionFooter>
                
            </SectionFooter>
            <FooterForm>
            </FooterForm>
        </ContainerForm>
    );
}

