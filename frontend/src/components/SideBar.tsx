import { useState } from 'react';
import { ChevronsLeft, ChevronRight } from 'react-feather';
import { 
    ChevronContainer,
    BodySidebar,
    FooterSidebar, 
    HeaderSidebar, 
    LogoContainer, 
    SidebarContainer
} from '../styles/SideBarStyle';

export default function Sidebar(){
    const [close, setClose] = useState(false);
    
    return(
        <SidebarContainer close={close}>
            <HeaderSidebar>
                <LogoContainer>
                    
                </LogoContainer>
                <ChevronContainer onClick={()=>{setClose(!close)}}>
                    { close ? 
                        (<ChevronRight size={30}/>)
                        :
                        (<ChevronsLeft size={30}/>)
                    }
                </ChevronContainer>
            </HeaderSidebar>
            <BodySidebar></BodySidebar>
            <FooterSidebar></FooterSidebar>
        </SidebarContainer>
    );
}