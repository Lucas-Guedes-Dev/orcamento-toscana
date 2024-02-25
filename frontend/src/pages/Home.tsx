import { useState } from 'react';
import { PageContainer, MainContainer, BodyContainer } from '../styles/DeafaultStyles';
import Sidebar from '../components/SideBar';
import Header from '../components/HeaderPage';
import { useLocation } from 'react-router-dom';
import { TextInput } from '../components/Inputs/TextInput';
import { DateInput } from '../components/Inputs/DatePicker';
import { InputCoin } from '../components/Inputs/InputCoin';

export default function Home(){
    const { state } = useLocation();
    const [ valorReais, setValorReais ] = useState<string>('0');
    const [date, setDate] = useState<Date>(new Date);
    const isSidebarClosed = state ? state.close : false;
    
    return( 
        <PageContainer>
            <Sidebar close={isSidebarClosed} page='home'/>
            <MainContainer>
                <Header/>
                <BodyContainer>
                    <TextInput placeHolder='Ola Mundo' value='' text='ola mundo' onChange={()=>{}} />
                    <DateInput value={date} text='ola mundo' onChange={(date)=>setDate(date)} />
                    <InputCoin value={valorReais} text='Valor R$' onChange={(value)=>{setValorReais(value)}} placeholder='0.000,00' />
                </BodyContainer>
            </MainContainer>
        </PageContainer>
    );
}