import styled from 'styled-components';
import LogoImg from '../../assets/sprites.svg';

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
  width: 25px;
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

      &:hover {
        background-color: hsl(210, 8%, 90%);
      }
      svg {
        opacity: 0.7;
        &:hover {
          opacity: 1;
        }
      }
      p {
        width: 24px;
        height: 24px;
        border-radius: 3px;
        background-color: hsl(210, 8%, 35%);
      }
    }
  }
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
  height: 15px;
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
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  padding-top: 60px;
  padding-bottom: 10px;
  background-color: #fff;

  @media screen and (min-width: 641px) {
    display: block;
    width: 164px;
    height: 100vh;
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
