import React, { useState, useRef, useEffect, useCallback } from 'react';
import LayoutContainer from '../../components/LayoutContainer/LayoutContainer';
import { useNavigate } from 'react-router';
//에디터 필요모듈
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { editorModules } from '../../utils/quillSettings';
import { EditorContainer } from '../../styles/EditorContainer';
import 'highlight.js/styles/stackoverflow-light.css';

import {
  BgContianer,
  TitleContainer,
  WrtieWrapper,
  WriteMain,
  Notice,
  InputGroup,
  InputSec,
  InputText,
  HelperSec,
  HelperHeader,
  HelperMain,
  PostBtn,
  NextBtn,
  DiscardBtn,
  TagsInputGroup,
} from './style';
import Tag from '../../components/Tag/Tag';

const QuestionWrite = () => {
  const navigate = useNavigate();
  // post 요청으로 보낼 값 에선 introduce + expand -> content로 보내야 함
  const [body, setBody] = useState({
    title: '',
    introduce: '',
    expand: '',
    tags: [],
  });

  // 이전 입력 통과시 클릭 활성화 관리
  const [opened, setOpened] = useState(['title']);

  //tag 키값 변수
  let nextTagId = useRef(0);
  //tag 목록 관리
  const [tags, setTags] = useState([]);
  //지금 입력 tag 관리
  const [tag, setTag] = useState('');

  //에러 메세지 관리
  const [titleError, setTitleError] = useState(false);
  const [introError, setIntroError] = useState(false);
  const [expandError, setExpandError] = useState(false);

  const titleNextRef = useRef();
  const introNextRef = useRef();
  const expandNextRef = useRef();
  const postRef = useRef();
  const tagInputRef = useRef();

  //설명 박스 등장을 제어함
  const onFocusHandler = useCallback((e) => {
    if (document.activeElement.closest('.helperUnit')) {
      if (document.querySelector('.helperUnit.active')) {
        document.querySelector('.helperUnit.active').classList.remove('active');
      }
      document.activeElement.closest('.helperUnit').classList.add('active');
    }
  }, []);

  //title => intro로 넘어가기
  const openIntroduce = useCallback(
    (e) => {
      e.preventDefault();
      setOpened([...opened, 'introduce']);
      e.target.classList.add('remove');
    },
    [opened]
  );

  //intro => expand로 넘어가기
  const openExpand = useCallback(
    (e) => {
      e.preventDefault();
      setOpened([...opened, 'expand']);
      e.target.classList.add('remove');
    },
    [opened]
  );

  //expand=> tags로 넘어가기
  const openTags = useCallback(
    (e) => {
      e.preventDefault();
      setOpened([...opened, 'tags']);
      e.target.classList.add('remove');
    },
    [opened]
  );

  //tags => post 버튼 활성화 시키기
  const openPost = useCallback(
    (e) => {
      e.preventDefault();
      setOpened([...opened, 'post']);
      e.target.classList.add('remove');
    },
    [opened]
  );

  const onTagFocused = useCallback((e) => {
    e.target.closest('label').classList.add('focused');
  }, []);

  const onTagFocusedOut = useCallback((e) => {
    e.target.closest('label').classList.remove('focused');
  }, []);

  useEffect(() => {
    window.addEventListener('click', onFocusHandler);
    titleNextRef.current.addEventListener('click', openIntroduce);
    introNextRef.current.addEventListener('click', openExpand);
    expandNextRef.current.addEventListener('click', openTags);
    tagInputRef.current.addEventListener('focus', onTagFocused);
    tagInputRef.current.addEventListener('focusout', onTagFocusedOut);
  }, [
    opened,
    onFocusHandler,
    openIntroduce,
    openExpand,
    openTags,
    openPost,
    onTagFocused,
    onTagFocusedOut,
  ]);

  useEffect(() => {
    if (tags.length > 0) {
      postRef.current.disabled = false;
    } else {
      postRef.current.disabled = true;
    }
  }, [tags]);

  //title 인풋 변화 인식
  const onChangeTitle = (e) => {
    let isFit = e.target.value.length > 15;
    setBody({ ...body, title: e.target.value });
    if (!isFit) {
      titleNextRef.current.disabled = true;
      setTitleError(true);
    } else {
      titleNextRef.current.disabled = false;
      setTitleError(false);
    }
  };

  //introduce 에디터 변화 인식(intro, expand)
  const onChangeIntro = (description, currentType) => {
    let isFit = description.length > 20;
    let nextBtn;
    let errorSetter;

    if (currentType === 'intro') {
      nextBtn = introNextRef.current;
      errorSetter = setIntroError;
    } else {
      nextBtn = expandNextRef.current;
      errorSetter = setExpandError;
    }

    if (!isFit) {
      nextBtn.disabled = true;
      errorSetter(true);
    } else {
      nextBtn.disabled = false;
      errorSetter(false);
    }
  };

  //tag Enter 인식
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

  const onDiscard = () => {
    navigate(0);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <BgContianer>
        <LayoutContainer>
          <TitleContainer>
            <p>Ask a public question</p>
          </TitleContainer>
          <WrtieWrapper>
            <WriteMain>
              <Notice>
                <h2>Writing a good question</h2>
                <p>
                  You’re ready to <span>ask</span> a{' '}
                  <span>programming-related question</span> and this form will
                  help guide you through the process. Looking to ask a
                  non-programming question? See <span>the topics here</span> to
                  find a relevant site.
                </p>
                <h5>Steps</h5>
                <ul>
                  <li>Summarize your problem in a one-line title.</li>
                  <li>Describe your problem in more detail.</li>
                  <li>
                    Describe what you tried and what you expected to happen.
                  </li>
                  <li>
                    Add “tags” which help surface your question to members of
                    the community.
                  </li>
                  <li>Review your question and post it to the site.</li>
                </ul>
              </Notice>
              <form>
                <InputGroup
                  className={
                    opened.indexOf('title') !== -1
                      ? 'helperUnit opened active'
                      : 'helperUnit'
                  }
                >
                  <HelperSec className="helper">
                    <HelperHeader>Writing a good title</HelperHeader>
                    <HelperMain>
                      <svg width="48" height="48" viewBox="0 0 48 48">
                        <path
                          opacity=".2"
                          d="M31.52 5.2a.34.34 0 0 0-.46.08L7 39.94a.34.34 0 0 0-.06.16l-.54 5.21c-.03.26.24.45.48.34l4.77-2.29c.05-.02.1-.06.13-.1L35.83 8.58a.34.34 0 0 0-.09-.47l-4.22-2.93Z"
                        ></path>
                        <path d="M28.53 2.82c.4-.58 1.2-.73 1.79-.32l4.22 2.92c.58.4.72 1.2.32 1.79L10.82 41.87c-.13.18-.3.33-.5.43l-4.77 2.28c-.9.44-1.93-.29-1.83-1.29l.55-5.2c.02-.22.1-.43.22-.6L28.53 2.81Zm4.43 3.81L29.74 4.4 28.2 6.6l3.22 2.24 1.53-2.21Zm-2.6 3.76-3.23-2.24-20.32 29.3 3.22 2.24 20.32-29.3ZM5.7 42.4 8.62 41l-2.57-1.78-.34 3.18Zm35.12.3a1 1 0 1 0-.9-1.78 35 35 0 0 1-7.94 3.06c-1.93.43-3.8.3-5.71-.04-.97-.17-1.93-.4-2.92-.64l-.3-.07c-.9-.21-1.81-.43-2.74-.62-2.9-.58-6.6-.49-9.43.65a1 1 0 0 0 .74 1.86c2.4-.96 5.68-1.07 8.3-.55.88.18 1.77.4 2.66.6l.3.08c1 .24 2 .48 3.03.66 2.07.37 4.22.53 6.5.02 3-.67 5.77-1.9 8.41-3.22Z"></path>
                      </svg>
                      <div>
                        <p>Your title should summarize the problem.</p>
                        <p>
                          You might find that you have a better idea of your
                          title after writing out the rest of the question.
                        </p>
                      </div>
                    </HelperMain>
                  </HelperSec>
                  <InputSec>
                    <label htmlFor="question-title-input">Title</label>
                    <p>
                      Be specific and imagine you’re asking a question to
                      another person.
                    </p>
                    <InputText
                      id="question-title-input"
                      type="text"
                      onChange={onChangeTitle}
                      className={titleError ? 'error' : ''}
                    ></InputText>
                    <small>Minimum 15 characters.</small>
                    <NextBtn ref={titleNextRef} disabled>
                      Next
                    </NextBtn>
                  </InputSec>
                </InputGroup>

                <InputGroup
                  className={
                    opened.indexOf('introduce') !== -1
                      ? 'helperUnit opened'
                      : 'helperUnit'
                  }
                >
                  <HelperSec className="helper">
                    <HelperHeader>Introduce the problem</HelperHeader>
                    <HelperMain>
                      <svg width="48" height="48" viewBox="0 0 48 48">
                        <path
                          opacity=".2"
                          d="M31.52 5.2a.34.34 0 0 0-.46.08L7 39.94a.34.34 0 0 0-.06.16l-.54 5.21c-.03.26.24.45.48.34l4.77-2.29c.05-.02.1-.06.13-.1L35.83 8.58a.34.34 0 0 0-.09-.47l-4.22-2.93Z"
                        ></path>
                        <path d="M28.53 2.82c.4-.58 1.2-.73 1.79-.32l4.22 2.92c.58.4.72 1.2.32 1.79L10.82 41.87c-.13.18-.3.33-.5.43l-4.77 2.28c-.9.44-1.93-.29-1.83-1.29l.55-5.2c.02-.22.1-.43.22-.6L28.53 2.81Zm4.43 3.81L29.74 4.4 28.2 6.6l3.22 2.24 1.53-2.21Zm-2.6 3.76-3.23-2.24-20.32 29.3 3.22 2.24 20.32-29.3ZM5.7 42.4 8.62 41l-2.57-1.78-.34 3.18Zm35.12.3a1 1 0 1 0-.9-1.78 35 35 0 0 1-7.94 3.06c-1.93.43-3.8.3-5.71-.04-.97-.17-1.93-.4-2.92-.64l-.3-.07c-.9-.21-1.81-.43-2.74-.62-2.9-.58-6.6-.49-9.43.65a1 1 0 0 0 .74 1.86c2.4-.96 5.68-1.07 8.3-.55.88.18 1.77.4 2.66.6l.3.08c1 .24 2 .48 3.03.66 2.07.37 4.22.53 6.5.02 3-.67 5.77-1.9 8.41-3.22Z"></path>
                      </svg>
                      <div>
                        <p>
                          Explain how you encountered the problem you’re trying
                          to solve, and any difficulties that have prevented you
                          from solving it yourself.
                        </p>
                      </div>
                    </HelperMain>
                  </HelperSec>
                  <InputSec>
                    <label>What are the details of your problem?</label>
                    <p>
                      Introduce the problem and expand on what you put in the
                      title. Minimum 20 characters.
                    </p>
                    <EditorContainer className={introError ? 'error' : ''}>
                      <ReactQuill
                        theme="snow"
                        modules={editorModules}
                        onChange={(content, delta, source, editor) =>
                          onChangeIntro(editor.getHTML(), 'intro')
                        }
                      />
                    </EditorContainer>
                    <small>Minimum 20 characters.</small>
                    <NextBtn ref={introNextRef} disabled>
                      Next
                    </NextBtn>
                  </InputSec>
                </InputGroup>

                <InputGroup
                  className={
                    opened.indexOf('expand') !== -1
                      ? 'helperUnit opened'
                      : 'helperUnit'
                  }
                >
                  <HelperSec className="helper">
                    <HelperHeader>Expand on the problem</HelperHeader>
                    <HelperMain>
                      <svg width="48" height="48" viewBox="0 0 48 48">
                        <path
                          opacity=".2"
                          d="M31.52 5.2a.34.34 0 0 0-.46.08L7 39.94a.34.34 0 0 0-.06.16l-.54 5.21c-.03.26.24.45.48.34l4.77-2.29c.05-.02.1-.06.13-.1L35.83 8.58a.34.34 0 0 0-.09-.47l-4.22-2.93Z"
                        ></path>
                        <path d="M28.53 2.82c.4-.58 1.2-.73 1.79-.32l4.22 2.92c.58.4.72 1.2.32 1.79L10.82 41.87c-.13.18-.3.33-.5.43l-4.77 2.28c-.9.44-1.93-.29-1.83-1.29l.55-5.2c.02-.22.1-.43.22-.6L28.53 2.81Zm4.43 3.81L29.74 4.4 28.2 6.6l3.22 2.24 1.53-2.21Zm-2.6 3.76-3.23-2.24-20.32 29.3 3.22 2.24 20.32-29.3ZM5.7 42.4 8.62 41l-2.57-1.78-.34 3.18Zm35.12.3a1 1 0 1 0-.9-1.78 35 35 0 0 1-7.94 3.06c-1.93.43-3.8.3-5.71-.04-.97-.17-1.93-.4-2.92-.64l-.3-.07c-.9-.21-1.81-.43-2.74-.62-2.9-.58-6.6-.49-9.43.65a1 1 0 0 0 .74 1.86c2.4-.96 5.68-1.07 8.3-.55.88.18 1.77.4 2.66.6l.3.08c1 .24 2 .48 3.03.66 2.07.37 4.22.53 6.5.02 3-.67 5.77-1.9 8.41-3.22Z"></path>
                      </svg>
                      <div>
                        <p>
                          Show what you’ve tried, tell us what happened, and why
                          it didn’t meet your needs.
                        </p>
                        <p>
                          Not all questions benefit from including code, but if
                          your problem is better understood with code you’ve
                          written, you should include a{' '}
                          <span>minimal, reproducible example.</span>
                        </p>
                        <p>
                          Please make sure to post code and errors as text
                          directly to the question (and{' '}
                          <span>not as images</span>
                          ), and <span>format them appropriately.</span>
                        </p>
                      </div>
                    </HelperMain>
                  </HelperSec>
                  <InputSec>
                    <label>What did you try and what were you expecting?</label>
                    <p>
                      Describe what you tried, what you expected to happen, and
                      what actually resulted. Minimum 20 characters.
                    </p>
                    <EditorContainer className={expandError ? 'error' : ''}>
                      <ReactQuill
                        theme="snow"
                        modules={editorModules}
                        onChange={(content, delta, source, editor) =>
                          onChangeIntro(editor.getHTML(), 'expand')
                        }
                      />
                    </EditorContainer>
                    <small>Minimum 20 characters.</small>
                    <NextBtn ref={expandNextRef} disabled>
                      Next
                    </NextBtn>
                  </InputSec>
                </InputGroup>

                <InputGroup
                  className={
                    opened.indexOf('tags') !== -1
                      ? 'helperUnit opened'
                      : 'helperUnit'
                  }
                >
                  <HelperSec className="helper">
                    <HelperHeader>Adding tags</HelperHeader>
                    <HelperMain>
                      <svg width="48" height="48" viewBox="0 0 48 48">
                        <path
                          opacity=".2"
                          d="M31.52 5.2a.34.34 0 0 0-.46.08L7 39.94a.34.34 0 0 0-.06.16l-.54 5.21c-.03.26.24.45.48.34l4.77-2.29c.05-.02.1-.06.13-.1L35.83 8.58a.34.34 0 0 0-.09-.47l-4.22-2.93Z"
                        ></path>
                        <path d="M28.53 2.82c.4-.58 1.2-.73 1.79-.32l4.22 2.92c.58.4.72 1.2.32 1.79L10.82 41.87c-.13.18-.3.33-.5.43l-4.77 2.28c-.9.44-1.93-.29-1.83-1.29l.55-5.2c.02-.22.1-.43.22-.6L28.53 2.81Zm4.43 3.81L29.74 4.4 28.2 6.6l3.22 2.24 1.53-2.21Zm-2.6 3.76-3.23-2.24-20.32 29.3 3.22 2.24 20.32-29.3ZM5.7 42.4 8.62 41l-2.57-1.78-.34 3.18Zm35.12.3a1 1 0 1 0-.9-1.78 35 35 0 0 1-7.94 3.06c-1.93.43-3.8.3-5.71-.04-.97-.17-1.93-.4-2.92-.64l-.3-.07c-.9-.21-1.81-.43-2.74-.62-2.9-.58-6.6-.49-9.43.65a1 1 0 0 0 .74 1.86c2.4-.96 5.68-1.07 8.3-.55.88.18 1.77.4 2.66.6l.3.08c1 .24 2 .48 3.03.66 2.07.37 4.22.53 6.5.02 3-.67 5.77-1.9 8.41-3.22Z"></path>
                      </svg>
                      <div>
                        <p>
                          Tags help ensure that your question will get attention
                          from the right people.
                        </p>
                        <p>
                          Tag things in more than one way so people can find
                          them more easily. Add tags for product lines,
                          projects, teams, and the specific technologies or
                          languages used.
                        </p>
                        <p>
                          <span>Learn more about tagging</span>
                        </p>
                      </div>
                    </HelperMain>
                  </HelperSec>
                  <InputSec>
                    <label htmlFor="question-title-input">Tags</label>
                    <p>
                      Add up to 5 tags to describe what your question is about.
                      Start typing to see suggestions. Minimum 1 tag.
                    </p>
                    <TagsInputGroup htmlFor="tag-input">
                      {tags.map((t) => {
                        return (
                          <Tag
                            key={t.id}
                            tag={t}
                            tags={tags}
                            setTags={setTags}
                          ></Tag>
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
                    <small>Minimum 1 tag.</small>
                  </InputSec>
                </InputGroup>
                <div>
                  <PostBtn
                    ref={postRef}
                    type="submit"
                    className={opened.indexOf('post') !== -1 ? 'opened' : ''}
                    disabled
                  >
                    Post your question
                  </PostBtn>
                  <DiscardBtn onClick={onDiscard}>Discard draft</DiscardBtn>
                </div>
              </form>
            </WriteMain>
          </WrtieWrapper>
        </LayoutContainer>
      </BgContianer>
    </>
  );
};

export default QuestionWrite;
