import React from 'react';
import {
  QList,
  QDetail,
  QHead,
  QUser,
  QTitle,
  Avatar,
  Time,
  QInfo,
  Nickname,
  QTag,
  QTagList,
  QContent,
  QRightDetail,
} from './style';
import { displayCreatedAt } from '../../utils/displayCreatedAt';
import { Link } from 'react-router-dom';

const QuestionList = ({ questions }) => {
  return (
    <QList>
      {questions.map((item, idx) => (
        <QDetail key={idx}>
          <QHead>
            <p>
              {item.questionVote.voteCount ? item.questionVote.voteCount : 0}{' '}
              votes
            </p>
            <p>{item.answerList ? item.answerList.length : 0} answers</p>
            <p>{item.views ? item.views : 0} views</p>
          </QHead>
          <QRightDetail key={item.questionId}>
            <Link to={`/questions/${item.questionId}`}>
              <QTitle>{item.title}</QTitle>
            </Link>
            <QContent>{item.text}</QContent>
            <QUser>
              <QTagList>
                {item.tags.map((tag, idx) => (
                  <QTag key={idx}>{tag}</QTag>
                ))}
              </QTagList>
              <QInfo>
                <Avatar>
                  {item.member.img === '사진' ? null : item.member.img}
                </Avatar>
                <Nickname>{item.member.nickname}</Nickname>
                <Time>{displayCreatedAt(item.createdAt)}</Time>
              </QInfo>
            </QUser>
          </QRightDetail>
        </QDetail>
      ))}
    </QList>
  );
};

export default QuestionList;
