import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Filter from '../../components/Filter/Filter';
import PageTitle from '../../components/PageTitle/PageTitle';
import PageContainer from '../../components/PageContainer/PageContainer';
import Aside from '../../components/Aside/Aside';
import Rside from '../../components/Rside/Rside';
import LayoutContainer from '../../components/LayoutContainer/LayoutContainer';
import QuestionList from '../../components/Question/QuestionList';
import PaginationGroup from '../../components/PaginationGroup/PaginationGroup';
import { getQuestions } from '../../api/api';

const searchDummy = [
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
    title: '검색결과1',
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
    title: '검색 결과2',
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

const QuestionSearch = () => {
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(15);
  const [totalPage, setTotalPage] = useState(0);
  const [data, setData] = useState(searchDummy);
  const [totalQuestion, setTotalQustion] = useState(0);
  let { keyword } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    //검색화면 초기화 & 검색 페이지에서 페이지 네이션 눌를 경우
    getQuestions(page, size, keyword).then((res) => {
      navigate(`/search/${keyword}/${page}/${size}`);
      //TODO: 현재 임시로 pageNum과 pageSize를 응답받도록 설정해 놓음 추후, 페이지에 해당하는 데이터 받아야함
      // setData(res);
      // console.log(res);
      setTotalPage(res.data.pageInfo.totalPages);
    });
  }, [page, size, keyword]);

  return (
    <>
      <LayoutContainer>
        <PageContainer>
          <main>
            <PageTitle title="Search Results" button="Ask Question" />
            <Filter totalQuestion={totalQuestion}></Filter>
            <QuestionList questions={data} />
            <PaginationGroup
              count={totalPage}
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

export default QuestionSearch;
