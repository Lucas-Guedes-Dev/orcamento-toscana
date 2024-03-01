import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    flex: 1;
    justify-content: center;
    height: 100%;
    align-items: center;
    background-color: transparent;
`
export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    box-shadow: 6px 4px 21px -7px rgba(0,0,0,0.75);
    -webkit-box-shadow: 6px 4px 21px -7px rgba(0,0,0,0.75);
    -moz-box-shadow: 6px 4px 21px -7px rgba(0,0,0,0.75);
    border-radius: 8px;
    background-color: white;
    border: 2px solid transparent;
    &:hover{
        border: 2px solid #BF0811;
    }
`;

export const BodyCard = styled.div`
    display: flex;
    flex: 2;
    justify-content: center;
    align-items: center;
`;  

export const FooterCard = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const TextFooter = styled.h2`
    font-weight: bold;
    color: #3D3D3D;
`;


