import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { getFavourites, removeFavourite, setFavourite } from '../../requests/favourites';
import { useCookies } from 'react-cookie';
import { useLocation } from 'react-router';

const NotFavouriteHeart = AiOutlineHeart;

const FavouriteHeart = styled(AiFillHeart)`
    color: #ff3030;
`;

const ContainerSpan = styled.span`
    width: min-content;
    height: min-content;
  
    vertical-align: middle;
`;

export const FavouriteButton = ({ path, suppressCheck, onRemoveFavourite }) => {
    const [isFavouriteFlag, setFavouriteFlag] = useState(false);
    const [cookies] = useCookies();

    const onClick = async () => {
        const newIsFavouriteFlag = !isFavouriteFlag;
        setFavouriteFlag(newIsFavouriteFlag);

        if (!isFavouriteFlag) {
            await setFavourite(cookies['userId'], path);
        } else {
            await removeFavourite(cookies['userId'], path);

            onRemoveFavourite();
        }
    };

    const loadFavouriteState = useCallback(async () => {
        if (suppressCheck === true) {
            setFavouriteFlag(true);
            return;
        }

        if (!cookies['userId']) return;

        const response = await getFavourites(cookies['userId']);
        const favourites = response.favorites;

        const isFavourite = favourites.includes(path);
        setFavouriteFlag(isFavourite);
    }, [cookies, path, suppressCheck]);

    useEffect(loadFavouriteState, [loadFavouriteState]);

    if (cookies['userId'] === undefined) return null;

    return (
        <ContainerSpan onClick={ onClick }>
            { isFavouriteFlag ? <FavouriteHeart /> : <NotFavouriteHeart /> }
        </ContainerSpan>
    );
};

export const ArticleFavouriteButton = () => {
    const location = useLocation();

    return (
        <FavouriteButton path={ location.pathname } />
    );
};