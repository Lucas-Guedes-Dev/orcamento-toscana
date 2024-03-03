import { PageContainer, MainContainer, BodyContainer, ButtonTable } from '../../styles/DeafaultStyles';
import Sidebar from '../../components/SideBar';
import Header from '../../components/HeaderPage';
import { useLocation } from 'react-router-dom';
import { Table } from '../../components/Table/table-register';
import { PlusCircle, PenTool} from 'react-feather';

export default function TableDrinks(){
    const { state } = useLocation();
    const isSidebarClosed = state ? state.close : false;
  
    return( 
        <PageContainer>
            <Sidebar close={isSidebarClosed} page='register'/>
            <MainContainer>
                <Header/>
                <BodyContainer>
                    <Table
                        linhas={[{ola: 'teste', ola2: 'teste',ola3: 'teste', ola4: <ButtonTable><PenTool size={25}/></ButtonTable>}]} 
                        colunas={['Coluna1', 'Coluna2', 'Coluna3', <ButtonTable><PlusCircle size={25}/></ButtonTable>]}/> 
                </BodyContainer>
            </MainContainer>
        </PageContainer>
    );
}