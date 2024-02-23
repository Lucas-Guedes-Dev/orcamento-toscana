import styled from "styled-components";
import DatePicker from "react-datepicker";

export const ContainerInput = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const InputText = styled.input`
    min-height: 5vh;
    width: 30vh;
    display: flex;
    flex: 1;
    color: #3D3D3D;
    font-size: 14px;
    background-color: transparent;
    border: 1px solid #757474;
    border-radius: 8px;
`;

export const LabelInput = styled.label`
    display: flex;
    flex: 1;
    font-size: 14px;
    color: #3D3D3D;
    padding-inline: 0.5%;
`;

export const DatePickerStyled = styled(DatePicker)`
    

`