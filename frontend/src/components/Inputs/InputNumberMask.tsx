import React, {ChangeEvent} from "react"
import { ContainerInput, LabelInput, InputText } from "../../styles/InputStyles";
interface InputMaskProps {
    value: string;
    onChange: (event: string) => void;
    placeholder: string;
    text: string;
}

export const InputNumber: React.FC<InputMaskProps> = (props)=>{    
    const onChangeText = (event:  ChangeEvent<HTMLInputElement>)=>{
        props.onChange(event.target.value);
    };
    
    return( 
        <ContainerInput>
            <LabelInput>{props.text}</LabelInput>
            <InputText
                type="text"
                id="currencyInput"
                value={props.value}
                onChange={onChangeText}
            />
        </ContainerInput>
    );
}

