import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Filter from '../components/Filter/Filter';
import PageTitle from '../components/PageTitle/PageTitle';
import PageContainer from '../components/PageContainer/PageContainer';
import Aside from '../components/Aside/Aside';
import Rside from '../components/Rside/Rside';
import LayoutContainer from '../components/LayoutContainer/LayoutContainer';
import QuestionList from '../components/Question/QuestionList';
import PaginationGroup from '../components/PaginationGroup/PaginationGroup';
import { getData, getQuestions } from '../api/api';

const Main = () => {
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(15);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getQuestions(page, size).then((res) => {
      navigate(`/${page}/${size}`);
      setData(res.data.data);
    });
  }, [page, size]);

  return (
    <>
      <LayoutContainer>
        <PageContainer>
          <main>
            <PageTitle title="All Questions" button="Ask Question" />
            <Filter></Filter>
            <QuestionList questions={data} />
            <PaginationGroup
              page={page}
              size={size}
              setSize={setSize}
              setPage={setPage}
            ></PaginationGroup>
          </main>
          <Aside>
            <Rside />
          </Aside>
        </PageContainer>
      </LayoutContainer>
    </>
  );
};

export default Main;
