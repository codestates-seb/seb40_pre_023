import { useState, useRef, useEffect, useCallback } from 'react';
import { useParams } from 'react-router';
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
import { patchQuestion, getDetail } from '../../api/api';
import dompurify from 'dompurify';

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
  let { id } = useParams();

  const [tags, setTags] = useState([]);
  const [title, setTitle] = useState('');
  const [tag, setTag] = useState('');
  const [content, setContent] = useState();
  const [text, setText] = useState();

  //에러 메세지 관리
  const [titleError, setTitleError] = useState(false);
  const [editorError, setEditorError] = useState(false);
  const [tagError, setTagError] = useState(false);

  let nextTagId = useRef();
  const tagInputRef = useRef();
  const editorRef = useRef();
  const tagMinimumRef = useRef();
  const tagMaximumRef = useRef();
  const tagOutBox = useRef();

  const navigate = useNavigate();
  const sanitizer = dompurify.sanitize;

  const onTagFocused = useCallback((e) => {
    e.target.closest('label').classList.add('focused');
  }, []);

  const onTagFocusedOut = useCallback((e) => {
    e.target.closest('label').classList.remove('focused');
  }, []);

  useEffect(() => {
    getDetail(`/questions/${id}`).then((res) => {
      setTitle(res.data.title);
      setTags(makeTag(res.data.tags));
      nextTagId.current = res.data.tags.length;
      setContent(res.data.content);
      document.querySelector('.ql-editor').innerHTML = sanitizer(
        res.data.content
      );
    });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const patchBody = JSON.stringify({
      title: title,
      content: content,
      text: text,
      tags: tags.map((tag) => tag.name),
    });

    patchQuestion(id, patchBody)
      .then((res) => {
        navigate(`/questions/${id}`, { replace: true });
      })
      .catch((error) => alert(`글 수정에 실패하였습니다!🥲`));
  };

  useEffect(() => {
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

  const onChangeTitle = (e) => {
    let isFit = e.target.value.length > 15;
    setTitle(e.target.value);
    if (!isFit) {
      setTitleError(true);
    } else {
      setTitleError(false);
    }
  };

  const onChangeEditor = (content, text) => {
    setContent(content);
    setText(text);
    if (text.length <= 20) {
      setEditorError(true);
    } else {
      setEditorError(false);
    }
  };

  const onTagChange = () => {
    if (tags.length < 1) {
      setTagError(true);
      tagOutBox.current.classList.add('error');
      tagMinimumRef.current.classList.add('on');
    } else if (tags.length === 5) {
      tagOutBox.current.classList.add('error');
      tagMaximumRef.current.classList.add('on');
    } else {
      setTagError(false);
      if (tagOutBox.current.classList.contains('error')) {
        tagOutBox.current.classList.remove('error');
      }
      if (tagMinimumRef.current.classList.contains('on')) {
        tagMinimumRef.current.classList.remove('on');
      }
      if (tagMaximumRef.current.classList.contains('on')) {
        tagMaximumRef.current.classList.remove('on');
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
                onChange={onChangeTitle}
                className={titleError ? 'error' : ''}
              ></TitleEditInput>
              <small>Minimum 15 characters.</small>
            </InputUnit>
            <InputUnit>
              <h3>Body</h3>
              <EditorContainer className={editorError ? 'error' : ''}>
                <ReactQuill
                  theme="snow"
                  modules={editorModules}
                  ref={editorRef}
                  onChange={(content, delta, source, editor) => {
                    onChangeEditor(editor.getHTML(), editor.getText());
                  }}
                />
              </EditorContainer>
              <small>Minimum 20 characters.</small>
            </InputUnit>
            <InputUnit>
              <h3>Tags</h3>
              <TagsInputGroup htmlFor="tag-input" ref={tagOutBox}>
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
                    onTagChange(e);
                  }}
                  onKeyPress={onKeyPress}
                ></input>
              </TagsInputGroup>
              <small ref={tagMinimumRef}>Minimum 1 tag.</small>
              <small ref={tagMaximumRef}>Maximum 5 tag.</small>
              <div>
                <EditBtn
                  onClick={onSubmit}
                  disabled={
                    tags.length === 0 || titleError || editorError || tagError
                  }
                >
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
