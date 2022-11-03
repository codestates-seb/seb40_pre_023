import { atom } from 'recoil';

const isLoginState = atom({
  key: 'isLoginState',
  default: false,
});

export default isLoginState;
