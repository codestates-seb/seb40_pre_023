import { atom } from 'recoil';

const recoilDataState = atom({
  key: 'recoilDataState',
  default: [],
});

export default recoilDataState;
