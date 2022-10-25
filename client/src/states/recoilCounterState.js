import { atom } from 'recoil';

const recoilCounterState = atom({
  key: 'recoilCounterState',
  default: 1,
});

export default recoilCounterState;
