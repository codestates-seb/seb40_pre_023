import React from 'react';
import LayoutContainer from '../../components/LayoutContainer/LayoutContainer';
import MyInfo from '../../components/MyPage/MyInfo/MyInfo';
import MyProfile from '../../components/MyPage/MyProfile/MyProfile';
import Footer from '../../components/Footer/Footer';
const MyPage = () => {
  return (
    <LayoutContainer>
      <MyInfo />
      <MyProfile />
    </LayoutContainer>
  );
};

export default MyPage;
