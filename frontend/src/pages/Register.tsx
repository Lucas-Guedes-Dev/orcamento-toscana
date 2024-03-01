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
                        <CardCadastro>

                        </CardCadastro>
                        <CardCadastro>
                            
                        </CardCadastro>
                        <CardCadastro>
                            
                        </CardCadastro>
                    </RowContainer>
                    <RowContainer>
                        <CardCadastro>

                        </CardCadastro>
                        <CardCadastro>
                            
                        </CardCadastro>
                        <CardCadastro>
                            
                        </CardCadastro>
                    </RowContainer>
                </BodyContainer>
            </MainContainer>
        </PageContainer>
    );
}