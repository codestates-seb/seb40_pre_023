import { Header, Button, TitleArea } from './style';
import { Link } from 'react-router-dom';
import { InfoAPI } from '../../api/infoapi';
import tokenState from '../../_state/tokenState';
import { useRecoilState } from 'recoil';
import isLoginState from '../../_state/isLoginState';
import memberIdState from '../../_state/memberIdState';
const PageTitle = ({ title, button }) => {
  const [token, setToken] = useRecoilState(tokenState);
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [memberId, setMemberId] = useRecoilState(memberIdState);
  const handleAsk = () => {
    InfoAPI(memberId, token).then((res) => {
      if (res.status === 404) {
        alert('로그인이 필요한 서비스입니다.');
        setIsLogin(false);
        setToken(null);
        setMemberId(null);
        window.location.href = '/account/login';
      }
    });
  };

  return (
    <Header>
      <TitleArea>{title}</TitleArea>
      {button ? (
        <Link to="/questions/ask">
          <Button onClick={handleAsk}>{button}</Button>
        </Link>
      ) : (
        ''
      )}
    </Header>
  );
};

export default PageTitle;
