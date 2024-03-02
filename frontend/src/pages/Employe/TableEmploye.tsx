import { PageContainer, MainContainer, BodyContainer } from '../../styles/DeafaultStyles';
import Sidebar from '../../components/SideBar';
import Header from '../../components/HeaderPage';
import { useLocation } from 'react-router-dom';

export default function TableEmploye(){
    const { state } = useLocation();
    const isSidebarClosed = state ? state.close : false;
    
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