import React, { useState, useRef } from 'react';
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

// TODO: 테스트용 더미 데이터 연결후 지워야함
import { qArticle, aArticle, qdetail } from './dummy';

//TODO: postAnswer로 answerpost 보내야함
import { postAnswer } from '../../api/api';

const QuestionDetail = () => {
  //TODO: 질문 작성자 아이디와 비교해서 해당 글을 수정할 수 있는지 여부 체크 필요
  const [editable, setEditable] = useState(true);
  const [data, setData] = useState(qArticle);
  const [answer, setAnswer] = useState('');
  const [vote, setVote] = useState(0);
  const editorRef = useRef();
  const questionRef = useRef();
  const sanitizer = dompurify.sanitize;

  const onSubmit = (e) => {
    e.preventDefault();
    const description = editorRef.current.editor.root.innerHTML;
    console.log(description);
    // postAnswer();
  };

  return (
    <>
      <LayoutContainer>
        <DetailPageContainer>
          <PageTitle title={qdetail.title} button="Ask Question"></PageTitle>
          <Stamps>
            <ul>
              <li>
                Asked <strong>{displayCreatedAt(qdetail.createdAt)}</strong>
              </li>
              <li>
                Modified <strong>{displayCreatedAt(qdetail.modifiedAt)}</strong>
              </li>
              <li>
                Viewed <strong>3 times</strong>
              </li>
            </ul>
          </Stamps>
          <main>
            <DetailContents>
              <QuestionContainer>
                <VoteBtns
                  votes={qdetail.questionVote}
                  questionId={qdetail.questionId}
                ></VoteBtns>
                <article>
                  <div className="ql-snow">
                    <QlViewer
                      ref={questionRef}
                      dangerouslySetInnerHTML={{ __html: sanitizer(data) }}
                    />
                  </div>
                  <QaFooter
                    type="question"
                    createAt={displayCreatedAt(qdetail.createdAt)}
                    modifiedAt={displayCreatedAt(qdetail.modifiedAt)}
                    name={qdetail.member.nickname}
                    editable={editable}
                    avatar={qdetail.member.img}
                  ></QaFooter>
                </article>
              </QuestionContainer>
              {qdetail.answerList.map((a) => {
                return (
                  <AnswerItem
                    key={a.answerId}
                    answer={a}
                    editable={editable}
                  ></AnswerItem>
                );
              })}
              <form action="submit" onSubmit={onSubmit}>
                <EditorContainer>
                  <AnswerTitle>Your Answer</AnswerTitle>
                  <ReactQuill
                    theme="snow"
                    modules={editorModules}
                    ref={editorRef}
                    onChange={(content, delta, source, editor) =>
                      setAnswer(editor.getHTML())
                    }
                  />
                </EditorContainer>
                <PostAnswerBtn>Post Your Answer</PostAnswerBtn>
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
