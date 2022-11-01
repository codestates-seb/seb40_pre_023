import axios from 'axios';
const URL = process.env.REACT_APP_URL;

export const getData = async () => {
  const response = await axios.get(URL);
  return response;
};

export const getQuestions = async (pageNum, pageSize, keyword) => {
  //리스트 초기화 & pagination 누를시 받아오는 데이터
  if (keyword) {
    //검색 키워드가 들어올 경우
    //   const response = await axios.get(URL);
    //   return response;
    return `${pageNum},${pageSize},${keyword}`;
  } else {
    //일반 질문 리스트
    //   const response = await axios.get(URL);
    //   return response;
    return `${pageNum},${pageSize}`;
  }
};

export const postAnswer = async (nickname, content) => {};

export const voteAnswer = async (Id, vote) => {
  //Answer에 투표하기
  return `${Id} answer의 좋아요 = ${vote}개`;
};

export const voteQuestion = async (Id, vote) => {
  //Question에 투표하기
  return `${Id} question의 좋아요 = ${vote}개`;
};
