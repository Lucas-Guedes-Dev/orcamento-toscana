import { useState } from 'react';
import { PageContainer, MainContainer, BodyContainer, customStyles, ContainerModal } from '../styles/DeafaultStyles';
import Sidebar from '../components/SideBar';
import Header from '../components/HeaderPage';
import { useLocation } from 'react-router-dom';
import { OrcamentosForm } from '../components/Forms/OrcamentosForm';
import { OrcamentoFormType } from '../types/orcamento_types';
import Modal from 'react-modal';

export default function Orcamentos(){
    const { state } = useLocation();
    const [openModal, setOpenModal] = useState(false);
    const isSidebarClosed = state ? state.close : true;

    const onPressForm = (form_obj: OrcamentoFormType) =>{
        console.log(form_obj)
        setOpenModal(true);
    }   

    return( 
        <PageContainer>
            <Sidebar close={isSidebarClosed} page='orcamentos'/>
            <MainContainer>
                <Header/>
                <BodyContainer>
                    <OrcamentosForm onPress={onPressForm}/>
                    <Modal
                        isOpen={openModal}  
                        onRequestClose={()=>{setOpenModal(!openModal)}}
                        contentLabel="Example Modal"
                        style={customStyles}
                    >
                        <ContainerModal>Ola mundo</ContainerModal>
                    </Modal>
                </BodyContainer>
            </MainContainer>
        </PageContainer>
    );
}