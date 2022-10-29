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

const MyPage = () => {
  const [memberId, setMemberId] = useRecoilState(memberIdState);
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useRecoilState(tokenState);
  // 여기서 api 호출 함수 작성해주세요
  // api 연결전 상단에 isloading true 해주세요
  const [user, setUser] = useState({ data: {} });

  useEffect(() => {
    setIsLoading(true);
    InfoAPI(token).then((res) => {
      console.log(res.data);
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
