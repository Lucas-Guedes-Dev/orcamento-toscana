import { PageContainer, MainContainer, BodyContainer } from '../styles/DeafaultStyles';
import Sidebar from '../components/SideBar';
import Header from '../components/HeaderPage';
import { useLocation } from 'react-router-dom';
import { OrcamentosForm } from '../components/Forms/OrcamentosForm';

export default function Orcamentos(){
    const { state } = useLocation();
    const isSidebarClosed = state ? state.close : false;
    return( 
        <PageContainer>
            <Sidebar close={isSidebarClosed} page='orcamentos'/>
            <MainContainer>
                <Header/>
                <BodyContainer>
                    <OrcamentosForm/>
                </BodyContainer>
            </MainContainer>
        </PageContainer>
    );
}