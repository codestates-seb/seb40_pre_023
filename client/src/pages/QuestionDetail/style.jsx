import styled from 'styled-components';

export const DetailPageContainer = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  margin-left: 0px;
  padding-top: 47px;

  @media screen and (min-width: 641px) {
    margin-left: 164px;
  }
  > main {
    @media screen and (min-width: 1100px) {
      display: flex;
    }
  }
`;

export const QuestionContainer = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  padding-bottom: 16px;
  border-bottom: 1px solid #e3e6e8;

  > article {
    width: 100%;
    @media screen and (min-width: 1100px) {
      width: calc(100% - 36px);
    }
  }
`;

export const AnswerContainer = styled(QuestionContainer)`
  padding: 16px 0;
`;

export const Stamps = styled.div`
  margin-left: 16px;
  padding-bottom: 15px;
  font-size: 13px;
  color: #6a737c;
  border-bottom: 1px solid #e3e6e8;
  margin-top: -10px;
  @media screen and (min-width: 641px) {
    margin-top: -17px;
  }
  strong {
    color: #232629;
  }

  ul {
    display: flex;
    gap: 14px;
  }
`;

export const DetailContents = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 16px;
  max-width: 100%;
  > form {
    width: 100%;

    .quill {
      max-height: 290px;
      .ql-container {
        height: 249px;
      }
    }
  }
`;

export const AnswerTitle = styled.h2`
  font-size: 16px;
  padding: 20px 0 16px 0;
  @media screen and (min-width: 641px) {
    font-size: 19px;
    padding: 20px 0;
  }
`;

export const PostAnswerBtn = styled.button`
  display: inline-block;
  padding: 10.4px;
  margin-top: 20px;
  font-size: 13px;
  background-color: #0a95ff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: hsl(206, 100%, 40%);
  }
  &:focus {
    outline: none;
  }
  &:disabled {
    opacity: 0.3;
  }
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin: 30px 0;
`;

export const Tag = styled.p`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  height: 19px;
  font-size: 12px;
  padding: 7px;
  border-radius: 3px;
  background-color: hsl(205, 46%, 92%);
  color: #39739d !important;
  white-space: nowrap;
`;
