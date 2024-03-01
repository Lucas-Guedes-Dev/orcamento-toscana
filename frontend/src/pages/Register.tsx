import { PageContainer, MainContainer, BodyContainer, RowContainer } from '../styles/DeafaultStyles';
import Sidebar from '../components/SideBar';
import Header from '../components/HeaderPage';
import { useLocation } from 'react-router-dom';
import { CardCadastro } from '../components/Cards/card-cadastro';

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
                        <CardCadastro page='/register-drinks' icon={<img src="./src/assets/icones/coquetel.png"/>} text='Drinks' />
                        <CardCadastro page='/register-drinks' icon={<img src="./src/assets/icones/coquetel.png"/>} text='Drinks' />
                        <CardCadastro page='/register-drinks' icon={<img src="./src/assets/icones/coquetel.png"/>} text='Drinks' />
                    </RowContainer>
                    <RowContainer>
                        <CardCadastro page='/register-drinks' icon={<img src="./src/assets/icones/coquetel.png"/>} text='Drinks' />
                        <CardCadastro page='/register-drinks' icon={<img src="./src/assets/icones/coquetel.png"/>} text='Drinks' />
                        <CardCadastro page='/register-drinks' icon={<img src="./src/assets/icones/coquetel.png"/>} text='Drinks' />
                    </RowContainer>
                </BodyContainer>
            </MainContainer>
        </PageContainer>
    );
}