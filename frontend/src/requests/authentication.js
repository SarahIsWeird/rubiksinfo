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
    const registrationEndpoint = '/api/auth/register';
    const registrationObject = getRegistrationRequestObject(username, password);
    const request = getRequest('POST', registrationObject);

    const response = await fetch(registrationEndpoint, request);

    return response.json();
};

export const login = async (username, password) => {
    const loginEndpoint = '/api/auth/login';
    const loginObject = getLoginRequestObject(username, password);
    const request = getRequest('POST', loginObject);

    const response = await fetch(loginEndpoint, request);

    if (response.status === 404) return createNullPromise();

    return response.json();
};

export const logout = async (userId) => {
    const logoutEndpoint = '/api/auth/logout';
    const logoutObject = getLogoutRequestObject(userId);
    const request = getRequest('DELETE', logoutObject);

    await fetch(logoutEndpoint, request);

    return createNullPromise();
}