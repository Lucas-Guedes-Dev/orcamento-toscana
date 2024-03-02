import { PageContainer, MainContainer, BodyContainer } from '../styles/DeafaultStyles';
import Sidebar from '../components/SideBar';
import Header from '../components/HeaderPage';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function Home(){
    const { state } = useLocation();
    const isSidebarClosed = state ? state.close : false;

    useEffect(()=>{
        console.log(state)
    });

    return( 
        <PageContainer>
            <Sidebar close={isSidebarClosed} page='register'/>
            <MainContainer>
                <Header/>
                <BodyContainer>
                </BodyContainer>
            </MainContainer>
        </PageContainer>
    );
}