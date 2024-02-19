import { useState } from 'react';
import { ChevronsLeft, ChevronsRight, ChevronsDown, DollarSign, Home, PlusCircle} from 'react-feather';
import { 
    ChevronContainer,
    BodySidebar,
    FooterSidebar, 
    HeaderSidebar, 
    LogoContainer, 
    SidebarContainer,
    TitleSideBar,
    ButtonSideBar,
    TextButtonSidebar
} from '../styles/SideBarStyle';
import { useNavigate } from 'react-router-dom'; 

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
    const [openRegister, setOpenRegister] = useState(false);

    const navigate = useNavigate();

    return(
        <SidebarContainer close={close}>
            <HeaderSidebar>
                <LogoContainer style={{display: close? 'none' : 'flex' }} close={close}>
                    {close? 
                        ('')
                        :
                        (<TitleSideBar>Toscana</TitleSideBar>)
                    }
                </LogoContainer>
                <ChevronContainer onClick={()=>{setClose(!close)}}>
                    { close ? 
                        (<ChevronsRight size={30}/>)
                        :
                        (<ChevronsLeft size={30}/>)
                    }
                </ChevronContainer>
            </HeaderSidebar>
            <BodySidebar>
                <ButtonSideBar 
                    style={{backgroundColor: props.page == 'home'? 'rgba(255, 255, 255, 0.256)' : 'transparent'}}
                    onClick={()=>navigate('/home', { state: { close: close} })}
                >
                    <Home style={styleIcons} size={30}/>
                    {
                        close ? (
                            ''
                        ):(
                            <TextButtonSidebar>Home</TextButtonSidebar>
                        )
                    }
                </ButtonSideBar>
                <ButtonSideBar 
                    style={{backgroundColor: props.page == 'orcamentos'? 'rgba(255, 255, 255, 0.256)' : 'transparent'}}
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
                    style={{backgroundColor: props.page == 'register'? 'rgba(255, 255, 255, 0.256)' : 'transparent'}}
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
