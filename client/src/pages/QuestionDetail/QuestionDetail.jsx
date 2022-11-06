import { useState, useRef, useEffect } from 'react';
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

import { getDetail, postAnswer, getMemberInfo } from '../../api/api';

import { useRecoilState } from 'recoil';
import tokenState from '../../_state/tokenState';
import memberIdState from '../../_state/memberIdState';
import Loading from '../../components/Loading/Loading';

const QuestionDetail = () => {
  const [memberId, setMemberId] = useRecoilState(memberIdState);
  const [token, setToken] = useRecoilState(tokenState);
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState();

  const [data, setData] = useState({});
  const [memeber, setMember] = useState({});
  const [answerList, setAnswerList] = useState([]);
  const [questionMember, setQuestionMember] = useState();
  const [myVoteStatus, setmyVoteStatus] = useState('');

  //html answer 컨텐츠
  const [answerContent, setAnswerContent] = useState('');
  const [isAnswerFit, setIsAnswerFit] = useState(true);

  const postBtnRef = useRef();
  const editorRef = useRef();
  const sanitizer = dompurify.sanitize;
  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getDetail(`${location.pathname}`)
      .then((res) => {
        setmyVoteStatus(res.data.questionVote.voteStatus[memberId]);
        setData(res.data);
        setMember(res.data.member);
        setAnswerList(res.data.answerList);
        setQuestionMember(res.data.member.memberId);
      })
      .then((res) => {
        if (memberId) {
          getMemberInfo(memberId).then((res) => {
            setUserInfo(res.data.data);
          });
        }
        setIsLoading(false);
      });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isLogin) {
      alert('로그인 이후에 이용하실 수 있습니다🫠');
    } else {
      const postBody = JSON.stringify({
        memberId: memberId,
        questionId: id,
        nickname: userInfo.nickname,
        content: answerContent,
      });
      postAnswer(postBody, token)
        .then((res) => {
          setAnswerList([...answerList, res.data]);
          document.querySelector('.ql-editor').innerHTML = sanitizer('');
        })
        .then((res) => {
          setIsAnswerFit(true);
        })
        .catch((error) => alert(`답변 작성에 실패하였습니다!🥲`));
    }
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
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <PageTitle title={data.title} button="Ask Question"></PageTitle>
              <Stamps>
                <ul>
                  <li>
                    Asked <strong>{displayCreatedAt(data.createdAt)}</strong>
                  </li>
                  <li>
                    Modified{' '}
                    <strong>{displayCreatedAt(data.modifiedAt)}</strong>
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
                      isLogin={isLogin}
                      myVoteStatus={myVoteStatus}
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
                        editable={questionMember === memberId}
                        avatar={memeber.img}
                        itemId={data.questionId}
                        token={token}
                      ></QaFooter>
                    </article>
                  </QuestionContainer>
                  {answerList.map((a) => {
                    return (
                      <AnswerItem
                        key={a.answerId}
                        answer={a}
                        editable={a.memberId === memberId}
                        token={token}
                      ></AnswerItem>
                    );
                  })}
                  <form action="submit" onSubmit={onSubmit}>
                    <AnswerTitle>Your Answer</AnswerTitle>
                    <EditorContainer className={isAnswerFit ? '' : 'error'}>
                      <ReactQuill
                        theme="snow"
                        ref={editorRef}
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
            </>
          )}
        </DetailPageContainer>
      </LayoutContainer>
    </>
  );
};

export default QuestionDetail;
