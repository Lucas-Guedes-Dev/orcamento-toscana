import { PageContainer, MainContainer, BodyContainer, RowContainer } from '../styles/DeafaultStyles';
import Sidebar from '../components/SideBar';
import Header from '../components/HeaderPage';
import { useLocation } from 'react-router-dom';
import { CardCadastro } from '../components/Cards/card-cadastro';
import Coquetel from '../components/Icons/Coquetel';
import Dj from '../components/Icons/Dj';

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
                        <CardCadastro page='/register-drinks' icon={<Coquetel width={60}/>} text='Drinks' />
                        <CardCadastro page='/register-drinks' icon={<Dj width={20}/>} text='Drinks' />
                        <CardCadastro page='/register-drinks' icon={<Coquetel width={5}/>} text='Drinks' />
                    </RowContainer>
                    <RowContainer>
                        <CardCadastro page='/register-drinks' icon={<Coquetel width={5}/>} text='Drinks' />
                        <CardCadastro page='/register-drinks' icon={<Coquetel width={5}/>} text='Drinks' />
                        <CardCadastro page='/register-drinks' icon={<Coquetel width={5}/>} text='Drinks' />
                    </RowContainer>
                </BodyContainer>
            </MainContainer>
        </PageContainer>
    );
}