import styled from "styled-components";

export const ContainerForm = styled.div`
    display: flex;
    flex: 1;
    background-color: white;
    border-radius: 12px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    box-shadow: 10px 9px 30px -4px rgba(0,0,0,0.35);
    -webkit-box-shadow: 10px 9px 30px -4px rgba(0,0,0,0.35);
    -moz-box-shadow: 10px 9px 30px -4px rgba(0,0,0,0.35);
`;

export const RowContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
`;

export const HeaderForm = styled.div`
    display: flex;
    flex: 1;
    max-height: 60px;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    background-color: rgb(225, 225, 225);
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    flex-direction: row;
`;

export const FooterForm = styled.div`
    display: flex;
    flex: 1;
    max-height: 60px;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    background-color: rgb(225, 225, 225);
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
`;

export const SectionFooter = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TitleForm = styled.h2`
    font-weight: bold;
    color: #3d3d3d;
    padding: 1%;
`;

export const ButtonBuild = styled.button`
    width: 100%;
    height: 70%;
    border-radius: 8px;
    background-color: #BF0811;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 18px;
    font-weight: bold;
    margin-inline: 10px;

    &:active{
        background-color: #d12f37;
    }

    @media (max-width: 270px) {
        font-size: 10px;
    }
`;