import styled from 'styled-components';

export const FlexDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-content: center;
`;

export const ArticleTitleContainer = styled.div`
    width: 10em;
    text-align: center;
`;

export const Bar = styled.hr`
    margin-left: 1em;
    margin-right: 1em;
`;

export const SummaryParagraph = styled.p`
    height: min-content;
    line-height: 100%;
  
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 1.5em;
`;

export const FavouriteButtonContainer = styled.div`
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 1em;

    width: 2em;
    height: 2em;

    svg { // This should go in StyledFavouriteButton, but CSS isn't applied then.
        display: block;
        
        height: 2em;
        width: 2em;
    }
`;