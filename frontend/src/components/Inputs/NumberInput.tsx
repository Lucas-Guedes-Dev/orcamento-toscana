import React from "react"
import { InputText, ContainerInput, LabelInput, LabelInfo, ContainerTitleField } from "../../styles/InputStyles";

interface TextInputProps {
    value: number;
    onChange: (text: number)=>void;
    placeHolder?: string;
    text?: string;
    info?: string;
}

export const NumberInput: React.FC<TextInputProps> = (props)=>{
    const onChangeNumber = (number: string)=>{
        let newNumber = number;
        if (!newNumber){
            newNumber='0';
        }
        
        const numericValue = parseInt(newNumber, 10);

        props.onChange(numericValue);
    };
    
    return( 
        <ContainerInput>
            <LabelInput>{props.text}<LabelInfo>{props.info}</LabelInfo></LabelInput>
            <InputText type="text" placeholder={props.placeHolder} value={props.value} onChange={(event)=>{onChangeNumber(event.target.value)}} />
        </ContainerInput>
    );
}

