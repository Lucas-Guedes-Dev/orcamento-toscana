import { useEffect, useState } from 'react';
import { PageContainer, MainContainer, BodyContainer } from '../styles/DeafaultStyles';
import Sidebar from '../components/SideBar';
import Header from '../components/HeaderPage';
import { useLocation } from 'react-router-dom';
import { TextInput } from '../components/Inputs/TextInput';
import { DateInput } from '../components/Inputs/DatePicker';
import { InputNumber } from '../components/Inputs/InputNumberMask';

export default function Home(){
    const { state } = useLocation();
    const [ valorReais, setValorReais ] = useState<string>('0');

    const isSidebarClosed = state ? state.close : false;
    return( 
        <PageContainer>
            <Sidebar close={isSidebarClosed} page='home'/>
            <MainContainer>
                <Header/>
                <BodyContainer>
                    <TextInput placeHolder='Ola Mundo' value='' text='ola mundo' onChange={()=>{}} />
                    <DateInput value={new Date()} text='ola mundo' onChange={(date)=>{console.log(date)}} />
                    <InputNumber value={valorReais} text='Valor R$' onChange={(value)=>{setValorReais(value)}} placeholder='0.000,00' />
                </BodyContainer>
            </MainContainer>
        </PageContainer>
    );
}