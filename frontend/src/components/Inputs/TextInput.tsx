import React from "react"
import { InputText, ContainerInput, LabelInput } from "../../styles/InputStyles";

interface TextInputProps {
    value: string;
    onChange: (text: string)=>void;
    placeHolder?: string;
    text?: string;
}

export const TextInput: React.FC<TextInputProps> = (props)=>{
    const onChangeText = (text: string)=>{
        props.onChange(text);
    };
    
    return( 
        <ContainerInput>
            <LabelInput>{props.text}</LabelInput>
            <InputText placeholder={props.placeHolder} value={props.value} onChange={(event)=>{onChangeText(event.target.value)}} />
        </ContainerInput>
    );
}

