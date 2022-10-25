import axios from 'axios';
const URL = process.env.REACT_APP_URL

export const getData = async () => {
    const response = await axios.get(URL);
    return response
}
