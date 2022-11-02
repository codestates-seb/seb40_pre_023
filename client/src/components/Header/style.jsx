import styled from 'styled-components';
import LogoImg from '../../assets/sprites.svg';
import DefaultAvatar from '../../assets/default-avatar.svg';
import Icon from '../../assets/favicons.png';

export const Gnb = styled.header`
  position: fixed;
  display: flex;
  width: 100%;
  height: 47px;
  background-color: hsl(210, 8%, 97.5%);
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  border-top: 3px solid #f48223;
  box-sizing: border-box;
  z-index: 1;

  > div {
    display: flex;
    box-sizing: border-box;
    width: 100%;
    max-width: 1215px;
    padding: 0 12px;
    margin: 0 auto;

    @media screen and (min-width: 641px) {
      padding-left: 10px;
    }
  }
`;

export const MobileMenuBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 47px;
  height: 47px;

  @media screen and (min-width: 641px) {
    display: none;
  }

  > span {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 2px;
    background-color: hsl(210, 8%, 35%);
    transform: ${(props) => (props.sidebar ? 'rotate(45deg)' : 'rotate(0)')};
    transition: 0.1s;
    cursor: pointer;

    &:before,
    &:after {
      content: '';
      position: absolute;
      display: inline-block;
      width: 16px;
      height: 2px;
      background-color: hsl(210, 8%, 35%);
    }
    &:before {
      top: ${(props) => (props.sidebar ? '0px' : '-5px')};
      transform-origin: center;
      transform: ${(props) => (props.sidebar ? 'rotate(90deg)' : 'rotate(0)')};
    }
    &:after {
      bottom: -5px;
      opacity: ${(props) => (props.sidebar ? '0' : '1')};
      transform-origin: center;
    }
  }
`;

export const Logo = styled.div`
  display: inline-flex;
  align-items: center;
  height: 100%;
  padding: 0 8px;
  margin-left: 15px;
  cursor: pointer;

  @media screen and (min-width: 641px) {
    width: 150px;
    padding: 0;
    margin-left: 0;
  }

  > p {
    display: inline-block;
    width: 25px;
    height: 34px;
    background-image: url(${LogoImg});
    background-repeat: no-repeat;
    background-position: 0 -500px;

    @media screen and (min-width: 641px) {
      width: 150px;
      background-position: 0 -500px;
    }
  }
`;

export const MenuNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  font-size: 14px;
  color: hsl(210, 8%, 35%);

  &:hover {
    color: hsl(210, 8%, 15%);
  }

  > p {
    display: none;
    padding: 8px 12px;
    border-radius: 1000px;
    white-space: nowrap;
    cursor: pointer;

    &:hover {
      background-color: hsl(210, 8%, 90%);
    }

    &:nth-child(2) {
      display: inline-block;
    }

    @media screen and (min-width: 880px) {
      display: inline-block;
    }
  }
`;

export const LoginNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;

  ul {
    display: flex;
    height: 100%;

    li {
      display: flex;
      align-items: center;
      padding: 0 7px;
      cursor: pointer;

      &.popup-btn {
        position: relative;
      }

      span {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
      }

      &:hover {
        background-color: hsl(210, 8%, 90%);
      }
      svg {
        opacity: 0.7;
        &:hover {
          opacity: 1;
        }
      }
    }
  }
`;

export const HeaderAvatar = styled.p`
  width: 24px;
  height: 24px;
  border-radius: 3px;
  background-image: ${(props) =>
    props.img ? `url(${props.img})` : `url(${DefaultAvatar})`};
`;

export const SearchIcon = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};

  position: absolute;
  left: 5vw;
  top: 65px;
  z-index: 1;
  opacity: 0.5;

  @media screen and (min-width: 641px) {
    display: block;
    position: unset;
    left: unset;
    top: unset;
    transform: translateX(177%);
  }
`;

export const Search = styled.input`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 150%);
  width: 95%;
  height: 32.6px;
  box-sizing: border-box;
  padding-left: 34px;
  border: 1px solid hsl(210, 8%, 75%);
  border-radius: 2px;
  display: ${(props) => (props.visible ? 'block' : 'none')};

  &:focus-visible {
    border: none;
    outline: 1px solid hsl(206, 90%, 69.5%);
    box-shadow: 0 0 0 4px #d7e5f2;
  }

  @media screen and (min-width: 641px) {
    position: relative;
    left: unset;
    display: inline-block;
    transform: unset;
  }
`;

