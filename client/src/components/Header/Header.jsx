import React, { useEffect, useState, useRef } from 'react';
import {
  Gnb,
  MobileMenuBtn,
  Logo,
  MenuNav,
  LoginNav,
  Button,
  Search,
  MobileSearchButton,
  SearchIcon,
  SideMenu,
  HeaderAvatar,
  LogoutPop,
  MenuRows,
  AvatarBlock,
  Row,
  Lshape,
} from './style';
import LayoutContainer from '../LayoutContainer/LayoutContainer';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import isLoginState from '../../_state/isLoginState';
// TODO: dummy 지워야 함
import { userInfo } from './dummy';
import { useRecoilValue } from 'recoil';

const Header = ({ isSidebar }) => {
  const location = useLocation();
  const sideBar = useRef();
  const navigate = useNavigate();
  // const needSidebar = isSidebar;

  const [isSearch, setIsSearch] = useState(false);
  const [isSidebarOn, setIsSidebarOn] = useState(false);
  const isLogin = useRecoilValue(isLoginState);
  // const [isLogin, setIsLogin] = useState(false);
  const [needSidebar, setNeedSidebar] = useState(isSidebar);
  const [togglePopUp, setTogglePopUp] = useState(false);

  const ignorePaths = [
    '/account/login',
    '/account/logout',
    '/account/register',
    '/ask',
    '/account',
    '/questions/ask',
    '/404',
  ];

  useEffect(() => {
    setNeedSidebar(!ignorePaths.includes(location.pathname));
  }, [location]);

  const handleCloseToggle = (e) => {
    if (!e.target.closest('.prevent-sidebar')) {
      setIsSidebarOn(false);
    }
    if (!e.target.closest('.prevent-popup')) {
      setTogglePopUp(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleCloseToggle);
  }, []);

  const onKeyPress = (e) => {
    if (e.key === 'Enter' && e.target.value.length > 0) {
      navigate(`/search/${e.target.value}/1/5`);
    }
  };
  function changeLocation(placeToGo) {
    navigate('/', { replace: true });
  }
  return (
    <>
      <LayoutContainer>
        <SideMenu
          ref={sideBar}
          sidebar={isSidebarOn}
          className={needSidebar ? 'prevent-sidebar' : 'prevent-sidebar remove'}
        >
          <p onClick={() => changeLocation('/')}>Home</p>
          <p>PUBLIC</p>
          <ul>
            <li className="active" onClick={() => changeLocation('/')}>
              <svg
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="M9 1C4.64 1 1 4.64 1 9c0 4.36 3.64 8 8 8 4.36 0 8-3.64 8-8 0-4.36-3.64-8-8-8ZM8 15.32a6.46 6.46 0 0 1-4.3-2.74 6.46 6.46 0 0 1-.93-5.01L7 11.68v.8c0 .88.12 1.32 1 1.32v1.52Zm5.72-2c-.2-.66-1-1.32-1.72-1.32h-1v-2c0-.44-.56-1-1-1H6V7h1c.44 0 1-.56 1-1V5h2c.88 0 1.4-.72 1.4-1.6v-.33a6.45 6.45 0 0 1 3.83 4.51 6.45 6.45 0 0 1-1.51 5.73v.01Z"></path>
              </svg>
              <span>Questions</span>
            </li>
            <li className="disabled">Tags</li>
            <li className="disabled">Users</li>
            <li className="disabled">Companies</li>
          </ul>
        </SideMenu>
      </LayoutContainer>
      <Gnb>
        <div>
          <MobileMenuBtn
            className="prevent-sidebar"
            sidebar={isSidebarOn}
            onClick={() => {
              setIsSidebarOn(!isSidebarOn);
            }}
          >
            <span></span>
          </MobileMenuBtn>
          <Logo onClick={() => changeLocation('/')}>
            <p></p>
          </Logo>
          <MenuNav>
            <p className="disabled">About</p>
            <p className="disabled">Products</p>
            <p className="disabled">For Teams</p>
          </MenuNav>
          <LoginNav>
            <MobileSearchButton
              className="prevent-searchbar"
              onClick={() => {
                setIsSearch(!isSearch);
              }}
            >
              <svg
                className="prevent-searchbar"
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path
                  className="prevent-searchbar"
                  d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z"
                ></path>
              </svg>
            </MobileSearchButton>
            <SearchIcon visible={isSearch}>
              <svg
                className="prevent-searchbar"
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z"></path>
              </svg>
            </SearchIcon>
            <Search
              onKeyPress={onKeyPress}
              className="prevent-searchbar"
              visible={isSearch}
            ></Search>
            {isLogin ? (
              <ul>
                <li>
                  <Link to="/mypage">
                    <HeaderAvatar img={''}></HeaderAvatar>
                  </Link>
                </li>
                <li className="popup-btn prevent-popup">
                  <span
                    onClick={() => {
                      setTogglePopUp(!togglePopUp);
                    }}
                  >
                    <svg
                      aria-hidden="true"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                    >
                      <path d="M15 1H3a2 2 0 0 0-2 2v2h16V3a2 2 0 0 0-2-2ZM1 13c0 1.1.9 2 2 2h8v3l3-3h1a2 2 0 0 0 2-2v-2H1v2Zm16-7H1v4h16V6Z"></path>
                    </svg>
                  </span>

                  {togglePopUp ? (
                    <LogoutPop>
                      <header>
                        <p>CURRENT COMMUNITY</p>
                        <svg
                          onClick={() => {
                            setTogglePopUp(!togglePopUp);
                          }}
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                        >
                          <path d="M15 4.41 13.59 3 9 7.59 4.41 3 3 4.41 7.59 9 3 13.59 4.41 15 9 10.41 13.59 15 15 13.59 10.41 9 15 4.41Z"></path>
                        </svg>
                      </header>
                      <MenuRows>
                        <Row>
                          <div>
                            {/* TODO: avatar들어오면 연결 필요 */}
                            <AvatarBlock img={userInfo.img}></AvatarBlock>
                            <p>{userInfo.nickname}</p>
                          </div>
                          <div>
                            <span>
                              <Link to="/account/logout">logout</Link>
                            </span>
                          </div>
                        </Row>
                        <Row className="second">
                          <div>
                            <span></span>Stack Overflow
                          </div>
                          <div>
                            <span>help</span>
                            <span>chat</span>
                          </div>
                        </Row>
                        <Row className="third">
                          <div>
                            <div className="Licon">
                              <Lshape></Lshape>
                            </div>
                            <span className="icon"></span>Meta Stack Overflow
                          </div>
                        </Row>
                      </MenuRows>
                    </LogoutPop>
                  ) : (
                    ''
                  )}
                </li>
              </ul>
            ) : (
              <>
                <Link to="/account/login">
                  <Button sky>Log in</Button>
                </Link>
                <Link to="/account/register">
                  <Button>Sign up</Button>
                </Link>
              </>
            )}
          </LoginNav>
        </div>
      </Gnb>
    </>
  );
};

export default Header;
