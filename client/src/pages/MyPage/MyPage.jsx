import React from 'react';
import LayoutContainer from '../../components/LayoutContainer/LayoutContainer';
import MyInfo from '../../components/MyPage/MyInfo/MyInfo';
import MyProfile from '../../components/MyPage/MyProfile/MyProfile';
import Footer from '../../components/Footer/Footer';
import memberIdState from '../../_state/memberIdState';
import { useRecoilState } from 'recoil';
const MyPage = () => {
  const [memberId, setMemberId] = useRecoilState(memberIdState);
  console.log(memberId, 'memberId');
  return (
    <LayoutContainer>
      <MyInfo memberId={memberId} />
      <MyProfile memberId={memberId} />
    </LayoutContainer>
  );
};

export default MyPage;
