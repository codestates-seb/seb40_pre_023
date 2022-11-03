import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 44px;
  width: 100%;
  min-height: 100vh;
  background-color: #f1f2f3;
`;

export const SideContainer = styled.span`
  display: none;
  margin-right: 48px;

  @media (min-width: 817px) {
    display: block;
  }
`;

export const Main = styled.main`
  max-width: 268px;
  margin-bottom: -30px;
`;

export const LickGroup = styled.div`
  padding: 16px;
  font-size: 13px;
  color: #232629;
  text-align: center;

  p:first-child {
    margin-bottom: 12px;
  }

  a {
    color: #0074cc;
    margin-left: 5px;
    &:hover {
      color: hsl(206, 100%, 52%);
    }
  }

  span {
    color: #0074cc;
  }
`;

export const MobileTitle = styled.h1`
  margin-bottom: 24px;
  font-size: 19.8px;
  line-height: 25px;
  text-align: center;
  @media (min-width: 817px) {
    display: none;
  }
`;

export const Card = styled.div`
  padding: 24px;
  background-color: white;
  border-radius: 7px;
  box-shadow: rgb(0 0 0 / 5%) 0px 10px 24px, rgb(0 0 0 / 5%) 0px 20px 48px,
    rgb(0 0 0 / 10%) 0px 1px 4px;

  .error {
    color: #d0393e;
    font-size: 12px;
    visibility: none;
  }

  .msg-title {
    visibility: hidden;
  }
`;

export const InputLabel = styled.label`
  display: block;
  margin-bottom: 6px;
  font-size: 15px;
  font-weight: 600;
  display: flex;
  margin-right: auto;
`;

export const InputText = styled.input`
  height: 31px;
  border: 1px solid rgb(186, 191, 196);
  border-radius: 3px;
  border-color: '#de4f54';
  box-shadow: '0 0 0 4px #f7e1e1, 0 0 0 4px #f7e1e1';

  &:focus {
    outline: none;
    border-color: '#de4f54';
    border-width: 1px;
    box-shadow: '0 0 0 4px #f7e1e1, 0 0 0 4px #f7e1e1';
  }
`;

export const InputButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 35px;
  border-radius: 3px;
  border: 0px;
  padding: 2px 9px;
  margin-top: 30px;

  font-size: 0.85rem;
  color: white;
  background-color: #379fef;
  transition: all 0.4s ease 0s;

  cursor: pointer;
  &:hover {
    background-color: #0074cc;
  }
`;

export const Desc = styled.small`
  display: inline-block;
  margin-top: 25px;
  font-size: 11px;
  color: #6a737c;

  span {
    color: #0074cc;
  }
`;

export const SignUp = styled.p`
  color: rgb(35, 38, 41);
  display: flex;
  gap: 10px;
  font-size: 13px;
  a {
    color: #0e7bce;
    text-decoration: none;
    &:visited {
      color: #0e7bce;
      text-decoration: none;
    }
    &:hover {
      color: #379fef;
    }
  }
  margin-top: 50px;
`;
