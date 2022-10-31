import { atom } from 'recoil';

const isLoginState = atom({
  key: 'isLoginState',
  default: true,
});

export default isLoginState;
