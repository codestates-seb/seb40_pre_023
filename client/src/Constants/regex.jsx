import React from 'react';
export const ENG_REGEX = /^[a-zA-Z-+]*$/;
export const EMAIL_REGEX = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/;
export const PASSWORD_REGEX = /(?=.*\d)(?=.*[a-z]).{8,}/;