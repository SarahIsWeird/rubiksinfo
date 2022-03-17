import { commonGetParameters, createNullPromise, getRequest } from './common';

const getSetFavouriteObject = (uriFragment) => ({
    content: uriFragment,
});

const getRemoveFavouriteObject = (uriFragment) => ({
    content: uriFragment,
});

export const getFavourites = async () => {
    const getFavouritesEndpoint = '/api/user/favorite';

    const response = await fetch(getFavouritesEndpoint, commonGetParameters);

    return response.json();
};

export const setFavourite = async (uriFragment) => {
    const setFavouriteEndpoint = '/api/user/favorite';
    const setFavouriteObject = getSetFavouriteObject(uriFragment);
    const request = getRequest('PUT', setFavouriteObject);

    await fetch(setFavouriteEndpoint, request);

    return createNullPromise();
};

export const removeFavourite = async (uriFragment) => {
    const removeFavouriteEndpoint = '/api/user/favorite';
    const removeFavouriteObject = getRemoveFavouriteObject(uriFragment);
    const request = getRequest('DELETE', removeFavouriteObject);

    await fetch(removeFavouriteEndpoint, request);

    return createNullPromise();
};