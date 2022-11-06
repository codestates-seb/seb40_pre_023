import { useState } from 'react';
import { VoteContainer, Vote } from './style';
import { voteAnswer, voteQuestion } from '../../api/api';
import { useRecoilState } from 'recoil';
import tokenState from '../../_state/tokenState';
import memberIdState from '../../_state/memberIdState';
import { useEffect } from 'react';

const VoteBtns = ({ votes, questionId, answerId, isLogin, myVoteStatus }) => {
  const [myVote, setMyVote] = useState(0);
  const [displayVote, setDisplayVote] = useState(votes);
  const [memberId, setMemberId] = useRecoilState(memberIdState);
  const [token, setToken] = useRecoilState(tokenState);

  useEffect(() => {
    if (myVoteStatus === 'VOTE_GOOD') {
      setMyVote(1);
    } else if (myVoteStatus === 'VOTE_BAD') {
      setMyVote(-1);
    }
  }, [myVoteStatus]);

  const UpdateDisplayVote = (type) => {
    if (type === 'up') {
      setMyVote(1);
      let nextDisplayVote;
      if (myVote === -1) {
        nextDisplayVote = displayVote + 2;
      } else {
        nextDisplayVote = displayVote + 1;
      }
      setDisplayVote(nextDisplayVote);
    } else if (type === 'down') {
      setMyVote(-1);
      let nextDisplayVote;
      if (myVote === 1) {
        nextDisplayVote = displayVote - 2;
      } else {
        nextDisplayVote = displayVote - 1;
      }
      setDisplayVote(nextDisplayVote);
    }
  };

  const onClick = (e) => {
    if (!isLogin) {
      alert('로그인 이후에 이용하실 수 있습니다🫠');
    } else {
      const type = e.target.dataset.type;

      if (type === 'up') {
        if (myVote === 1) {
          alert('이미 투표하셨습니다!😛');
        } else {
          if (questionId) {
            //questionId가 들어오면 question patch 요청
            voteQuestion(questionId, 1, token)
              .then((res) => {
                UpdateDisplayVote('up');
              })
              .catch((err) => alert('투표에 실패하였습니다!😔'));
          } else if (answerId) {
            console.log('답변 투표중');
            //answerId)가 들어오면 answer patch 요청
            const answerBody = JSON.stringify({
              memberId: memberId,
              answerId: answerId,
            });
            voteAnswer(1, token, answerBody)
              .then((res) => {
                console.log('투표성공');
                UpdateDisplayVote('up');
              })
              .catch((err) => alert('투표에 실패하였습니다!😔'));
          }
        }
      } else if (type === 'down') {
        if (myVote === -1) {
          alert('이미 투표하셨습니다!😛');
        } else {
          if (questionId) {
            //questionId가 들어오면 question patch 요청
            voteQuestion(questionId, -1, token)
              .then((res) => {
                UpdateDisplayVote('down');
              })
              .catch((err) => alert('투표에 실패하였습니다!😔'));
          } else if (answerId) {
            console.log('답변 투표중');
            //answerId)가 들어오면 answer patch 요청
            const answerBody = JSON.stringify({
              memberId: memberId,
              answerId: answerId,
            });
            voteAnswer(-1, token, answerBody)
              .then((res) => {
                UpdateDisplayVote('down');
              })
              .catch((err) => alert('투표에 실패하였습니다!😔'));
          }
        }
      }
    }
  };

  return (
    <VoteContainer>
      <Vote>
        <button
          onClick={onClick}
          data-type="up"
          className={myVote === 1 ? 'active' : ''}
        >
          <svg width="36" height="36" viewBox="0 0 36 36">
            <path d="M2 25h32L18 9 2 25Z"></path>
          </svg>
        </button>
        <p>{displayVote}</p>
        <button
          onClick={onClick}
          data-type="down"
          className={myVote === -1 ? 'active' : ''}
        >
          <svg width="36" height="36" viewBox="0 0 36 36">
            <path d="M2 11h32L18 27 2 11Z"></path>
          </svg>
        </button>
      </Vote>
    </VoteContainer>
  );
};

export default VoteBtns;
