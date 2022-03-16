import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useEffect, useState } from 'react';
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

export const FavouriteButton = () => {
    const [isFavouriteFlag, setFavouriteFlag] = useState(false);
    const [cookies] = useCookies();
    const location = useLocation();

    const onClick = async () => {
        const newIsFavouriteFlag = !isFavouriteFlag;
        setFavouriteFlag(newIsFavouriteFlag);

        if (!isFavouriteFlag) {
            await setFavourite(cookies['userId'], location.pathname);
        } else {
            await removeFavourite(cookies['userId'], location.pathname);
        }
    };

    useEffect(async () => {
        const favourites = await getFavourites(cookies['userId']);

        const isFavourite = favourites.includes(location.pathname);
        setFavouriteFlag(isFavourite);
    }, []);

    return (
        <ContainerSpan onClick={ onClick }>
            { isFavouriteFlag ? <FavouriteHeart /> : <NotFavouriteHeart /> }
        </ContainerSpan>
    );
};