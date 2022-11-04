import { useEffect, useState, useRef } from 'react';
import {
  Gnb,
  MobileMenuBtn,
  Logo,
  MenuNav,
  LoginNav,
  Button,
  Search,
  SearchGroup,
  SearchArrow,
  MobileSearchButton,
  SearchIcon,
  SideMenu,
  HeaderAvatar,
  LogoutPop,
  MenuRows,
  AvatarBlock,
  Row,
  Lshape,
  MyPageBtn,
  SearchDropDown,
} from './style';
import LayoutContainer from '../LayoutContainer/LayoutContainer';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import isLoginState from '../../_state/isLoginState';
import memberIdState from '../../_state/memberIdState';
import { getMemberInfo } from '../../api/api';

const Header = ({ isSidebar }) => {
  const location = useLocation();
  const sideBar = useRef();
  const inputRef = useRef();
  const navigate = useNavigate();

  const [isSearch, setIsSearch] = useState(false);
  const [isSidebarOn, setIsSidebarOn] = useState(false);

  const [needSidebar, setNeedSidebar] = useState(isSidebar);
  const [togglePopUp, setTogglePopUp] = useState(false);

  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [memberId, setMemberId] = useRecoilState(memberIdState);
  const [userInfo, setUserInfo] = useState();

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
    if (isLogin) {
      getMemberInfo(memberId).then((res) => {
        setUserInfo(res.data.data);
      });
    }

    window.addEventListener('click', handleCloseToggle);
  }, []);

  const onKeyPress = (e) => {
    if (e.key === 'Enter' && e.target.value.length > 0) {
      navigate(`/search/${e.target.value}/1/5`);
      inputRef.current.value = '';
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
            {isLogin ? (
              <p className="disabled">Products</p>
            ) : (
              <>
                <p className="disabled">About</p>
                <p className="disabled">Products</p>
                <p className="disabled">For Teams</p>
              </>
            )}
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
                width="17"
                height="17"
                viewBox="0 0 18 18"
              >
                <path d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z"></path>
              </svg>
            </SearchIcon>
            <SearchGroup>
              <Search
                ref={inputRef}
                placeholder="Search..."
                onKeyPress={onKeyPress}
                className="prevent-searchbar"
                visible={isSearch}
              ></Search>
              <SearchDropDown>
                <div>
                  <ul>
                    <li>
                      [tag] <span>search within a tag</span>
                    </li>
                    <li>
                      user:1234 <span>search by author</span>
                    </li>
                    <li>
                      "words here" <span>axact phrase</span>
                    </li>
                    <li>
                      collective:"Name" <span>collecticve content</span>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      answers:0 <span>unanswered questions</span>
                    </li>
                    <li>
                      score:3 <span>posts with a 3+ score</span>
                    </li>
                    <li>
                      is:question <span>type of post</span>
                    </li>
                    <li>
                      isaccepted:yes <span>search within status</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p>Ask a question</p>
                  <small>search help</small>
                </div>
              </SearchDropDown>
              <SearchArrow></SearchArrow>
            </SearchGroup>
            {isLogin ? (
              <ul>
                <MyPageBtn>
                  <Link to="/mypage">
                    <HeaderAvatar img={''}></HeaderAvatar>
                  </Link>
                </MyPageBtn>
                <li className="disabled">
                  <svg width="18" height="16" viewBox="0 0 20 18">
                    <path d="M4.63 1h10.56a2 2 0 0 1 1.94 1.35L20 10.79V15a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-4.21l2.78-8.44c.25-.8 1-1.36 1.85-1.35Zm8.28 12 2-2h2.95l-2.44-7.32a1 1 0 0 0-.95-.68H5.35a1 1 0 0 0-.95.68L1.96 11h2.95l2 2h6Z"></path>
                  </svg>
                </li>
                <li className="green disabled">
                  <svg width="17" height="17" viewBox="0 0 18 18">
                    <path d="M15 2V1H3v1H0v4c0 1.6 1.4 3 3 3v1c.4 1.5 3 2.6 5 3v2H5s-1 1.5-1 2h10c0-.4-1-2-1-2h-3v-2c2-.4 4.6-1.5 5-3V9c1.6-.2 3-1.4 3-3V2h-3ZM3 7c-.5 0-1-.5-1-1V4h1v3Zm8.4 2.5L9 8 6.6 9.4l1-2.7L5 5h3l1-2.7L10 5h2.8l-2.3 1.8 1 2.7h-.1ZM16 6c0 .5-.5 1-1 1V4h1v2Z"></path>
                  </svg>
                </li>
                <li className="disabled">
                  <svg width="16" height="16" viewBox="0 0 18 18">
                    <path d="M9 1C4.64 1 1 4.64 1 9c0 4.36 3.64 8 8 8 4.36 0 8-3.64 8-8 0-4.36-3.64-8-8-8Zm.81 12.13c-.02.71-.55 1.15-1.24 1.13-.66-.02-1.17-.49-1.15-1.2.02-.72.56-1.18 1.22-1.16.7.03 1.2.51 1.17 1.23ZM11.77 8c-.59.66-1.78 1.09-2.05 1.97a4 4 0 0 0-.09.75c0 .05-.03.16-.18.16H7.88c-.16 0-.18-.1-.18-.15.06-1.35.66-2.2 1.83-2.88.39-.29.7-.75.7-1.24.01-1.24-1.64-1.82-2.35-.72-.21.33-.18.73-.18 1.1H5.75c0-1.97 1.03-3.26 3.03-3.26 1.75 0 3.47.87 3.47 2.83 0 .57-.2 1.05-.48 1.44Z"></path>
                  </svg>
                </li>
                <li
                  className="popup-btn prevent-popup"
                  onClick={() => {
                    setTogglePopUp(!togglePopUp);
                  }}
                >
                  <span>
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
