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
import { getQuestions, getVoteFilteredData } from '../api/api';
import Loading from '../components/Loading/Loading';
const Main = () => {
  const [page, setPage] = useState(1);
  const [size, setSize] = useState('15');
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState(false);
  const [totalPage, setTotalPage] = useState(0);
  const [totalQuestion, setTotalQuestion] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (filtered) {
      setIsLoading(true);
      getVoteFilteredData(page, size).then((res) => {
        navigate(`/${page}/${size}/votes`);
        setData(res.data.data);
        setTotalPage(res.data.pageInfo.totalPages);
        setTotalQuestion(res.data.pageInfo.totalElements);
        setIsLoading(false);
      });
    } else {
      setIsLoading(true);
      getQuestions(page, size).then((res) => {
        navigate(`/${page}/${size}`);
        setData(res.data.data);
        setTotalPage(res.data.pageInfo.totalPages);
        setTotalQuestion(res.data.pageInfo.totalElements);
        setIsLoading(false);
      });
    }
  }, [page, size]);

  return (
    <>
      <LayoutContainer>
        <PageContainer>
          <main>
            <PageTitle title="All Questions" button="Ask Question" />
            <Filter
              totalQuestion={totalQuestion}
              setData={setData}
              setFiltered={setFiltered}
              setPage={setPage}
              setSize={setSize}
              type="questions"
            ></Filter>
            {isLoading ? <Loading /> : <QuestionList questions={data} />}
            <PaginationGroup
              totalPage={totalPage}
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
