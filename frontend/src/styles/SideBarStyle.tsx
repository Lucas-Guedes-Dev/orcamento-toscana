import styled, {css} from "styled-components";
import { SidebarProps } from "../types/TypesStyles";

export const SidebarContainer = styled.div<SidebarProps>`
    display: flex;
    width: 320px;
    height: 100%;
    background-color: #000236;
    flex-direction: column;
    color: white;
    box-shadow: 10px 0px 15px -1px rgba(0,0,0,0.75);
    -webkit-box-shadow: 10px 0px 15px -1px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 0px 15px -1px rgba(0,0,0,0.75);
    transition: transform 0.3s ease;
    
    ${({ close }) => close && css`
        transform: translateX(-65%);
        
    `}
`;

export const HeaderSidebar = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const LogoContainer = styled.div`
    display: flex;
    flex: 3;
    justify-content: center;
    align-items: center;
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
    justify-content: center;
    align-items: center;
`;

export const FooterSidebar = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`;


