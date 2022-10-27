import React from 'react';
import Filter from '../components/Filter/Filter';
import PageTitle from '../components/PageTitle/PageTitle';
import PageContainer from '../components/PageContainer/PageContainer';
import Aside from '../components/Aside/Aside';
import Rside from '../components/Rside/Rside';
import LayoutContainer from '../components/LayoutContainer/LayoutContainer';
import QuestionList from '../components/Question/QuestionList';

const Main = () => {
  return (
    <>
      <LayoutContainer>
        <PageContainer>
          <main>
            <PageTitle title="All Questions" button="Ask Question" />
            <Filter></Filter>
            <QuestionList />
          </main>
          <Aside>
            <Rside />
            {/* 다혜님 여기서 부터 */}
          </Aside>
        </PageContainer>
      </LayoutContainer>
    </>
  );
};

export default Main;
