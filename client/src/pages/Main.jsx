import React from 'react';
import Filter from '../components/Filter/Filter';
import PageTitle from '../components/PageTitle/PageTitle';
import PageContainer from '../components/PageContainer/PageContainer';
import Aside from '../components/Aside/Aside';
import LayoutContainer from '../components/LayoutContainer/LayoutContainer';

const Main = () => {
  return (
    <>
      <LayoutContainer>
        <PageContainer>
          <main>
            <PageTitle title="All Questions" />
            <Filter></Filter>
            {/* 경준님 여기서 부터 */}
          </main>
          <Aside>
            aside
            {/* 다혜님 여기서 부터 */}
          </Aside>
        </PageContainer>
      </LayoutContainer>
    </>
  );
};

export default Main;
