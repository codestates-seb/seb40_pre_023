import React from 'react';
import LayoutContainer from '../../components/LayoutContainer/LayoutContainer';
import MyInfo from '../../components/MyPage/MyInfo/MyInfo';
import MyProfile from '../../components/MyPage/MyProfile/MyProfile';
import memberIdState from '../../_state/memberIdState';
import { useRecoilState } from 'recoil';
import { useState, useEffect } from 'react';
import Loading from '../../components/Loading/Loading';
import { InfoAPI } from '../../api/infoapi';
import tokenState from '../../_state/tokenState';
import isLoginState from '../../_state/isLoginState';
const MyPage = () => {
  const [memberId, setMemberId] = useRecoilState(memberIdState);
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useRecoilState(tokenState);
  const [user, setUser] = useState({ data: {} });
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  useEffect(() => {
    setIsLoading(true);
    InfoAPI(memberId, token).then((res) => {
      if (res.status === 404) {
        alert('로그인이 필요한 서비스입니다.');
        setIsLogin(false);
        setToken(null);
        setMemberId(null);
        window.location.href = window.location.href = '/account/login';
      }
      setUser(res.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <LayoutContainer>
      {isLoading ? (
        <div style={{ paddingTop: '10em', paddingBottom: '10em' }}>
          <Loading />
        </div>
      ) : (
        <>
          <MyInfo memberId={memberId} user={user} />
          <MyProfile memberId={memberId} user={user} />
        </>
      )}
    </LayoutContainer>
  );
};

export default MyPage;
