import Axios from "axios";
import { Cookies } from 'react-cookie';

const cookies = new Cookies();
const axiosInstance = Axios.create({
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});



axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (err) {
    if (err.config.headers.Authorization !== undefined) {
      //Handle expired token
      if (
        err.response.status === 401 &&
        !err.config._retry &&
        err.response.data.message === "JWT 토큰이 만료되었습니다."
      ) {
        err.config._retry = true;
        console.log(err.response.data.message);

        
          return (async (res) => {
            try {
              if (res.data.code === 200) {
                cookies.set("accessToken", res.data.data.accessToken, {
                  secure: true,
                });
                err.config.headers.Authorization =
                  "Bearer " + cookies.get("accessToken");

                return axiosInstance(err.config);
              }
            } catch (err) {
              console.log(err.response.data.message);
            }
          })();
      }
    }
    return Promise.reject(err);
  }
);

export default axiosInstance;