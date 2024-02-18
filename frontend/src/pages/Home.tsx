
import { useState } from 'react';
import { PageContainer, MainContainer } from '../styles/DeafaultStyles';
import Sidebar from '../components/SideBar';
export default function Home(){

    return(
        <PageContainer>
            <Sidebar></Sidebar>
            <MainContainer></MainContainer>
        </PageContainer>
    );
}