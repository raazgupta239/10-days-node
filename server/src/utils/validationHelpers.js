// utils/validationHelpers.js

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;

export const isValidEmail = (email) => emailRegex.test(email);
export const isValidPassword = (password) => passwordRegex.test(password);
