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
import { postQuestion } from '../../api/api';

import { useRecoilState } from 'recoil';
import tokenState from '../../_state/tokenState';

const QuestionWrite = () => {
  const navigate = useNavigate();
  const [token, setToken] = useRecoilState(tokenState);
  const [body, setBody] = useState({
    title: '',
    intro: '',
    expand: '',
    introText: '',
    expandText: '',
    tags: [],
  });

  // 이 배열에 타입이 입력되면 그 스텝이 오픈됨
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

  //버튼의 활성화 비활성화를 제어하기 위해 필요
  const titleNextRef = useRef();
  const introNextRef = useRef();
  const expandNextRef = useRef();
  const postRef = useRef();

  //태그 포커스, 적합성 테스트에 필요
  const tagInputRef = useRef();
  const tagOutBox = useRef();
  const tagMinimumRef = useRef();
  const tagMaximumRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    const postBody = JSON.stringify({
      title: body.title,
      content: `${body.intro}<p><br></p>${body.expand}`,
      text: `${body.introText}\n${body.expandText}`,
      tags: [...body.tags],
    });

    postQuestion(postBody, token)
      .then((res) => {
        navigate('/', { replace: true });
      })
      .catch((error) => alert(`글 작성에 실패하였습니다!🥲`));
  };

  // 설명 박스 등장을 제어함
  const onHelperHandler = useCallback((e) => {
    if (document.activeElement.closest('.helperUnit')) {
      if (document.querySelector('.helperUnit.active')) {
        document.querySelector('.helperUnit.active').classList.remove('active');
      }
      document.activeElement.closest('.helperUnit').classList.add('active');
    }
  }, []);

  // next 버튼 누를시 다음 step 활성화 시키기
  const openNext = (e, next) => {
    e.preventDefault();
    setOpened([...opened, next]);
    e.target.classList.add('remove');
  };

  // 태그 박스에 포커스 효과 제어
  const onTagFocused = (e) => {
    e.target.closest('label').classList.add('focused');
  };
  const onTagFocusedOut = (e) => {
    e.target.closest('label').classList.remove('focused');
  };

  useEffect(() => {
    window.addEventListener('click', onHelperHandler);
    titleNextRef.current.addEventListener('click', (e) => {
      openNext(e, 'introduce');
    });
    introNextRef.current.addEventListener('click', (e) => {
      openNext(e, 'expand');
    });
    expandNextRef.current.addEventListener('click', (e) => {
      openNext(e, 'tags');
    });
    tagInputRef.current.addEventListener('focus', onTagFocused);
    tagInputRef.current.addEventListener('focusout', onTagFocusedOut);
  }, [opened]);

  useEffect(() => {
    if (tags.length > 0) {
      postRef.current.disabled = false;
    } else {
      postRef.current.disabled = true;
    }

    // 추가 삭제를 위해 객체로 관리하던 tags를 배열로 변경
    const tagNameArr = tags.map((obj) => {
      return obj.name;
    });

    setBody({
      ...body,
      tags: [...tagNameArr],
    });
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
  const onChangeIntro = (htmlStr, text, currentType) => {
    setBody({
      ...body,
      [currentType]: htmlStr,
      [`${currentType}Text`]: text,
    });
    let isFit = text.length > 20;
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

  const onTagChange = () => {
    if (tags.length < 1) {
      tagOutBox.current.classList.add('error');
      tagMinimumRef.current.classList.add('on');
    } else if (tags.length === 5) {
      tagOutBox.current.classList.add('error');
      tagMaximumRef.current.classList.add('on');
    } else {
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

  useEffect(() => {
    onTagChange();
  }, [tags]);

  useEffect(() => {
    tagOutBox.current.classList.remove('error');
    tagMinimumRef.current.classList.remove('on');
  }, []);

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
              <form onSubmit={onSubmit}>
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
                          onChangeIntro(
                            editor.getHTML(),
                            editor.getText(),
                            'intro'
                          )
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
                          onChangeIntro(
                            editor.getHTML(),
                            editor.getText(),
                            'expand'
                          )
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
                    <TagsInputGroup htmlFor="tag-input" ref={tagOutBox}>
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
                          onTagChange(e);
                        }}
                        onKeyPress={onKeyPress}
                      ></input>
                    </TagsInputGroup>
                    <small ref={tagMinimumRef}>Minimum 1 tag.</small>
                    <small ref={tagMaximumRef}>Maximum 5 tag.</small>
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
