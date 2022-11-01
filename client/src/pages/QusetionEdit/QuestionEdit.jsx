import React, { useState, useRef, useEffect, useCallback } from 'react';
import LayoutContainer from '../../components/LayoutContainer/LayoutContainer';
import {
  EditPageContainer,
  EditContainer,
  InputUnit,
  TitleEditInput,
  TagsInputGroup,
  EditBtn,
  CancelBtn,
} from './style';
import Tag from '../../components/Tag/Tag';
import Aside from '../../components/Aside/Aside';
import Rside from '../../components/Rside/Rside';
import { useNavigate } from 'react-router';

//에디터 필요모듈
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { editorModules } from '../../utils/quillSettings';
import { EditorContainer } from '../../styles/EditorContainer';
import 'highlight.js/styles/stackoverflow-light.css';
import { qdetail } from '../QuestionDetail/dummy';

const makeTag = (arr) => {
  const tagObjs = [];
  for (let i = 0; i < arr.length; i++) {
    tagObjs.push({
      name: arr[i],
      id: i,
    });
  }
  return tagObjs;
};

const QuestionEdit = () => {
  const defaultTag = makeTag(qdetail.tags);

  const [tags, setTags] = useState(defaultTag);
  const [title, setTitle] = useState(qdetail.title);
  const [tag, setTag] = useState('');
  const [body, setBody] = useState('');

  const tagInputRef = useRef();
  const editorRef = useRef();
  let nextTagId = useRef(tags.length);
  const navigate = useNavigate();

  const onTagFocused = useCallback((e) => {
    e.target.closest('label').classList.add('focused');
  }, []);

  const onTagFocusedOut = useCallback((e) => {
    e.target.closest('label').classList.remove('focused');
  }, []);

  useEffect(() => {
    document.querySelector('.ql-editor').innerHTML = qdetail.content;
    tagInputRef.current.addEventListener('focus', onTagFocused);
    tagInputRef.current.addEventListener('focusout', onTagFocusedOut);
  }, [onTagFocused, onTagFocusedOut]);

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (tags.length < 5 && e.target.value.length > 0) {
        setTags([...tags, { name: tag, id: nextTagId.current }]);
        setTag('');
        nextTagId.current++;
        tagInputRef.current.focus();
      }
    }
  };

  return (
    <LayoutContainer>
      <EditPageContainer>
        <main>
          <EditContainer>
            <InputUnit>
              <h3>Title</h3>
              <TitleEditInput
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              ></TitleEditInput>
            </InputUnit>
            <InputUnit>
              <h3>Body</h3>
              <EditorContainer>
                <ReactQuill
                  theme="snow"
                  modules={editorModules}
                  ref={editorRef}
                  onChange={(content, delta, source, editor) =>
                    setBody(editor.getHTML())
                  }
                />
              </EditorContainer>
            </InputUnit>
            <InputUnit>
              <h3>Tags</h3>
              <TagsInputGroup htmlFor="tag-input">
                {tags.map((t) => {
                  return (
                    <Tag key={t.id} tag={t} tags={tags} setTags={setTags}></Tag>
                  );
                })}
                <input
                  id="tag-input"
                  type="text"
                  placeholder="Type a Tag and Press Enter"
                  value={tag}
                  ref={tagInputRef}
                  onChange={(e) => {
                    setTag(e.target.value);
                  }}
                  onKeyPress={onKeyPress}
                ></input>
              </TagsInputGroup>
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
            </InputUnit>
          </EditContainer>
          <Aside>
            <Rside></Rside>
          </Aside>
        </main>
      </EditPageContainer>
    </LayoutContainer>
  );
};

export default QuestionEdit;