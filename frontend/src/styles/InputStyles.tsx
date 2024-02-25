import styled from "styled-components";

export const ContainerInput = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-inline: 0.5rem;

    input {
        display: flex;
        flex: 1;
        min-height: 6vh;
        width: 95%;
        display: flex;
        flex: 1;
        color: #3D3D3D;
        font-size: 14px;
        background-color: transparent;
        border: 1px solid #757474;
        border-radius: 8px;
    }

    .react-datepicker-wrapper{
        width: 100%;
    }
`;

export const InputText = styled.input`
    display: flex;
    flex: 1;
    min-height: 6vh;
    width: 50%;
    display: flex;
    flex: 1;
    color: #3D3D3D;
    font-size: 14px;
    background-color: transparent;
    border: 1px solid #757474;
    border-radius: 8px;

`;

export const SelectInput = styled.select`
    display: flex;
    flex: 1;
    min-height: 7vh;
    width: 95%;
    display: flex;
    flex: 1;
    color: #3D3D3D;
    font-size: 14px;
    background-color: transparent;
    border: 1px solid #757474;
    border-radius: 8px;
`; 

export const SelectInputType = styled.select`
    display: flex;
    flex: 1;
    width: 30%;
    flex: 1;
    color: #3D3D3D;
    font-size: 20px;
    font-weight: bold;
    background-color: transparent;
    border: 1px solid #757474;
    border-radius: 8px;
`; 



export const ContainerSelect = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const ContainerTitleField = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
    width: 100%;
`;

export const LabelInfo = styled.label`
    font-weight: bold;
    color: #d12f37;
    flex: 1;
    display: flex;
    flex: 1;

    @media (max-width: 1048px) {
        display: none;
    }
`;

export const LabelInput = styled.label`
    display: flex;
    flex: 1;
    font-size: 14px;
    color: #3D3D3D;
    width: 100%;
`;

