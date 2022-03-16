import styled from 'styled-components';
import { FavouriteButton } from './articleFavourites';
import { useEffect, useState } from 'react';
import { getFavourites } from '../../requests/favourites';
import { useCookies } from 'react-cookie';

import articleInfo from '../../articleInfo.json';

const FlexDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-content: center;
`;

const StyledFavouriteButton = styled(FavouriteButton)`
    display: inline-block;
  
    height: 2em;
    width: 2em;
`;

const FavouriteButtonContainer = styled.div`
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

const ArticleTitleContainer = styled.div`
    width: 10em;
    text-align: center;
`;

const Bar = styled.hr`
    margin-left: 1em;
    margin-right: 1em;
`;

const SummaryParagraph = styled.p`
    height: min-content;
    line-height: 100%;
  
    margin-top: auto;
    margin-bottom: auto;
`;

const Favourite = ({ uriFragment, pageTitle, pageDescription, onRemoveFavourite }) => (
    <FlexDiv>
        <FavouriteButtonContainer>
            <StyledFavouriteButton
                path={ uriFragment }
                onRemoveFavourite={ onRemoveFavourite }
                suppressCheck />
        </FavouriteButtonContainer>
        <ArticleTitleContainer>
            <h3>
                <a href={ uriFragment }>
                    { pageTitle }
                </a>
            </h3>
        </ArticleTitleContainer>
        <Bar />
        <SummaryParagraph>
            { pageDescription }
        </SummaryParagraph>
    </FlexDiv>
);

export const FavouriteList = () => {
    const [favourites, setFavourites] = useState([]);
    const [cookies] = useCookies();

    const updateFavourites = async () => {
        const favourites = await getFavourites(cookies['userId']);
        setFavourites(favourites);
    };

    useEffect(updateFavourites, []);

    const favouritesElements = favourites.map(el => (
        <Favourite
            key={ el }
            uriFragment={ el }
            pageTitle={ articleInfo[el].title }
            pageDescription={ articleInfo[el].summary }
            onRemoveFavourite={ updateFavourites } />
    ));

    if (cookies['userId'] === undefined) return null;

    return (
        <>
            { favourites.length !== 0 ? <h2>Deine Favoriten</h2> : null }
            { favouritesElements }
        </>
    );
};