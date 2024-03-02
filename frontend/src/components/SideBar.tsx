import { useState } from 'react';
import { ChevronsLeft, ChevronsRight, DollarSign, PlusCircle} from 'react-feather';
import { 
    ChevronContainer,
    BodySidebar,
    FooterSidebar, 
    HeaderSidebar, 
    LogoContainer, 
    SidebarContainer,
    ButtonSideBar,
    TextButtonSidebar
} from '../styles/SideBarStyle';
import { useNavigate } from 'react-router-dom'; 
import LogoToscana from './Icons/LogoToscana';

interface SidebarProps{
    page: string;
    close: boolean;
}

const styleIcons = {
    display: 'flex',
    flex: 1
}

export default function Sidebar(props: SidebarProps){
    const [close, setClose] = useState(props.close);

    const navigate = useNavigate();

    return(
        <SidebarContainer close={close}>
            <HeaderSidebar>
                <LogoContainer style={{flex: close? '0' : '3' }} close={close}>
                    {close? 
                        ('')
                        :
                        (<LogoToscana width={150}/>)
                    }
                </LogoContainer>
                <ChevronContainer onClick={()=>{setClose(!close)}}>
                    { close ? 
                        (<ChevronsRight size={30} color='white'/>)
                        :
                        (<ChevronsLeft size={30} color='white'/>)
                    }
                </ChevronContainer>
            </HeaderSidebar>
            <BodySidebar>
                <ButtonSideBar 
                    style={{borderBottom: props.page == 'orcamentos'? '3px solid rgb(255, 255, 255)' : 'transparent'}}
                    onClick={()=>navigate('/orcamentos', { state: { close: close} })}
                >
                    <DollarSign style={styleIcons} size={30}/>
                    {
                        close ? (
                            ''
                        ):(
                            <TextButtonSidebar>Orçamentos</TextButtonSidebar>
                        )
                    }
                </ButtonSideBar>
                <ButtonSideBar 
                    style={{borderBottom: props.page == 'register'? '3px solid rgb(255, 255, 255)' : 'transparent'}}
                    onClick={()=>navigate('/register', { state: { close: close} })}
                >
                    <PlusCircle style={styleIcons} size={30}/>
                    {
                        close ? (
                            ''
                        ):(
                            <TextButtonSidebar>Cadastros</TextButtonSidebar>
                        )
                    }

                </ButtonSideBar>
            </BodySidebar>
            <FooterSidebar></FooterSidebar>
        </SidebarContainer>
    );
}
