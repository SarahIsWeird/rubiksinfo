export const commonParameters = {
    headers: {
        'Content-Type': 'application/json',
    },
    credentials: 'include',
};

export const commonGetParameters = {
    ...commonParameters,
    method: 'GET',
};

export const getRequest = (method, requestObject) => ({
    ...commonParameters,
    method: method,
    body: JSON.stringify(requestObject),
});

export const createNullPromise = () =>
    new Promise((resolve) => resolve(null));