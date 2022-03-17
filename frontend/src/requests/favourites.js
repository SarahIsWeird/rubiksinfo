import { buildQueryString, commonGetParameters, createNullPromise, getRequest } from './common';

const getGetFavouritesObject = (userId) => ({
    userId: userId,
});

const getSetFavouriteObject = (userId, uriFragment) => ({
    userId: userId,
    content: uriFragment,
});

const getRemoveFavouriteObject = (userId, uriFragment) => ({
    userId: userId,
    content: uriFragment,
});

export const getFavourites = async (userId) => {
    const getFavouritesEndpoint = '/api/user/favorite';
    const getFavouritesObject = getGetFavouritesObject(userId);
    const uriWithQueryString = buildQueryString(getFavouritesEndpoint, getFavouritesObject);

    const response = await fetch(uriWithQueryString, commonGetParameters);

    return response.json();
};

export const setFavourite = async (userId, uriFragment) => {
    const setFavouriteEndpoint = '/api/user/favorite';
    const setFavouriteObject = getSetFavouriteObject(userId, uriFragment);
    const request = getRequest('PUT', setFavouriteObject);

    await fetch(setFavouriteEndpoint, request);

    return createNullPromise();
};

export const removeFavourite = async (userId, uriFragment) => {
    const removeFavouriteEndpoint = '/api/user/favorite';
    const removeFavouriteObject = getRemoveFavouriteObject(userId, uriFragment);
    const request = getRequest('DELETE', removeFavouriteObject);

    await fetch(removeFavouriteEndpoint, request);

    return createNullPromise();
};