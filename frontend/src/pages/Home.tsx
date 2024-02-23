import { PageContainer, MainContainer, BodyContainer } from '../styles/DeafaultStyles';
import Sidebar from '../components/SideBar';
import Header from '../components/HeaderPage';
import { useLocation } from 'react-router-dom';
import { TextInput } from '../components/Inputs/TextInput';
import { DateInput } from '../components/Inputs/DatePicker';

export default function Home(){
    const { state } = useLocation();
    const isSidebarClosed = state ? state.close : false;
    return( 
        <PageContainer>
            <Sidebar close={isSidebarClosed} page='home'/>
            <MainContainer>
                <Header/>
                <BodyContainer>
                    <TextInput placeHolder='Ola Mundo' value='' text='ola mundo' onChange={()=>{}} />
                    <DateInput value={new Date()} text='ola mundo' onChange={()=>{}} />
                </BodyContainer>
            </MainContainer>
        </PageContainer>
    );
}