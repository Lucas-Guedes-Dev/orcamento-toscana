import React from "react"
import { ContainerSelect, LabelInput, SelectInputType } from "../../styles/InputStyles";

interface TextInputProps {
    values: Array<ValueProp>;
    onChange: (text: string)=>void;
    placeHolder?: string;
    text?: string;
}

interface ValueProp {
    value: string;
    text: string;
}

export const SelectType: React.FC<TextInputProps> = (props)=>{
    const onChangeText = (text: string)=>{
        props.onChange(text);
    };
    
    return( 
        <ContainerSelect>
            <LabelInput>{props.text}</LabelInput>
            <SelectInputType onChange={(event)=>{onChangeText(event.target.value)}}>
                { props.values.map((value, index)=>(
                    <option key={index} value={value.value}>{value.text}</option>
                ))}
            </SelectInputType>
        </ContainerSelect>
        
    );
}

