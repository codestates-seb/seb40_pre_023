import React from 'react';
import LayoutContainer from '../../components/LayoutContainer/LayoutContainer';
import MyInfo from '../../components/MyPage/MyInfo/MyInfo';
import MyProfile from '../../components/MyPage/MyProfile/MyProfile';
import Footer from '../../components/Footer/Footer';
import memberIdState from '../../_state/memberIdState';
import { useRecoilState } from 'recoil';
import { useState } from 'react';
import Loading from '../../components/Loading/Loading';
const MyPage = () => {
  const [memberId, setMemberId] = useRecoilState(memberIdState);
  const [isLoading, setIsLoading] = useState(false);
  // 여기서 api 호출 함수 작성해주세요
  // api 연결전 상단에 isloading true 해주세요
  return (
    <LayoutContainer>
      {isLoading ? (
        <div style={{ paddingTop: '10em', paddingBottom: '10em' }}>
          <Loading />
        </div>
      ) : (
        <>
          <MyInfo memberId={memberId} />
          <MyProfile memberId={memberId} />
        </>
      )}
    </LayoutContainer>
  );
};

export default MyPage;
