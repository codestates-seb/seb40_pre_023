import React, { useEffect, useState } from 'react';
import { VoteContainer, Vote } from './style';
import { voteAnswer, voteQuestion } from '../../api/api';

const VoteBtns = ({ votes, questionId, answerId }) => {
  const [vote, setVote] = useState(0);

  const onClick = (e) => {
    const type = e.target.dataset.type;
    let nextVoteStatus;
    if (type === 'up') {
      nextVoteStatus = vote + 1;
      if (-1 <= nextVoteStatus && nextVoteStatus <= 1) {
        setVote(nextVoteStatus);
        if (questionId) {
          //questionId가 들어오면 question patch 요청
          voteQuestion(questionId, votes + nextVoteStatus);
        } else if (answerId) {
          //answerId)가 들어오면 answer patch 요청
          voteAnswer(answerId, votes + nextVoteStatus);
        }
      }
    } else if (type === 'down') {
      nextVoteStatus = vote - 1;
      if (-1 <= nextVoteStatus && nextVoteStatus <= 1) {
        setVote(nextVoteStatus);
        if (questionId) {
          //questionId가 들어오면 question patch 요청
          voteQuestion(questionId, votes + nextVoteStatus);
        } else if (answerId) {
          //answerId)가 들어오면 answer patch 요청
          voteAnswer(answerId, votes + nextVoteStatus);
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
          className={vote === 1 ? 'active' : ''}
        >
          <svg width="36" height="36" viewBox="0 0 36 36">
            <path d="M2 25h32L18 9 2 25Z"></path>
          </svg>
        </button>
        <p>{votes + vote}</p>
        <button
          onClick={onClick}
          data-type="down"
          className={vote === -1 ? 'active' : ''}
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
