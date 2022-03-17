import styled from 'styled-components';

export const LeftImage = styled.div`
    grid-column: 2 / span 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    img {
        align-self: center;
      
        width: 250px;
        padding: 15px;
    }
  
    span {
        text-align: center;
    }
`;

export const RightImage = styled.div`
    grid-column: 3 / span 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

    img {
        align-self: center;
      
        width: 250px;
        padding: 15px;
    }

    span {
        text-align: center;
    }
`;

export const InlineImage = styled.img`
    align-self: revert;
    width: 300px;
    padding: 15px 15px 0 15px;
`;