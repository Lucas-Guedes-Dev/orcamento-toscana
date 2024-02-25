import React from "react"
import { ContainerInput, LabelInput, LabelInfo, ContainerTitleField } from "../../styles/InputStyles";
import CurrencyInput from 'react-currency-input-field';

interface InputMaskProps {
    value: string;
    onChange: (event: string) => void;
    text?: string;
    placeholder: string;
    info?: string;
    disabled?: boolean;
}

export const InputCoin: React.FC<InputMaskProps> = (props)=>{    
    const onChangeText = (value: any)=>{
        if (!value){
            value = '0';
        }
        props.onChange(value);  
    };

    return( 
        <ContainerInput>
            <LabelInput>{props.text}<LabelInfo>{props.info}</LabelInfo></LabelInput>
            <CurrencyInput disabled={props.disabled} placeholder={props.placeholder} prefix="R$ " value={props.value} decimalSeparator="," groupSeparator="." onValueChange={(value) => onChangeText(value)} />
        </ContainerInput>
    );
}

