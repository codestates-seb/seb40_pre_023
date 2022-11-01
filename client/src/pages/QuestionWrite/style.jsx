import styled from 'styled-components';
import bg from '../../assets/ask-bg.svg';

export const BgContianer = styled.div`
  background-color: hsl(210, 8%, 97.5%);
  padding-top: 47px;
`;

export const TitleContainer = styled.div`
  display: felx;
  align-items: center;
  height: 73.6px;
  font-size: 22px;
  font-weight: bolder;
  padding: 0 16px;
  margin-bottom: 16px;

  @media screen and (min-width: 641px) {
    height: 86px;
    font-size: 27px;
    margin-bottom: 5px;
  }

  @media screen and (min-width: 1050px) {
    height: 130px;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-position: right;
  }
`;

export const WrtieWrapper = styled.div`
  display: flex;
`;

export const WriteMain = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 16px;
  padding-bottom: 70px;
`;

export const Notice = styled.section`
  background-color: #ebf4fb;
  border: 1px solid #a6ceed;
  padding: 24px;
  border-radius: 3px;
  color: #3b4045;

  @media screen and (min-width: 1100px) {
    width: 70%;
  }

  h2 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 13px;
  }
  p {
    font-size: 15px;
    line-height: 19px;
    margin-bottom: 15px;
    span {
      color: #0074cc;
    }
  }
  h5 {
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 8px;
  }
  ul {
    font-size: 13px;
    list-style-type: disc;
    padding-left: 25px;
    li {
      padding: 2px 0;
    }
  }
`;

export const InputGroup = styled.section`
  opacity: 0.3;
  pointer-events: none;

  &.active {
    .helper {
      display: block;
    }
  }

  &:not(.opened) {
    button {
      display: none;
    }
  }

  &.opened {
    opacity: 1;
    pointer-events: auto;
  }

  @media screen and (min-width: 1100px) {
    display: flex;
    gap: 16px;
  }

  &.active {
    flex-direction: row-reverse;

    button {
      display: block;
    }
  }
`;

export const InputSec = styled.section`
  height: fit-content;
  padding: 24px;
  margin: 16px 0;
  border: 1px solid #e3e6e8;
  border-radius: 3px;
  background-color: #fff;
  @media screen and (min-width: 1100px) {
    width: 70%;
    flex-shrink: 0;
  }

  label {
    font-size: 11px;
    font-weight: 700;
    color: #0c0d0e;
    @media screen and (min-width: 641px) {
      font-size: 15px;
    }
  }

  p {
    font-size: 12px;
    margin-top: 6px;
    margin-bottom: 15px;
    color: #3b4045;
  }

  .quill {
    height: 232px;
    border: 3px;

    .ql-container {
      height: 191.06px;
    }
  }
`;

export const InputText = styled.input`
  height: 32.6px;
  width: 100%;
  box-sizing: border-box;
  padding: 8px 9px;
  border: 1px solid hsl(210, 8%, 75%);
  border-radius: 2px;

  &:focus-visible {
    border: none;
    outline: 1px solid hsl(206, 90%, 69.5%);
    box-shadow: 0 0 0 4px #d7e5f2;
  }

  &::placeholder {
    color: hsl(210, 8%, 75%);
  }

  & + small {
    margin-top: 6px;
    display: none;
    font-size: 12px;
    color: #de4f54;
  }

  &.error {
    border-color: #de4f54;

    &:focus-visible {
      border: 1px solid #de4f54;
      outline: 1px solid #de4f54;
      box-shadow: 0 0 0 4px rgba(222, 79, 84, 0.2);
    }

    & + small {
      display: block;
    }
  }
`;

export const HelperSec = styled.section`
  display: none;
  width: 100%;
  height: fit-content;
  margin: 16px 0;
  border: 1px solid #e3e6e8;
  border-radius: 3px;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  color: #232629;
  background-color: #fff;

  @media screen and (min-width: 1100px) {
    width: 30%;
  }
`;

export const HelperHeader = styled.header`
  padding: 12px;
  background-color: hsl(210, 8%, 97.5%);
  border-bottom: 1px solid #e3e6e8;
  font-size: 14px;

  @media screen and (min-width: 641px) {
    font-size: 15px;
  }
`;

export const HelperMain = styled.main`
  display: flex;
  padding: 16px;
  font-size: 12px;
  line-height: 16px;

  svg {
    flex-shrink: 0;
  }

  div {
    font-size: 12px;
    margin-left: 16px;
    p {
      margin-bottom: 11px;
    }
  }

  span {
    color: #0074cc;
    cursor: pointer;

    &:hover {
      color: #0a95ff;
    }
  }
`;

export const PostBtn = styled.button`
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

  &:disabled {
    opacity: 0.3;
  }
`;

export const NextBtn = styled(PostBtn)`
  margin-right: 0;
  margin-top: 10.4px;

  &.remove {
    display: none !important;
  }
`;

export const DiscardBtn = styled.p`
  display: inline-block;
  padding: 9px;
  font-size: 13px;
  color: hsl(358, 62%, 47%);
  border-radius: 4px;
  white-space: nowrap;
  cursor: pointer;
  background-color: unset;

  &:hover {
    background-color: hsl(358, 75%, 97%);
  }
`;

// TODO: 정리필요(현재 태그 오류 스타일 적용안되고 있음)
export const TagsInputGroup = styled.label`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
  min-height: 32.6px;
  width: 100%;
  padding: 8px 9px;
  box-sizing: border-box;
  border: 1px solid hsl(210, 8%, 75%);
  border-radius: 2px;
  padding-left: 6px;

  &.focused {
    border: none;
    outline: 1px solid hsl(206, 90%, 69.5%);
    box-shadow: 0 0 0 4px #d7e5f2;

    &.error {
      border: 1px solid #de4f54;
      outline: 1px solid #de4f54;
      box-shadow: 0 0 0 4px rgba(222, 79, 84, 0.2);
    }
  }

  & ~ small {
    margin-top: 6px;
    display: none;
    font-size: 12px;
    color: #de4f54;
  }

  &.error {
    border-color: #de4f54;

    & ~ small.on {
      display: block;
    }
  }

  input {
    flex-shrink: 1;
    display: inline-block;
    box-sizing: border-box;
    height: 100%;
    padding-left: 0;
    border: none;
    min-width: 250px;

    &:focus-visible {
      outline: none;
    }
    &::placeholder {
      color: hsl(210, 8%, 75%);
    }
  }
`;
