import { useState, useEffect } from 'react';
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
import { getAnswerDetail, getDetail, patchAnswer } from '../../api/api';
import { useRecoilState } from 'recoil';
import tokenState from '../../_state/tokenState';

const AnswerEdit = () => {
  const [token, setToken] = useRecoilState(tokenState);

  const [body, setBody] = useState('');
  const [editorError, setEditorError] = useState(false);

  const [questionId, setQuestionId] = useState('');
  const sanitizer = dompurify.sanitize;
  const navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    getAnswerDetail(`/answers/${id}`, token).then((res) => {
      //답변 정보 끌어오기
      document.querySelector('.ql-editor').innerHTML = sanitizer(
        res.data.content
      );
      setQuestionId(res.data.questionId);
      // //답변 정보에서 질문 아이디 추출해서 질문 정보 끌어오기
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
    patchAnswer(id, jsonBody, token).then((res) => {
      navigate(`/questions/${questionId}`);
    });
  };

  const onChangeEditor = (content, text) => {
    setBody(content);
    if (text.length <= 20) {
      setEditorError(true);
    } else {
      setEditorError(false);
    }
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
                <EditorContainer className={editorError ? 'error' : ''}>
                  <ReactQuill
                    theme="snow"
                    modules={editorModules}
                    onChange={(content, delta, source, editor) =>
                      onChangeEditor(editor.getHTML(), editor.getText())
                    }
                  />
                </EditorContainer>
                <small>Minimum 20 characters.</small>
              </AnswerEditSec>
              <div>
                <EditBtn onClick={onSubmit} disabled={editorError}>
                  Save edits
                </EditBtn>
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
