import styled from 'styled-components';

export const Table = styled.table`
    border: 1px solid grey;
    border-collapse: collapse;
  
    margin-left: auto;
    margin-right: auto;
`;

const StyledTableHead = styled.thead`
    border: thin solid grey;
    
    tr {
        padding: 0.25em;
        text-align: center;

        th {
            padding: 0.25em;
            border: thin solid grey;
        }
    }
`;

export const TableHead = ({children}) => (
    <StyledTableHead>
        <tr>
            {children}
        </tr>
    </StyledTableHead>
);

export const StyledTableBody = styled.tbody`
    border: thin solid grey;
  
    tr {
        padding: 0.25em;
        text-align: center;

        td {
            padding: 0.25em;
            border: thin solid grey;
        }
    }
`;

export const TableBody = ({children}) => (
    <StyledTableBody>
        {children}
    </StyledTableBody>
);