export const MobileSearchButton = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  height: 100%;
  opacity: 0.7;
  cursor: pointer;

  @media screen and (min-width: 641px) {
    display: none;
  }
`;

export const Button = styled.div`
  height: 30px;
  padding: 8.4px 8px 6.4px 8px;
  border-radius: 2px;
  border: 1px solid black;
  font-size: 13px;
  vertical-align: middle;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;

  background-color: ${(props) =>
    props.sky ? 'hsl(205,46%,92%)' : 'hsl(206,100%,52%)'};
  border-color: ${(props) =>
    props.sky ? 'hsl(205,41%,63%)' : 'hsl(206,100%,52%)'};
  color: ${(props) => (props.sky ? 'hsl(205,47%,42%)' : 'hsl(0,0%,100%)')};

  &:hover {
    background-color: ${(props) =>
      props.sky ? 'hsl(205,57%,81%)' : 'hsl(206,100%,40%)'};
    color: ${(props) => (props.sky ? 'hsl(205,46%,32%)' : 'hsl(0,0%,100%)')};
  }
`;

export const SideMenu = styled.div`
  position: fixed;
  display: ${(props) => (props.sidebar ? 'block' : 'none')};
  width: 240px;
  padding-top: 60px;
  padding-bottom: 10px;
  background-color: #fff;
  z-index: 1;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);

  @media screen and (min-width: 641px) {
    display: block;
    width: 164px;
    height: 100vh;
    border-right: 1px solid #e3e6e8;
    box-shadow: none;
  }

  &.remove {
    @media screen and (min-width: 641px) {
      display: none !important;
      width: 164px;
      height: 100vh;
    }
  }

  p {
    margin-top: 18px;
    padding: 5px 8px;
    font-size: 13px;
    color: hsl(210, 8%, 35%);
    cursor: pointer;

    &:first-child {
      &:hover {
        font-weight: 500;
        color: hsl(210, 8%, 5%);
      }
    }
    &:nth-child(2) {
      cursor: auto;
      color: hsl(210, 8%, 35%);
    }
  }

  ul {
    li {
      position: relative;
      display: flex;
      align-items: center;
      padding: 10px 6px 10px 30px;
      font-size: 13px;
      color: hsl(210, 8%, 35%);
      cursor: pointer;

      &:hover {
        color: hsl(210, 8%, 5%);
        svg {
          opacity: 1;
        }
      }

      &.active {
        background-color: hsl(210, 8%, 95%);
        font-weight: bolder;
        color: hsl(210, 8%, 5%);
        border-right: 3px solid #f48223;
        svg {
          opacity: 1;
        }
      }

      svg {
        position: absolute;
        left: 8px;
        margin-top: -1px;
        opacity: 0.7;
      }
    }
  }
`;

export const LogoutPop = styled.div`
  position: absolute;
  right: -12px;
  top: 44px;
  width: 100vw;
  background-color: hsl(210, 8%, 95%);
  box-sizing: border-box;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);

  @media screen and (min-width: 641px) {
    width: 363px;
  }
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 10px;

    p {
      font-size: 11px;
      font-weight: 800;
      color: #0074cc;
      &:hover {
        color: rgb(10, 149, 255);
      }
    }
    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export const MenuRows = styled.div`
  display: block;
  background-color: hsl(205, 47%, 97%);
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  > div {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px;
    font-size: 12px;
    color: #0074cc;

    a {
      color: #0074cc;
      &:hover {
        color: hsl(206, 100%, 52%);
      }
    }

    &:nth-child(2) {
      gap: 10px;
    }

    span {
      font-size: 12px;
    }
  }

  &.second {
    padding: 0 4px;
    > div:first-child {
      font-weight: 800;
      span {
        display: inline-block;
        width: 16px;
        height: 16px;
        background-image: url(${Icon});
        background-size: 16px 7038px;
        background-position: 0 -6138px;
      }
    }
  }

  &.third {
    padding: 0 10px;
    > div:first-child {
      .icon {
        display: inline-block;
        width: 16px;
        height: 16px;
        background-image: url(${Icon});
        background-size: 16px 7038px;
        background-position: 0 -6138px;
        filter: grayscale(1);
      }
    }
  }
`;

export const AvatarBlock = styled.p`
  width: 32px;
  height: 32px;
  border-radius: 3px;
  background-image: ${(props) =>
    props.img ? `url(${props.img})` : `url(${DefaultAvatar})`};
`;

export const Lshape = styled.div`
  width: 10px;
  height: 10px;
  border-bottom: 0.8px solid #959798;
  border-left: 0.8px solid #959798;
`;
