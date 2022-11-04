import { useState, useEffect } from 'react';
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
import { SubDesc } from './style';
import { NoResultBox } from './style';
import { GroupText } from './style';

const QuestionSearch = () => {
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(15);
  const [totalPage, setTotalPage] = useState(0);
  const [data, setData] = useState([]);
  const [totalQuestion, setTotalQustion] = useState(0);
  let { keyword } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    //검색화면 초기화 & 검색 페이지에서 페이지 네이션 눌를 경우
    getQuestions(page, size, keyword).then((res) => {
      navigate(`/search/${keyword}/${page}/${size}`);
      setTotalPage(res.data.pageInfo.totalPages);
    });
  }, [page, size, keyword]);

  return (
    <>
      <LayoutContainer>
        <PageContainer>
          <main>
            <PageTitle title="Search Results" button="Ask Question" />
            <SubDesc>
              <p>Results for {keyword}</p>
              <p>
                Search options <strong>not deleted</strong>
              </p>
            </SubDesc>
            <Filter totalQuestion={totalQuestion} type="results"></Filter>
            {data.length === 0 ? (
              <NoResultBox>
                <svg width="96" height="96" viewBox="0 0 96 96">
                  <path
                    opacity=".2"
                    d="M60.38 76.15a6.2 6.2 0 1 1 8.77-8.77l17.78 17.79a6.2 6.2 0 0 1-8.76 8.76L60.38 76.15Z"
                  ></path>
                  <path d="M52.17 13.27a1.5 1.5 0 0 0-1.5 2.6A25.5 25.5 0 0 1 63 32.97a1.5 1.5 0 1 0 2.94-.59 28.5 28.5 0 0 0-13.77-19.1ZM36.64 11c0-.84.67-1.5 1.5-1.5 1.8 0 3.59.19 5.35.53a1.5 1.5 0 1 1-.58 2.95 25.5 25.5 0 0 0-4.78-.48 1.5 1.5 0 0 1-1.5-1.5ZM38 1.5a36.5 36.5 0 1 0 22.3 65.4 6.47 6.47 0 0 0 1.9 4.48l19.15 19.15a6.5 6.5 0 0 0 9.18-9.18L71.38 62.2a6.47 6.47 0 0 0-4.48-1.9A36.5 36.5 0 0 0 38 1.5ZM4.5 38a33.5 33.5 0 1 1 67 0 33.5 33.5 0 0 1-67 0Zm59.83 31.26a3.5 3.5 0 0 1 4.93-4.93l19.15 19.14a3.5 3.5 0 1 1-4.94 4.94L64.33 69.26Z"></path>
                </svg>
                <GroupText>
                  <h5>
                    We couldn't find anything for <b>{keyword}</b>
                  </h5>
                  <p>
                    <b>Search options:</b> not deleted
                    <br />
                    Try different or less specific keywords.
                  </p>
                </GroupText>
              </NoResultBox>
            ) : (
              <>
                <QuestionList questions={data} />

                <PaginationGroup
                  count={totalPage}
                  page={page}
                  size={size}
                  setSize={setSize}
                  setPage={setPage}
                ></PaginationGroup>
              </>
            )}
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
