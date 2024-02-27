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
    z-index: 0;
`;

export const BodyContainer = styled.div`
    display: flex;
    flex: 8;
    justify-content: center;
    align-items: center;
    background-color: rgb(245, 245, 245);
    padding: 4%;
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
        padding: '0px'
    },
};

export const ContainerModal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130vh;
    height: 90vh;
    background-color: rgb(245, 245, 245);
`

