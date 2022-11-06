import axios from 'axios';
import { useRecoilState } from 'recoil';
import tokenState from '../_state/tokenState';


  
 export const InfoAPI = async (memberId) => {
  const URL = process.env.REACT_APP_URL;
  const token = localStorage.getItem('tokenState')
  const response = await axios.get(URL + `/members/${memberId}`,{
    "memberId": {memberId}
  },{
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      withCredentials: true
    },})
    .catch((error) => {
      console.log(error.response, 'res');
      return error.response;
    });
    return response;
};