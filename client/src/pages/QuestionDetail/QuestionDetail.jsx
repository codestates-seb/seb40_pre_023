import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useParams } from 'react-router';
import LayoutContainer from '../../components/LayoutContainer/LayoutContainer';
import PageTitle from '../../components/PageTitle/PageTitle';
import Aside from '../../components/Aside/Aside';
import Rside from '../../components/Rside/Rside';
import QaFooter from '../../components/QaFooter/QaFooter';
import { displayCreatedAt } from '../../utils/displayCreatedAt';
import AnswerItem from '../../components/AnswerItem/Answer';
import VoteBtns from '../../components/VoteBtns/VoteBtns';
import {
  DetailPageContainer,
  QuestionContainer,
  Stamps,
  DetailContents,
  AnswerTitle,
  PostAnswerBtn,
  TagContainer,
  Tag,
} from './style';

//작성한 컨텐츠 보기 위한 스타일
import { QlViewer } from '../../styles/QlVeiwer';
//html 태그 문서 삽입 시 보안을 위한 sanitizer
import dompurify from 'dompurify';

//에디터 필요모듈
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { editorModules } from '../../utils/quillSettings';
import { EditorContainer } from '../../styles/EditorContainer';
import 'highlight.js/styles/stackoverflow-light.css';

import { useRecoilState } from 'recoil';
import { authAtom } from '../../_state';

//TODO: postAnswer로 answerpost 보내야함
import { getDetail, postAnswer } from '../../api/api';

const QuestionDetail = () => {
  //TODO: 답변 등록시 보낼 memberId, nickname 가져오기
  const [userInfo, setUserInfo] = useRecoilState(authAtom);
  //TODO: 질문 작성자 아이디와 비교해서 해당 글을 수정할 수 있는지 여부 체크 필요
  const [editable, setEditable] = useState(true);

  const [data, setData] = useState({});
  const [memeber, setMember] = useState({});
  const [answerList, setAnswerList] = useState([]);

  //html answer 컨텐츠
  const [answerContent, setAnswerContent] = useState('');
  const [isAnswerFit, setIsAnswerFit] = useState(true);

  const postBtnRef = useRef();
  const sanitizer = dompurify.sanitize;
  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    getDetail(`${location.pathname}`).then((res) => {
      setData(res.data);
      setMember(res.data.member);
      setAnswerList(res.data.answerList);
    });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const patchBody = JSON.stringify({
      memberId: 1, //auth 멤버 아이디
      questionId: id,
      nickname: '', //auth 닉넴
      content: answerContent,
    });
    postAnswer(patchBody)
      .then((res) => {
        // setAnswerList([...answerList, res.data]);
        console.log(res);
      })
      .catch((error) => alert(`답변 작성에 실패하였습니다!🥲`));
  };

  const onChange = (html, text) => {
    setAnswerContent(html);
    if (text.length > 20) {
      postBtnRef.current.disabled = false;
      setIsAnswerFit(true);
    } else {
      postBtnRef.current.disabled = true;
      setIsAnswerFit(false);
    }
  };

  return (
    <>
      <LayoutContainer>
        <DetailPageContainer>
          <PageTitle title={data.title} button="Ask Question"></PageTitle>
          <Stamps>
            <ul>
              <li>
                Asked <strong>{displayCreatedAt(data.createdAt)}</strong>
              </li>
              <li>
                Modified <strong>{displayCreatedAt(data.modifiedAt)}</strong>
              </li>
              <li>
                Viewed <strong>{data.views}</strong>
              </li>
            </ul>
          </Stamps>
          <main>
            <DetailContents>
              <QuestionContainer>
                <VoteBtns
                  votes={
                    data.questionVote?.voteCount === undefined
                      ? 0
                      : data.questionVote.voteCount
                  }
                  questionId={data.questionId}
                ></VoteBtns>
                <article>
                  <div className="ql-snow">
                    <QlViewer
                      dangerouslySetInnerHTML={{
                        __html: sanitizer(data.content),
                      }}
                    />
                  </div>
                  <TagContainer>
                    {data.tags
                      ? data.tags.map((el, idx) => {
                          return <Tag key={idx}>{el}</Tag>;
                        })
                      : ''}
                  </TagContainer>
                  <QaFooter
                    type="question"
                    createAt={displayCreatedAt(data.createdAt)}
                    modifiedAt={displayCreatedAt(data.modifiedAt)}
                    name={memeber.nickname}
                    editable={editable}
                    avatar={memeber.img}
                    itemId={data.questionId}
                  ></QaFooter>
                </article>
              </QuestionContainer>
              {answerList.map((a) => {
                return (
                  <AnswerItem
                    key={a.answerId}
                    answer={a}
                    editable={editable}
                  ></AnswerItem>
                );
              })}
              <form action="submit" onSubmit={onSubmit}>
                <AnswerTitle>Your Answer</AnswerTitle>
                <EditorContainer className={isAnswerFit ? '' : 'error'}>
                  <ReactQuill
                    theme="snow"
                    modules={editorModules}
                    onChange={(content, delta, source, editor) =>
                      onChange(editor.getHTML(), editor.getText())
                    }
                  />
                </EditorContainer>
                <small>Mimimum 20 characters</small>
                <PostAnswerBtn ref={postBtnRef} disabled>
                  Post Your Answer
                </PostAnswerBtn>
              </form>
            </DetailContents>
            <Aside>
              <Rside></Rside>
            </Aside>
          </main>
        </DetailPageContainer>
      </LayoutContainer>
    </>
  );
};

export default QuestionDetail;
