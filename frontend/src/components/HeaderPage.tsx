import { HeaderContainer, ContainerLeft, ContainerRight, ContainerIconUser } from '../styles/HeaderStyle';
import { User } from 'react-feather';

export default function Header(){
    return(
        <HeaderContainer>
            <ContainerLeft></ContainerLeft>
            <ContainerRight>
                <ContainerIconUser>
                    <User style={{backgroundColor: 'transparent'}} size={30} />
                </ContainerIconUser>
            </ContainerRight>
        </HeaderContainer>
    );
}