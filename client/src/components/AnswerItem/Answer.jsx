import { useEffect, useState } from 'react';
import { AnswerContainer } from '../../pages/QuestionDetail/style';
import { QlViewer } from '../../styles/QlVeiwer';
import QaFooter from '../QaFooter/QaFooter';
import { displayCreatedAt } from '../../utils/displayCreatedAt';
import VoteBtns from '../VoteBtns/VoteBtns';
import dompurify from 'dompurify';

import { useRecoilState } from 'recoil';
import isLoginState from '../../_state/isLoginState';
import memberIdState from '../../_state/memberIdState';

const AnswerItem = ({ answer, editable, questionId, token }) => {
  const sanitizer = dompurify.sanitize;
  const [memberId, setMemberId] = useRecoilState(memberIdState);
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [matchingVote, setMatchingVote] = useState();
  const [myVoteStatus, setMyVoteStatus] = useState();

  useEffect(() => {
    setMatchingVote(
      answer.answerVoteList.filter((el) => el.memberId === memberId)[0]
    );
  }, []);

  useEffect(() => {
    if (matchingVote) {
      if (matchingVote.voteState === 1) {
        setMyVoteStatus('VOTE_GOOD');
      } else if (matchingVote.voteState === -1) {
        setMyVoteStatus('VOTE_BAD');
      }
    }
  }, [matchingVote]);

  return (
    <AnswerContainer key={answer.answerId}>
      <VoteBtns
        votes={answer.scoreUpDownVote}
        answerId={answer.answerId}
        isLogin={isLogin}
        myVoteStatus={myVoteStatus}
      />
      <article>
        <div className="ql-snow">
          <QlViewer
            dangerouslySetInnerHTML={{ __html: sanitizer(answer.content) }}
          />
        </div>
        <QaFooter
          type="answer"
          createAt={displayCreatedAt(answer.createdAt)}
          modifiedAt={displayCreatedAt(answer.modifiedAt)}
          name={answer.nickname}
          editable={editable}
          avatar={''}
          itemId={answer.answerId}
          token={token}
        ></QaFooter>
      </article>
    </AnswerContainer>
  );
};

export default AnswerItem;
