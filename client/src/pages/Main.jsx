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
    getData().then((res) => {
      setData(res.data.data);
    });
  }, []);

  useEffect(() => {
    //메인 리스트화면 초기화 & 메인 페이지에서 네이션 눌를 경우
    getQuestions(page, size).then((res) => {
      navigate(`/${page}/${size}`);
      //TODO: 현재 임시로 pageNum과 pageSize를 응답받도록 설정해 놓음 추후, 페이지에 해당하는 데이터 받아야함
      // setData(res);
      console.log(res);
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
