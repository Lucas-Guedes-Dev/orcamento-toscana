import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`
export const ContainerCard = styled.div`
    display: flex;
    flex-direction: row;
    height: 200px;
    width: 300px;
    box-shadow: 9px 9px 80px -75px rgba(0,0,0,0.75);
    -webkit-box-shadow: 9px 9px 80px -75px rgba(0,0,0,0.75);
    -moz-box-shadow: 9px 9px 80px -75px rgba(0,0,0,0.75);
    border-radius: 8px;
    background-color: white;
    border: 2px solid transparent;
    &:hover{
        border: 2px solid #BF0811;
    }
`;

