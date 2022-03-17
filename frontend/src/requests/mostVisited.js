import {  commonGetParameters, createNullPromise, getRequest } from './common';

const getRegisterVisitObject = (uriFragment) => ({
    content: uriFragment,
});

export const registerVisit = async (uriFragment) => {
    const registerVisitEndpoint = '/api/user/most-visited';
    const registerVisitObject = getRegisterVisitObject(uriFragment);
    const request = getRequest('POST', registerVisitObject);

    await fetch(registerVisitEndpoint, request);

    return createNullPromise();
};

export const getMostVisited = async () => {
    const getMostVisitedEndpoint = '/api/user/most-visited';

    const response = await fetch(getMostVisitedEndpoint, commonGetParameters);

    if (response.status === 404) return createNullPromise();

    return response.json();
};