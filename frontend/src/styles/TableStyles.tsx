import styled from "styled-components";

export const TableContainer = styled.table`
    display: flex;
    flex: 1;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    color: #3d3d3d;
    max-width: 100%; 
    max-height: 75vh;
`;

export const TheadTable = styled.thead`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid #3D3D3D;
    background-color: #bebebe;
    font-size: large;
    border-end-end-radius: 8px;
    border-end-start-radius: 8px;
    border-start-start-radius: 12px;
    border-start-end-radius: 12px;
`;

export const HeadRow = styled.th`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const TBodyTable = styled.tbody`
    flex: 8;
    width: 100%;
    overflow-x: auto;
    overflow-y: auto;
    border-end-end-radius: 12px;
    border-end-start-radius: 12px;
    
    &::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }
   
    &::-webkit-scrollbar-track {
        background-color: rgba(255, 255, 255, 0.256); 

    }

    &::-webkit-scrollbar-thumb {
        background-color: #9c262c;
        border-radius: 8px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: #BF0811;
    }
`;

export const RowTable = styled.tr`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid #909090;
`;

export const ColumnTable = styled.td`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 2%;
`;