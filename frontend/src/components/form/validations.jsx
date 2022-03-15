export const validateUsername = (username) =>
    username !== '';

export const validateLoginPassword = (password) =>
    password !== '';

export const validateRegistrationPassword = (password) =>
    password.length >= 10;

export const validatePasswordConfirmation = (password, passwordConfirmation) =>
    password === passwordConfirmation;