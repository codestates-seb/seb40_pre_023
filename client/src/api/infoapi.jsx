import axios from 'axios';

export const InfoAPI = async (memberId, token) => {
  const URL = process.env.REACT_APP_URL;
  const response = await axios
    .get(URL + `/members/user/${memberId}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
    })
    .catch((error) => {
      console.log(error.response, 'res');
      return error.response;
    });
  return response;
};
