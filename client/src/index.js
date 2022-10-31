import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import { RecoilRoot } from 'recoil';

import{ fakeBackend } from './_helpers/fake-backend';

fakeBackend();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);

// ReactDOM.render(
//   <React.StrictMode>
//       <RecoilRoot>
//           <App />
//       </RecoilRoot>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
