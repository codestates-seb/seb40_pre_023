import axios from 'axios';
const URL = process.env.REACT_APP_URL;

export const getData = async () => {
  const response = await axios.get(URL + `/questions?page=1&size=15`);
  return response;
};

// 1 검색 키워드가 있을때 if 아님 else
export const getQuestions = async (pageNum, pageSize, keyword) => {
  //리스트 초기화 & pagination 누를시 받아오는 데이터
  if (keyword) {
    const response = await axios.get(
      URL + `questions/search?&q=${keyword}&page=${pageNum}&size=${pageSize}`
    );
    return response;
  } else {
    const response = await axios.get(
      URL + `/questions?page=${pageNum}&size=${pageSize}`
    );
    return response;
  }
};

export const getQuestionDetail = async (parameter) => {
  const response = await axios.get(URL + `${parameter}`);
  return response;
};

export const postAnswer = async (nickname, content) => {
  const response = await axios.post(URL + `/answers`, {
    nickname,
    content,
  });
  return response;
};

export const postQuestion = async (body) => {
  //json 형태로 body 받아옴
  const response = axios.post(`${URL}/questions/ask/1`, body, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
};

export const voteAnswer = async (Id, vote) => {
  //Answer에 투표하기
  return `${Id} answer의 좋아요 = ${vote}개`;
};

export const voteQuestion = async (Id, vote) => {
  //Question에 투표하기
  //axios post로 URL+ /questions/${Id}?voteType=${vote} 보내기
  if (vote === 1) {
    try {
      const response = await axios.post(
        URL + `/questions/vote/${Id}?voteType=1&memberId=7`
      );
      console.log(response, 'vote success');
      return response;
    } catch (e) {
      console.log(e, 'vote fail');
      console.log(Id, vote);
    }
  }

  if (vote === -1) {
    try {
      const response = await axios.post(
        URL + `/questions/vote/${Id}?voteType=2`
      );
      console.log(response, 'vote success');
      return response;
    } catch (e) {
      console.log(e, 'vote fail');
    }
  }
};
