import axios from 'axios';
import { useRecoilState } from 'recoil';
import tokenState from '../_state/tokenState';


  
 export const InfoAPI = async (token) => {
  const URL = process.env.REACT_APP_URL;
  const response = await axios.get(URL + `/members/user`,{
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`,
    },})
    .catch((error) => {
      console.log(error.response, 'res');
      return error.response;
    });
    return response;
};