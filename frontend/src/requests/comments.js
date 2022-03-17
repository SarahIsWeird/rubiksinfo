import { createNullPromise } from './common';

export const getComments = async (origin) => {
    const response = await fetch('/api/comment?origin=' + origin);

    if (response.status === 404 || response.status === 401) return createNullPromise();

    return response.json();
}

export const newComment = async (text, origin, userId, username) => {
    const response = await fetch('/api/comment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            text: text,
            origin: origin,
            userId: userId
        })
    });

    if (response.status === 404) return createNullPromise();
}