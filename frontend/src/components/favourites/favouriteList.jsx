import styled from 'styled-components';
import { FavouriteButton } from './articleFavourites';
import { useCallback, useEffect, useState } from 'react';
import { getFavourites } from '../../requests/favourites';
import { useCookies } from 'react-cookie';
import { ArticleTitleContainer, Bar, FavouriteButtonContainer, FlexDiv, SummaryParagraph } from './common';

import articleInfo from '../../articleInfo.json';

const StyledFavouriteButton = styled(FavouriteButton)`
    display: inline-block;
  
    height: 2em;
    width: 2em;
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

    const updateFavourites = useCallback(async () => {
        if (!cookies['userId']) return;

        const { favorites: favourites } = await getFavourites(cookies['userId']);
        setFavourites(favourites);
    }, [cookies]);

    useEffect(updateFavourites, [updateFavourites]);

    if (!favourites) return null;

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