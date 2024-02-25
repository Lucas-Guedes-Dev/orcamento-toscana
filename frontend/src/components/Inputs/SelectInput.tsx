import React from "react"
import { ContainerInput, LabelInput, SelectInput, ContainerTitleField, LabelInfo } from "../../styles/InputStyles";

interface TextInputProps {
    values: Array<ValueProp>;
    onChange: (text: string)=>void;
    placeHolder?: string;
    text?: string;
    info?: string;
    disabled?: boolean;
    value?:string;
}

interface ValueProp {
    value: string;
    text: string;
}

export const Select: React.FC<TextInputProps> = (props)=>{
    const onChangeText = (text: string)=>{
        props.onChange(text);
    };
    
    return( 
        <ContainerInput>
            <LabelInput>{props.text}<LabelInfo>{props.info}</LabelInfo></LabelInput>
            <SelectInput value={props.value} disabled={props.disabled} onChange={(event)=>{onChangeText(event.target.value)}}>
                { props.values.map((value, index)=>(
                    <option key={index} value={value.value}>{value.text}</option>
                ))}
            </SelectInput>
        </ContainerInput>
        
    );
}

