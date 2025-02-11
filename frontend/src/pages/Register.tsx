import { PageContainer, MainContainer, BodyContainer, RowContainer } from '../styles/DeafaultStyles';
import Sidebar from '../components/SideBar';
import Header from '../components/HeaderPage';
import { useLocation } from 'react-router-dom';
import { CardCadastro } from '../components/Cards/card-cadastro';
import Coquetel from '../components/Icons/Coquetel';
import Carteira from '../components/Icons/Carteira';
import Cardapio from '../components/Icons/Cardapio';
import Calendario from '../components/Icons/Calendario';

export default function Register(){
    const { state } = useLocation();
    const isSidebarClosed = state ? state.close : false;
    
    return( 
        <PageContainer>
            <Sidebar close={isSidebarClosed} page='register'/>
            <MainContainer>
                <Header/>
                <BodyContainer>
                    <RowContainer>
                        <CardCadastro optionsPage={{state: {close: isSidebarClosed}}} page='/registers-drinks' icon={<Carteira width={60}/>} text='Funcionarios' />
                        <CardCadastro optionsPage={{state: {close: isSidebarClosed}}} page='/registers-menu' icon={<Cardapio width={60}/>} text='Cardápios' />
                    </RowContainer>
                    <RowContainer>
                        <CardCadastro optionsPage={{state: {close: isSidebarClosed}}} page='/registers-drinks' icon={<Calendario width={60}/>} text='Eventos' />
                        <CardCadastro optionsPage={{state: {close: isSidebarClosed}}} page='/registers-drinks' icon={<Coquetel width={60}/>} text='Drinks' />
                    </RowContainer>
                </BodyContainer>
            </MainContainer>
        </PageContainer>
    );
}