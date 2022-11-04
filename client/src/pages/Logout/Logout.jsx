import React from 'react';
import { useNavigate } from 'react-router';
import { useRecoilState } from 'recoil';
import isLoginState from '../../_state/isLoginState';
import memberIdState from '../../_state/memberIdState';
import {
  Container,
  Wrapper,
  Card,
  GroupCheck,
  EditBtn,
  CancelBtn,
  LogoutFooter,
} from './style';

const Logout = () => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [memberId, setMemberId] = useRecoilState(memberIdState);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('Authorization');
    setIsLogin(false);
    setMemberId(null);
    navigate('/');
  };
  return (
    <>
      <Container>
        <Wrapper>
          <h3>
            Clicking “Log out” will log you out of the following
            <br />
            domains on this device:
          </h3>
          <Card>
            <ul>
              <li>
                <span className="askubuntu"></span>
                <a
                  href="https://askubuntu.com/https://askubuntu.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  askubuntu.com
                </a>
              </li>
              <li>
                <span className="mathoverflow"></span>
                <a
                  href="https://mathoverflow.net/"
                  target="_blank"
                  rel="noreferrer"
                >
                  mathoverflow.net
                </a>
              </li>
              <li>
                <span className="serverfault"></span>
                <a
                  href="https://serverfault.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  serverfault.com
                </a>
              </li>
              <li>
                <span className="stackapps"></span>
                <a
                  href="https://stackapps.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  stackapps.com
                </a>
              </li>
              <li>
                <span className="stackexchange"></span>
                <a
                  href="https://stackexchange.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  stackexchange.com
                </a>
              </li>
              <li>
                <span className="stackoverflow"></span>
                <a
                  href="https://stackoverflow.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  stackoverflow.com
                </a>
              </li>
              <li>
                <span className="superuser"></span>
                <a
                  href="https://superuser.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  superuser.com
                </a>
              </li>
            </ul>
            <GroupCheck htmlFor="out-all-check">
              <input id="out-all-check" type="checkbox" />
              <span>Log out on all devices</span>
            </GroupCheck>
            <div>
              <EditBtn onClick={handleLogout}>Log out</EditBtn>
              <CancelBtn
                onClick={() => {
                  navigate(-1);
                }}
              >
                Cancel
              </CancelBtn>
              <LogoutFooter>
                f you’re on a shared computer, remember to log out of your Open
                ID provider (Facebook, Google, Stack Exchange, etc.) as well.
              </LogoutFooter>
            </div>
          </Card>
        </Wrapper>
      </Container>
    </>
  );
};

export default Logout;
