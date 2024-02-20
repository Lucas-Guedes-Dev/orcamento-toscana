import styled from "styled-components";

export const HeaderContainer = styled.div`
    flex: 1;
    justify-content: center;
    align-items: center;
    display: flex;
    background-color: #3D3D3D;
    flex-direction: row;
    box-shadow: 0px 15px 25px -35px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 15px 25px -35px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 15px 25px -35px rgba(0,0,0,0.75);
    
`;

export const ContainerLeft = styled.div`
    flex: 9;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-width: 80px; 
`;

export const ContainerRight = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContainerIconUser = styled.button`
    padding: 5%;
    border-radius: 300px;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(169, 169, 169);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #7b7b7b;
    :hover{
        background-color: #d7d7d7;
    }

    @media (max-width: 270px) {
        background-color: transparent !important;
        border: 0px;
        padding-inline: 5%;
    }
`;