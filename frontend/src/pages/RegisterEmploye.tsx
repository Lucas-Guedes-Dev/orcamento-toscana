import { PageContainer, MainContainer, BodyContainer } from '../styles/DeafaultStyles';
import Sidebar from '../components/SideBar';
import Header from '../components/HeaderPage';
import { useLocation } from 'react-router-dom';

export default function RegisterEmploye(){
    const { state } = useLocation();
    const isSidebarClosed = state ? state.close : false;
    return( 
        <PageContainer>
            <Sidebar close={isSidebarClosed} page='register-employe'/>
            <MainContainer>
                <Header/>
                <BodyContainer>

                </BodyContainer>
            </MainContainer>
        </PageContainer>
    );
}