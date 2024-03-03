import { PageContainer, MainContainer, BodyContainer, ButtonTable } from '../../styles/DeafaultStyles';
import Sidebar from '../../components/SideBar';
import Header from '../../components/HeaderPage';
import { useLocation, useNavigate } from 'react-router-dom';
import { Table } from '../../components/Table/table-register';
import { PenTool, PlusCircle } from 'react-feather';

export default function TableMenu(){
    const { state } = useLocation();
    const navigate = useNavigate();

    const isSidebarClosed = state ? state.close : false;
    
    const navigateToPage = (page: string, register: number)=>{
        navigate(page, {state: {close: isSidebarClosed, register: register}})
    } 

    return( 
        <PageContainer>
            <Sidebar close={isSidebarClosed} page='register'/>
            <MainContainer>
                <Header/>
                <BodyContainer>
                    <Table
                        linhas={[{ola: 'teste', ola2: 'teste',ola3: 'teste', ola4: <ButtonTable><PenTool size={25}/></ButtonTable>}]} 
                        colunas={['Coluna1', 'Coluna2', 'Coluna4', <ButtonTable onClick={()=>{navigateToPage('/register-menu', 0)}} ><PlusCircle size={25}/></ButtonTable>]}
                    /> 
                </BodyContainer>
            </MainContainer>
        </PageContainer>
    );
}