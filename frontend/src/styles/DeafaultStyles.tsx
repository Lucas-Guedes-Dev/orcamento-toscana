import styled from "styled-components";

export const PageContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: white;
    flex: 1;
    flex-direction: row;

    overflow: hidden;
`;

export const MainContainer = styled.div`
    display: flex;
    flex: 3;
    background-color: white;
    margin: 0px;
    position: relative;
    flex-direction: column;
    z-index: 0;
`;

export const BodyContainer = styled.div`
    display: flex;
    flex: 8;
    justify-content: center;
    align-items: center;
    background-color: rgb(245, 245, 245);
    padding: 4%;
    gap: 3%;
    flex-direction: column;
`;

export const RowContainer = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const FooterContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const customStyles = {
    content: {
        top: '50%',
        left: '55%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '0px',
        borderRadius: '20px'
    },
};

export const ContainerModal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150vh;
    height: 90vh;
    background-color: rgb(245, 245, 245);
    flex-direction: column;
    border-radius: 20px;
`;

export const HeaderModal = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    background-color: #f1f1f1;
    width: 100%;
    height: 100%;
`;


export const BodyModal = styled.div`
    display: flex;
    flex: 6;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background-color: white;
    width: 100%;
    height: 100%;
`;

export const FooterModal = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background-color: #f1f1f1;
    width: 100%;
    height: 100%;
`;

export const TitleModal = styled.h2`
    margin-left: 2%;
    font-weight: bold;
    color: black;
`;

export const ColumnFooterModal = styled.div`
    display: flex;
    flex : 1;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const BuildButton = styled.button`
    display: flex;
    flex: 1;
    color: white;
    font-size: large;
    font-weight: bold;
    padding: 4%;
    border-radius: 8px;
    background-color: #BF0811;
    justify-content: center;
    align-items: center;
    max-width: 90%;
    max-height: 90%;

    &:hover{
        background-color: #e95158;
    }

    &:active{
        background-color: #3d3d3d;
        color: white;
    }
`;

export const ButtonTable = styled.button`
    padding: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: #3D3D3D;

    &:hover{
        color: #BF0811;
    }
`;
