import axios from 'axios';
const URL = process.env.REACT_APP_URL;

export const getData = async () => {
  const response = await axios.get(URL);
  return response;
};

export const getQuestions = async (pageNum, pageSize) => {
  //TODO: pagination 누를시 받아오는 데이터
  //   const response = await axios.get(URL);
  //   return response;
  return `${pageNum},${pageSize}`;
};

export const postAnswer = async (nickname, content) => {
  //TODO: pagination 누를시 받아오는 데이터
  // const response = await axios.post('/answer', {
  //   nickname: nickname,
  //   content: content,
  // });
  //   return response;
};

export const voteAnswer = async (Id, vote) => {
  //Answer에 투표하기
  return `${Id} answer의 좋아요 = ${vote}개`;
};

export const voteQuestion = async (Id, vote) => {
  //Question에 투표하기
  return `${Id} question의 좋아요 = ${vote}개`;
};
