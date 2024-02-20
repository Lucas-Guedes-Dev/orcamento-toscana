import styled from "styled-components";

export const ContainerLogin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60vh;
    height: 60vh;
    aspect-ratio: 1; 
    border-radius: 8px;
    flex-direction: column;
    background-color: white;

    @media (max-width: 768px) {
        width: 50vh;
        height: 55vh;
    }

    @media (max-width: 500px) {
        width: 40vh;
        height: 55vh;
    }
`;

export const HeaderContainerLogin = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    padding: 2%;
`;

export const BodyContainerLogin = styled.div`
    display: flex;
    flex: 2;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    padding-inline: 2%;
`;

export const FooterContainerLogin = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 2%;
`;

export const ContainerInputLogin = styled.div`  
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    border-bottom: 2px solid rgb(80, 80, 80);
    width: 80%;
    height: 20%;
`;


export const InputLogin = styled.input`
    background-color: transparent;
    border: 0px;
    color: rgb(80, 80, 80);
    width: 100%;
    :focus{
        outline: none;
    }
`;

export const TitleLogin = styled.h2`
    font-weight: bold;
    color: black;
`;

export const ButtonLogin = styled.button`
    background-color: #BF0811;
    color: white;
`;

export const ButtonEye = styled.button`
    background-color: transparent;
    padding: 0;
`;
