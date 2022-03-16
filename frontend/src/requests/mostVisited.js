import { buildQueryString, commonGetParameters, createNullPromise, getRequest } from './common';

const getRegisterVisitObject = (userId, uriFragment) => ({
    userId: userId,
    content: uriFragment,
});

const getGetMostVisitedObject = (userId) => ({
    userId: userId,
});

export const registerVisit = async (userId, uriFragment) => {
    const registerVisitEndpoint = '/api/user/most-visited';
    const registerVisitObject = getRegisterVisitObject(userId, uriFragment);
    console.log(registerVisitObject);
    const request = getRequest('PUT', registerVisitObject);

    await fetch(registerVisitEndpoint, request);

    return createNullPromise();
};

export const getMostVisited = async (userId) => {
    const getMostVisitedEndpoint = '/api/user/most-visited';
    const getMostVisitedObject = getGetMostVisitedObject(userId);
    const uriWithQueryString = buildQueryString(getMostVisitedEndpoint, getMostVisitedObject);

    const response = await fetch(uriWithQueryString, commonGetParameters);

    return response.text();
};