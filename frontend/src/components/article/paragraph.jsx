import styled from 'styled-components';

export const WideParagraph = styled.div`
    width: 100%;
    grid-column: 1 / span 3;
`;

export const ShortParagraph = styled.div`
    grid-column: 1 / span 1;
    display: flex;
    align-content: center;
    
    p {
        margin-top: auto;
        margin-bottom: auto;
    }
`;