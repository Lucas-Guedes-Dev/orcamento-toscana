import styled from "styled-components";

export const PageContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: white;
    flex: 1;
    flex-direction: row;

    ::-webkit-scrollbar {
        width: 15px;
        height: 15px;
    }
   
    ::-webkit-scrollbar-track {
        background-color: rgba(255, 255, 255, 0.256); 
    }

    ::-webkit-scrollbar-thumb {
        background-color: rgba(255, 255, 255, 0.256);
        border-radius: 8px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: #555;
    }
`;

export const MainContainer = styled.div`
    display: flex;
    flex: 3;
    background-color: white;
    margin: 0px;
    position: relative;
    flex-direction: column;
`;

export const BodyContainer = styled.div`
    display: flex;
    flex: 8;
    justify-content: center;
    align-items: center;
    background-color: rgb(245, 245, 245);
`;

export const FooterContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`;