import styled from "styled-components";
import { SidebarProps } from "../types/TypesStyles";

export const SidebarContainer = styled.div<SidebarProps>`
    display: flex;
    position: relative;
    width: ${({ close }) => (close ? '80px' : '360px')}; 
    min-width: 60px; 
    height: 100%;
    background-color: #901717;
    flex-direction: column;
    color: white;
    box-shadow: 10px 0px 15px -1px rgba(0, 0, 0, 0.75);
    transition: width 0.3s ease; 
    z-index: 1;

    ::before {
        display: flex;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #901717;
        opacity: ${({ close }) => (close ? 0 : 1)}; 
        pointer-events: ${({ close }) => (close ? 'none' : 'auto')};
        transition: opacity 0.3s ease;
    }

    @media (max-width: 270px) {
        width: 100%;
    }
`;

export const HeaderSidebar = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #BF0811;
    
`;

export const LogoContainer = styled.div<SidebarProps>`
    display:flex;
    justify-content: center;
    align-items: center;
    min-height: 80px;

    @media (max-width: 270px) {
        display: none;
    }
`;

export const ChevronContainer = styled.button`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: transparent;
`;

export const BodySidebar = styled.div`
    display: flex;
    flex: 8;
    justify-content: flex-start;
    align-items: center;
    overflow: auto;
    flex-direction: column;
    padding: 2%;
    gap: 1%;
`;

export const FooterSidebar = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const TitleSideBar = styled.h2`
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 'bold';
`;

export const ButtonSideBar = styled.button`
    background-color: transparent;
    display: flex;
    width: 100%;
    height: 80px;
    color: white;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    border-radius: 0px;
`;

export const TextButtonSidebar = styled.label`
    font-size: 20px;
    display: flex;
    flex: 3;
    align-items: center;
    justify-content: flex-start;

    @media (max-width: 270px) {
        display: none;
    }
`
    
