import { useState } from 'react';
import { 
    PageContainer, 
    TitleModal, 
    MainContainer,
    BodyContainer, 
    customStyles, 
    ContainerModal,
    HeaderModal,
    BodyModal,
    FooterModal,
    ColumnFooterModal,
    BuildButton,
} from '../styles/DeafaultStyles';
import { Select } from '../components/Inputs/SelectInput';
import Sidebar from '../components/SideBar';
import Header from '../components/HeaderPage';
import { useLocation } from 'react-router-dom';
import { OrcamentosForm } from '../components/Forms/OrcamentosForm';
import { OrcamentoFormType } from '../types/OrcamentoTypes';
import Modal from 'react-modal';
import { PDFViewer } from '@react-pdf/renderer';
import { DocumentRender } from '../components/Documents/pdf-generetor';

const fileTypes = [{
    value: '1',
    text: 'PDF',
},{
    value: '1',
    text: 'PNG',
},{
    value: '1',
    text: 'LINK',
},
]

export default function Orcamentos(){
    const { state } = useLocation();
    const [openModal, setOpenModal] = useState(false);
    const [formObj, setFormObj] = useState<OrcamentoFormType>();
    const isSidebarClosed = state ? state.close : false;
    
    const onPressForm = (form_obj: OrcamentoFormType) =>{
        console.log(form_obj)
        setFormObj(form_obj);
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
                        <ContainerModal>
                            <HeaderModal>
                                <TitleModal>Visualizador de PDF</TitleModal>
                            </HeaderModal>
                            <BodyModal>
                                <PDFViewer style={{width: '100%', height: '100%'}}>
                                    <DocumentRender ola={formObj?.nome} />
                                </PDFViewer>
                            </BodyModal>
                            <FooterModal>
                                <ColumnFooterModal>
                                    <Select values={fileTypes} onChange={()=>{}}/>
                                </ColumnFooterModal>
                                <ColumnFooterModal></ColumnFooterModal>
                                <ColumnFooterModal>
                                    <BuildButton>Gerar</BuildButton>
                                </ColumnFooterModal>
                            </FooterModal>
                        </ContainerModal>
                    </Modal>
                </BodyContainer>
            </MainContainer>
        </PageContainer>
    );
}