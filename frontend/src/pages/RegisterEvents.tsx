import { PageContainer, MainContainer, BodyContainer } from '../styles/DeafaultStyles';
import Sidebar from '../components/SideBar';
import Header from '../components/HeaderPage';
import { useLocation } from 'react-router-dom';

export default function RegisterEvents(){
    const { state } = useLocation();

    return(
        <PageContainer>
            <Sidebar close={state.close} page='register-events'/>
            <MainContainer>
                <Header/>
                <BodyContainer>

                </BodyContainer>
            </MainContainer>
        </PageContainer>
    );
}