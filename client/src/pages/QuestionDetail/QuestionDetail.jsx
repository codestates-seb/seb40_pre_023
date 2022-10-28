import React from 'react';
import {} from './style';
import PageContainer from '../../components/PageContainer/PageContainer';
import LayoutContainer from '../../components/LayoutContainer/LayoutContainer';
import PageTitle from '../../components/PageTitle/PageTitle';
import Aside from '../../components/Aside/Aside';

const QuestionDetail = () => {
  return (
    <>
      <LayoutContainer>
        <PageContainer>
          <PageTitle title="All Questions" button="Ask Question"></PageTitle>
          <main></main>
        </PageContainer>
      </LayoutContainer>
    </>
  );
};

export default QuestionDetail;
