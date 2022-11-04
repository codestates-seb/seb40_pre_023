import React, { useState, useEffect } from 'react';
import LayoutContainer from '../../components/LayoutContainer/LayoutContainer';
import Aside from '../../components/Aside/Aside';
import Rside from '../../components/Rside/Rside';
import { QlViewer } from '../../styles/QlVeiwer';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { editorModules } from '../../utils/quillSettings';
import { EditorContainer } from '../../styles/EditorContainer';
import 'highlight.js/styles/stackoverflow-light.css';
import dompurify from 'dompurify';
import {
  EditPageContainer,
  EditContainer,
  QuestionViewSec,
  AnswerEditSec,
  EditBtn,
  CancelBtn,
} from './style';
import { useNavigate, useParams } from 'react-router';
import { getDetail, patchAnswer } from '../../api/api';

const AnswerEdit = () => {
  const [body, setBody] = useState('');
  const [questionId, setQustionId] = useState('');
  const sanitizer = dompurify.sanitize;
  const navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    getDetail(`/answers/${id}`).then((res) => {
      //답변 정보 끌어오기
      document.querySelector('.ql-editor').innerHTML = sanitizer(
        res.data.content
      );
      setQustionId(res.data.questionId);
      //답변 정보에서 질문 아이디 추출해서 질문 정보 끌어오기
      getDetail(`/questions/${res.data.questionId}`).then((res) => {
        document.querySelector('.question-content').innerHTML = sanitizer(
          res.data.content
        );
        document.querySelector('.question-title').innerHTML = sanitizer(
          res.data.title
        );
      });
    });
  }, []);

  const onSubmit = () => {
    const jsonBody = JSON.stringify({
      content: body,
    });
    patchAnswer(id, jsonBody).then((res) => {
      navigate(`/quesitons/${questionId}`, { replace: true });
    });
  };

  return (
    <>
      <LayoutContainer>
        <EditPageContainer>
          <main>
            <EditContainer>
              <QuestionViewSec>
                <h3 className="question-title"> </h3>
                <QlViewer className="question-content"></QlViewer>
              </QuestionViewSec>
              <AnswerEditSec>
                <h2>Answer</h2>
                <EditorContainer>
                  <ReactQuill
                    theme="snow"
                    modules={editorModules}
                    onChange={(content, delta, source, editor) =>
                      setBody(editor.getHTML())
                    }
                  />
                </EditorContainer>
              </AnswerEditSec>
              <div>
                <EditBtn onClick={onSubmit}>Save edits</EditBtn>
                <CancelBtn
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  Cancel
                </CancelBtn>
              </div>
            </EditContainer>
            <Aside>
              <Rside></Rside>
            </Aside>
          </main>
        </EditPageContainer>
      </LayoutContainer>
    </>
  );
};

export default AnswerEdit;
