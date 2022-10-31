import React, { useState, useRef, useEffect, useCallback } from 'react';
import LayoutContainer from '../../components/LayoutContainer/LayoutContainer';
import Aside from '../../components/Aside/Aside';
import Rside from '../../components/Rside/Rside';
import { QlViewer } from '../../styles/QlVeiwer';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { editorModules } from '../../utils/quillSettings';
import { EditorContainer } from '../../styles/EditorContainer';
import 'highlight.js/styles/stackoverflow-light.css';
//html 태그 문서 삽입 시 보안을 위한 sanitizer
import dompurify from 'dompurify';
import {
  EditPageContainer,
  EditContainer,
  QuestionViewSec,
  AnswerEditSec,
  EditBtn,
  CancelBtn,
} from './style';
//TODO: API 연결후 더미 삭제
import { qdetail, adetail } from './dummy';
import { useNavigate } from 'react-router';

const AnswerEdit = () => {
  const [body, setBody] = useState('');
  const sanitizer = dompurify.sanitize;
  const navigate = useNavigate();

  useEffect(() => {
    document.querySelector('.ql-editor').innerHTML = adetail.content;
  }, []);

  return (
    <>
      <LayoutContainer>
        <EditPageContainer>
          <main>
            <EditContainer>
              <QuestionViewSec>
                <h3>{qdetail.title}</h3>
                <QlViewer
                  dangerouslySetInnerHTML={{
                    __html: sanitizer(qdetail.content),
                  }}
                ></QlViewer>
              </QuestionViewSec>
              <AnswerEditSec>
                <h2>Answer</h2>
                <EditorContainer>
                  <ReactQuill
                    theme="snow"
                    modules={editorModules}
                    // ref={editorRef}
                    onChange={(content, delta, source, editor) =>
                      setBody(editor.getHTML())
                    }
                  />
                </EditorContainer>
              </AnswerEditSec>
              <div>
                <EditBtn>Save edits</EditBtn>
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
