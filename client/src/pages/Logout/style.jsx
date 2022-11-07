import styled from 'styled-components';
import favicons from '../../assets/favicons.png';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f1f2f3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  h3 {
    font-size: 20px;
    margin-bottom: 24px;
    line-height: 28px;
    text-align: center;
    color: #232629;
  }
`;

export const Card = styled.main`
  width: 100%;
  padding: 24px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
  border-radius: 7px;
  max-width: 268px;

  @media screen and (min-width: 641px) {
    max-width: 316px;
  }

  ul {
    padding-bottom: 12px;
    border-bottom: 1px solid hsl(210, 8%, 90%);
    li {
      padding: 5px 0;
      font-size: 14.5px;

      a {
        color: #0074cc;
        &:hover {
          color: hsl(206, 100%, 52%);
        }
      }

      span {
        display: inline-block;
        width: 16px;
        height: 16px;
        margin-right: 6px;
        margin-bottom: -2px;

        background-image: url(${favicons});
        background-size: 16px 7038px;

        &.askubuntu {
          background-position: 0 -360px;
        }
        &.mathoverflow {
          background-position: 0 -4032px;
        }
        &.serverfault {
          background-position: 0 -5652px;
        }
        &.stackapps {
          background-position: 0 -6084px;
        }
        &.stackexchange {
          background-position: 0 -6102px;
        }
        &.stackoverflow {
          background-position: 0 -6138px;
        }
        &.speruser {
          background-position: 0 -6282px;
        }
      }
    }
  }
`;

export const GroupCheck = styled.label`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #0c0d0e;
  margin: 16px 0;

  input {
    width: 13px;
    height: 13px;
    border-radius: 3px;
    outline: none;
    border: none;
    margin-right: 4px;
  }
`;

export const EditBtn = styled.button`
  display: inline-block;
  padding: 9px;
  font-size: 13px;
  background-color: #0a95ff;
  color: #fff;
  border-radius: 4px;
  white-space: nowrap;
  border: none;
  cursor: pointer;
  margin-right: 16px;

  &:hover {
    background-color: hsl(206, 100%, 40%);
  }

  &:focus {
    outline: unset;
  }
`;

export const CancelBtn = styled.p`
  display: inline-block;
  padding: 9px;
  font-size: 13px;
  color: hsl(206, 100%, 40%);
  border-radius: 4px;
  white-space: nowrap;
  cursor: pointer;
  background-color: unset;

  &:hover {
    background-color: rgb(0, 116, 204, 0.1);
  }
`;

export const LogoutFooter = styled.div`
  margin-top: 25px;
  color: #6a737c;
  font-size: 12px;
  line-height: 14px;
`;
