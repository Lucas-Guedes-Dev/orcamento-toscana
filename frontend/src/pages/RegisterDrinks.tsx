import { PageContainer, MainContainer, BodyContainer } from '../styles/DeafaultStyles';
import Sidebar from '../components/SideBar';
import Header from '../components/HeaderPage';
import { useLocation } from 'react-router-dom';
import { Table } from '../components/Table/table-register';

export default function Home(){
    const { state } = useLocation();
    const isSidebarClosed = state ? state.close : false;
    
    return( 
        <PageContainer>
            <Sidebar close={isSidebarClosed} page='register'/>
            <MainContainer>
                <Header/>
                <BodyContainer>
                    <Table linhas={[{ola: 'teste', ola2: 'teste',ola3: 'teste', ola4: <button>ola</button>}]} colunas={['Coluna1', 'Coluna2', 'Coluna3', <button>Add novo</button>]}/> 
                </BodyContainer>
            </MainContainer>
        </PageContainer>
    );
}