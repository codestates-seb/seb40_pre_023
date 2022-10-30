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
} from './style';
import LayoutContainer from '../LayoutContainer/LayoutContainer';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const sideBar = useRef();

  const [isSearch, setIsSearch] = useState(false);
  const [isSidebarOn, setIsSidebarOn] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [needSidebar, setNeedSidebar] = useState(true);

  const handleCloseToggle = (e) => {
    if (!e.target.closest('.prevent-sidebar')) {
      setIsSidebarOn(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleCloseToggle);
  }, []);

  useEffect(() => {
    if (location.pathname.indexOf('ask') !== -1) {
      setNeedSidebar(false);
    } else if (
      location.pathname === '/' ||
      location.pathname.indexOf('questions') !== -1 ||
      location.pathname.indexOf('answers') !== -1 ||
      location.pathname.indexOf('mypage') !== -1
    ) {
      setNeedSidebar(true);
    } else {
      setNeedSidebar(false);
    }
  }, [location, needSidebar]);

  return (
    <>
      <LayoutContainer>
        <SideMenu
          ref={sideBar}
          sidebar={isSidebarOn}
          className={needSidebar ? 'prevent-sidebar' : 'prevent-sidebar remove'}
        >
          <Link to="/">
            <p>Home</p>
          </Link>
          <p>PUBLIC</p>
          <ul>
            <Link to="/">
              <li className="active">
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
            </Link>
            <li>Tags</li>
            <li>Users</li>
            <li>Companies</li>
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
          <Link to="/">
            <Logo>
              <p></p>
            </Logo>
          </Link>
          <MenuNav>
            <p>About</p>
            <p>Products</p>
            <p>For Teams</p>
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
            <Search className="prevent-searchbar" visible={isSearch}></Search>
            {isLogin ? (
              <ul>
                <li>
                  <Link to="/mypage">
                    <HeaderAvatar img={''}></HeaderAvatar>
                  </Link>
                </li>
                <li>
                  <svg
                    aria-hidden="true"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path d="M15 1H3a2 2 0 0 0-2 2v2h16V3a2 2 0 0 0-2-2ZM1 13c0 1.1.9 2 2 2h8v3l3-3h1a2 2 0 0 0 2-2v-2H1v2Zm16-7H1v4h16V6Z"></path>
                  </svg>
                </li>
              </ul>
            ) : (
              <>
                <Link to="/members/login">
                  <Button sky>Log in</Button>
                </Link>
                <Link to="/members/signup">
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
