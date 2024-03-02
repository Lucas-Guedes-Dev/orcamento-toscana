import React, { useEffect, useState } from "react"
import { ContainerForm } from "../../styles/FormsStyles";
import { TableContainer, HeadRow, ColumnTable, RowTable, TheadTable, TBodyTable } from "../../styles/TableStyles";

interface TableProps {
    colunas: Array<any>;
    linhas: Array<any>;
}

export const Table: React.FC<TableProps> = (props)=>{    
    console.log(props.colunas)
    const [chavesList, setChaves] = useState<string[]>();

    useEffect(()=>{
        let chaves: string[];
        
        props.linhas.forEach((linha: any)=>{
            chaves = Object.keys(linha);
            setChaves(chaves);
        })
    })

    return( 
        <ContainerForm>
            <TableContainer>
                <TheadTable>
                    <HeadRow>
                        {props.colunas.map((item: string)=>(
                            
                            <ColumnTable>
                                {item}
                            </ColumnTable>
                        ))}
                    </HeadRow>
                </TheadTable>
                <TBodyTable>
                    { props.linhas.map((linha)=>(
                        <RowTable>
                        { chavesList?.map((coluna)=>(
                            <ColumnTable>
                                {linha[coluna]}
                            </ColumnTable>
                        ))
                        }
                        </RowTable>
                    ))}
                </TBodyTable>
            </TableContainer>
        </ContainerForm>
    );
}

