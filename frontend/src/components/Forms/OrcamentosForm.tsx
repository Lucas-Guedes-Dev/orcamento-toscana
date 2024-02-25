import React, { useEffect, useState } from "react"
import { ContainerForm, RowContainer, HeaderForm, TitleForm, FooterForm, ButtonBuild, SectionFooter} from "../../styles/FormsStyles";
import { TextInput } from "../Inputs/TextInput";
import { Select } from "../Inputs/SelectInput";
import { InputCoin } from "../Inputs/InputCoin";
import { NumberInput } from "../Inputs/NumberInput";
import { SelectType } from "../Inputs/SelectInputType";
import { DateInput } from "../Inputs/DatePicker";

interface OrcamentoProps{
    fieldList?: Array<React.ReactElement>;
}

const selectSalaoOptions = [
    {value: '1', text: 'Térreo'},
    {value: '2', text: 'Superior'},
]

const selectSomOptions = [
    {value: '1', text: 'DJ'},
    {value: '2', text: 'Banda ao vivo'},
]

const typeEvent = [
    {value: '1', text: 'Casamento'},
    {value: '2', text: '15 Anos'},
    {value: '3', text: 'Formaturas'},
    {value: '4', text: 'Confraternização de empresas'},
    {value: '5', text: 'Aniversário'},
    {value: '6', text: '50 Anos'},
    {value: '7', text: 'Bodas'},
    {value: '8', text: 'Coffe break'},
]

export const OrcamentosForm: React.FC<OrcamentoProps> = (props)=>{    
    const [typeEventChoice, setTypeEvent] = useState<string>('1');
    const [noiva, setNoiva] = useState<string>('');
    const [noivo, setNoivo] = useState<string>('');
    const [nome, setNome] = useState<string>('')
    const [salao, setSalao] = useState<string>('1');
    const [valorPessoa, setValorPessoa] = useState<string>('');
    const [qtdePessoa, setQtdePessoa] = useState<number>(0);
    const [labelInfoQtde, setLabelInfoQtde] = useState<string>('');
    const [somDisabled, setSomDisabled] = useState<boolean>(false);
    const [som, setSom] = useState<string>('1');
    const [date, setDate] = useState<Date>(new Date());
    const [total, setValorTotal] = useState<number>(0)

    useEffect(()=>{
        if (salao === '1'){
            setLabelInfoQtde(' (Máx de 200 pessoas)');
            setSomDisabled(true);
            setSom('1');
        }else{
            setLabelInfoQtde(' (Máx de 500 pessoas)');
            setSomDisabled(false);
        }

        let newValorPessoa = Number(valorPessoa);
        let newQtdePessoa = Number(qtdePessoa);

        setValorTotal(newQtdePessoa*newValorPessoa);

    }, [salao, som, qtdePessoa, valorPessoa])

    return( 
        <ContainerForm>
            <HeaderForm><TitleForm>Orçamento de</TitleForm><SelectType onChange={(text)=>{setTypeEvent(text)}} values={typeEvent}/></HeaderForm>
            
                { (typeEventChoice ==='1') ?
                    (
                        <RowContainer>
                            <TextInput value={noiva} placeHolder={"Ex: Maria Eduarda"} text="Noiva" onChange={(text)=>{setNoiva(text)}}/>
                            <TextInput value={noivo} placeHolder={"Ex: João Silva "} text="Noivo" onChange={(text)=>{setNoivo(text)}}/>
                            <Select text="Salão" onChange={(text)=>{setSalao(text)}} values={selectSalaoOptions}/>
                        </RowContainer>
                    ):( 
                        <RowContainer>
                            <TextInput value={nome} placeHolder={"Ex: Maria Eduarda "} text="Nome" onChange={(text)=>{setNome(text)}}/>
                            <Select text="Salão" onChange={(text)=>{setSalao(text)}} values={selectSalaoOptions}/>
                        </RowContainer>   
                    )
                }
            <RowContainer>
                <InputCoin placeholder={'R$ 0.000,00'} value={valorPessoa} text="Valor por pesssoa" onChange={(text)=>{setValorPessoa(text)}}/>
                <NumberInput info={labelInfoQtde} value={qtdePessoa} text="Quantidade de pessoas. " onChange={(value)=>{setQtdePessoa(value)}}/>
            </RowContainer>
            <RowContainer>
                <DateInput value={date} onChange={(date)=>{setDate(date)}} text="Data do evento"/>
                <Select disabled={somDisabled} value={som} text="Som" onChange={(text)=>{setSom(text)}} values={selectSomOptions}/>
            </RowContainer>
            <FooterForm>
                <SectionFooter>
                  <InputCoin disabled placeholder={'R$ 0.000,00'} value={total.toString()}  onChange={(text)=>{setValorTotal(Number(text))}}/>
                </SectionFooter>
                <SectionFooter>
                </SectionFooter>
                <SectionFooter>
                    <ButtonBuild>Gerar</ButtonBuild>
                </SectionFooter>
            </FooterForm>
        </ContainerForm>
    );
}

