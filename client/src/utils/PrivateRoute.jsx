import React from 'react';
import Login from '../pages/Login/Login';
import { useRecoilValue } from 'recoil';
import isLoginState from '../_state/isLoginState';
const PrivateRoute = ({ component: Component }) => {
  const isLogin = useRecoilValue(isLoginState);
  return isLogin ? Component : <Login />;
};

export default PrivateRoute;
