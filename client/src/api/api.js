import axios from 'axios';
const URL = process.env.REACT_APP_URL;

//filter 기능 구현중 getQuestions로 통일하려했지만 axios 오류가 나는 관게로 그대로둠
//현재 filter부분에서 쓰고 있음
export const getData = async () => {
  const response = await axios.get(URL + `/questions?page=1&size=15`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
};

export const LoginAPI = async (data) => {
  const response = await axios.post(URL + `/login`, data).catch((error) => {
    console.log(error.response, 'res');
    return error.response;
  });
  return response;
};

// 1 검색 키워드가 있을때 if 아님 else
export const getQuestions = async (pageNum, pageSize, keyword) => {
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

export const getVoteFilteredData = async (pageNum = 1, pageSize = 15) => {
  const response = await axios.get(
    URL + `/questions?page=${pageNum}&size=${pageSize}&tab=vote`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return response;
};

export const getDetail = async (parameter) => {
  //질문 답변 통용
  const response = await axios.get(URL + `${parameter}`);
  return response;
};

export const postAnswer = async (body, token) => {
  const response = await axios.post(`${URL}/answers`, body, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`,
    },
  });
  return response;
};

export const postQuestion = async (body, token) => {
  //json 형태로 body 받아옴
  const response = axios.post(`${URL}/questions/ask`, body, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`,
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

export const patchQuestion = async (questionId, body) => {
  //질문 수정하기
  const response = axios.patch(`${URL}/questions/${questionId}/edit`, body, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
};

export const patchAnswer = async (answerId, body, token) => {
  //답변 수정하기
  const response = axios.patch(`${URL}/answers/${answerId}/edit`, body, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`,
    },
  });
  return response;
};

export const getMemberInfo = async (memberId) => {
  const response = axios.get(`${URL}/members/${memberId}`);
  return response;
};
