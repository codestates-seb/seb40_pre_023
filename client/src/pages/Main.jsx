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
import { getQuestions } from '../api/api';

const listDummy = [
  {
    createdAt: '2022-10-26T17:00:47.2460054',
    modifiedAt: '2022-10-26T17:00:47.2460054',
    questionId: 1,
    member: {
      createdAt: '2022-10-26T17:00:47.2460054',
      modifiedAt: '2022-10-26T17:00:47.2460054',
      memberId: 1,
      email: 'hgd1@gmail.com',
      nickname: 'honggildong',
      about: '저는 홍길동1입니다.',
      img: '사진',
    },
    vote: '1',
    answers: '0',
    views: '0',
    title: 'ffffffffffddsdafsadfsdsdfasddssadfsadfsdafdddddddddd',
    content:
      'fjfjfjfjsadfsadsdafdsafhkjdsahfkjldshakjflhasdkjlfasdfsdhasdkjljsadlkfjals;kdfjldsakjjsakdlfjlaskd;fjlskadfjfsadksafjfjfjfjfjfj',
    status: 'unanswered',
    tags: [
      {
        tagId: 1,
        content: 'java',
      },
      {
        tagId: 2,
        content: 'javascript',
      },
      {
        tagId: 3,
        content: 'react',
      },
    ],
  },
  {
    createdAt: '2022-10-26T17:00:47.2460054',
    modifiedAt: '2022-10-26T17:00:47.2460054',
    questionId: 2,
    member: {
      createdAt: '2022-10-26T17:00:47.2460054',
      modifiedAt: '2022-10-26T17:00:47.2460054',
      memberId: 2,
      email: 'hgd2@gmail.com',
      nickname: 'honggildong223',
      about: '저는 홍길동2입니다.',
      img: '사진',
    },
    title: 'Test2',
    content:
      '2번째 글sadfjksajdfdsafdslkjdlksfjlskdfjklsdjfksdlgjlfasdjhdjksahfsadjklfhsdajklfhsdjkldsjkgfshdfsjkghkfjfjkdghgdksfjlhgfjk입니다.',
    status: 'unanswered',
    tags: [
      {
        tagId: 1,
        content: 'java',
      },
      {
        tagId: 2,
        content: 'javascript',
      },
    ],
  },
];

const Main = () => {
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(15);
  const [data, setData] = useState(listDummy);
  const navigate = useNavigate();

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
