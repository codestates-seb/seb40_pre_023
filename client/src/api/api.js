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
