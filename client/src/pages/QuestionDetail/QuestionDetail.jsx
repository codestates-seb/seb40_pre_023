import React, { useState } from 'react';
import LayoutContainer from '../../components/LayoutContainer/LayoutContainer';
import PageTitle from '../../components/PageTitle/PageTitle';
import Aside from '../../components/Aside/Aside';
import Rside from '../../components/Rside/Rside';
import QaFooter from '../../components/QaFooter/QaFooter';
import {
  VerticalBtns,
  DetailPageContainer,
  DetailContainer,
  DetailContents,
  Article,
  Vote,
  EditorContainer,
  AnswerTitle,
  PostAnswerBtn,
} from './style';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const qdetail = {
  questionId: 1,
  member: {
    nickname: 'hong',
    img: '',
  },
  title: '~~',
  content: '~~',
  createdAt: '22.10.28',
  modifiedAt: '22.10.28',
  questionVote: '~~',
  tags: ['react', '~~~'],
  answerList: [
    {
      answerId: 1,
      member: {
        nickname: 'dd',
        img: '~~~',
      },
      content: '~~',
      createAt: 'YYMMDD',
      modifiedAt: 'YYMMDD',
      answerVote: 10,
    },
  ],
};

const QuestionDetail = () => {
  const modules = {
    toolbar: [
      ['bold', 'italic'],
      ['link', ('underline', 'strike', 'blockquote'), 'code', 'code-block'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
    ],
  };

  const formats = [
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'code-block',
    'code',
  ];

  //TODO: 질문 작성자 아이디와 비교해서 해당 글을 수정할 수 있는지 여부 체크 필요
  const [editable, setEditable] = useState(true);

  return (
    <>
      <LayoutContainer>
        <DetailPageContainer>
          <PageTitle title="All Questions" button="Ask Question"></PageTitle>
          {/* <main></main> */}
          <DetailContainer>
            <DetailContents>
              <VerticalBtns>
                <Vote>
                  <button>
                    <svg width="36" height="36" viewBox="0 0 36 36">
                      <path d="M2 25h32L18 9 2 25Z"></path>
                    </svg>
                  </button>
                  <p>0</p>
                  <button>
                    <svg width="36" height="36" viewBox="0 0 36 36">
                      <path d="M2 11h32L18 27 2 11Z"></path>
                    </svg>
                  </button>
                </Vote>
              </VerticalBtns>
              <Article>
                <pre>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Excepturi doloribus minima maxime nihil vero sapiente porro,
                  perferendis explicabo repellat maiores natus ad suscipit.
                  Doloribus quam est ad exercitationem quisquam ipsam ipsa, sed
                  quidem ullam! Distinctio tempore exercitationem totam dolorum
                  in eius amet quaerat,
                </pre>
                <QaFooter
                  type="question"
                  createAt={qdetail.createdAt}
                  modifiedAt={qdetail.modifiedAt}
                  name={qdetail.member.nickname}
                  editable={editable}
                  avatar={qdetail.member.img}
                ></QaFooter>
                <form action="submit">
                  <EditorContainer>
                    <AnswerTitle>Your Answer</AnswerTitle>
                    <ReactQuill
                      style={{ height: '600px' }}
                      theme="snow"
                      modules={modules}
                      formats={formats}
                    />
                  </EditorContainer>
                  <PostAnswerBtn>Post Your Answer</PostAnswerBtn>
                </form>
              </Article>
            </DetailContents>
            <Aside>
              <Rside></Rside>
            </Aside>
          </DetailContainer>
        </DetailPageContainer>
      </LayoutContainer>
    </>
  );
};

export default QuestionDetail;
