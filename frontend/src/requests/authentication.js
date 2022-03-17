import { hashPassword } from "../util/auth";
import { createNullPromise, getRequest } from './common';

const getRegistrationRequestObject = (username, password) => ({
    name: username,
    passwordHash: hashPassword(password),
});

const getLoginRequestObject = (username, password) => ({
    name: username,
    passwordHash: hashPassword(password),
});

const getLogoutRequestObject = (userId) => ({
    userId: userId,
});

export const register = async (username, password) => {
    const registrationEndpoint = '/api/user/register';
    const registrationObject = getRegistrationRequestObject(username, password);
    const request = getRequest('POST', registrationObject);

    const response = await fetch(registrationEndpoint, request);

    return response.json();
};

export const login = async (username, password) => {
    const loginEndpoint = '/api/user/login';
    const loginObject = getLoginRequestObject(username, password);
    const request = getRequest('POST', loginObject);

    let response;

    try {
        response = await fetch(loginEndpoint, request);
    } catch (e) {
        console.log('error: ' + e);
    }

    if (response.status === 404) return createNullPromise();

    return response.json();
};

export const logout = async (userId) => {
    const logoutEndpoint = '/api/user/logout';
    const logoutObject = getLogoutRequestObject(userId);
    const request = getRequest('DELETE', logoutObject);

    await fetch(logoutEndpoint, request);

    return createNullPromise();
}