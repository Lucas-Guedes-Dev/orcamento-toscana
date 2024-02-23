import React from "react"
import { ContainerInput, LabelInput } from "../../styles/InputStyles";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
interface DateInputProps {
    value: Date;
    onChange: (text: Date)=>void;
    placeHolder?: string;
    text?: string;
}

export const DateInput: React.FC<DateInputProps> = (props)=>{
    const onChangeDate = (date: Date)=>{
        props.onChange(date);
    };
    
    return( 
        <ContainerInput>
            <LabelInput>{props.text}</LabelInput>
            <DatePicker selected={props.value} onChange={onChangeDate} />
        </ContainerInput>
        
    );
}

