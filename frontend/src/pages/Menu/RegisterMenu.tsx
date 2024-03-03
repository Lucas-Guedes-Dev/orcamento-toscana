import { PageContainer, MainContainer, BodyContainer } from '../../styles/DeafaultStyles';
import Sidebar from '../../components/SideBar';
import Header from '../../components/HeaderPage';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { MenuForm } from '../../components/Forms/MenuForm';

export default function RegisterMenu(){
    const { state } = useLocation();
    const isSidebarClosed = state ? state.close : false;
    
    useEffect(()=>{
        if (state.register > 0){
            //
        }
    })

    return( 
        <PageContainer>
            <Sidebar close={isSidebarClosed} page='register'/>
            <MainContainer>
                <Header/>
                <BodyContainer>
                    <MenuForm onPress={()=>{}}/>
                </BodyContainer>
            </MainContainer>
        </PageContainer>
    );
}