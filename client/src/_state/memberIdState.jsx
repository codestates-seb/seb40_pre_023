import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();

const memberIdState = atom({
  key: 'memberIdState',
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export default memberIdState;
