
import { useState } from 'react';
import { useStore } from '../store/LoginStore';
import { HomeContainer } from '../styles/HomeStyle';
export default function Home(){
    const { logado } = useStore(); 

    return(
        <HomeContainer>ola</HomeContainer>
    );
}