import React from 'react';

// 이메일 정규식
export const isEmail = (email) => {
  return /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(
    email
  );
};

// 12글자 특수문자 정규식 (숫자, 대문자, 특수문자 포함)
export const isPassword = (password) => {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/g.test(
    password
  );
};
