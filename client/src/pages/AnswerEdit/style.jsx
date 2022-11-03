import styled from 'styled-components';

export const EditPageContainer = styled.div`
  box-sizing: border-box;
  margin-left: 0px;
  padding-top: 47px;
  padding-bottom: 50px;

  @media screen and (min-width: 641px) {
    margin-left: 164px;
  }
  > main {
    @media screen and (min-width: 1100px) {
      display: flex;
    }
  }
`;

export const EditContainer = styled.div`
  width: 100%;
  padding: 16px;
  padding-top: 20px;
  box-sizing: border-box;

  > article {
    width: 100%;
    @media screen and (min-width: 1100px) {
      width: calc(100% - 36px);
    }
  }
`;

export const QuestionViewSec = styled.section`
  border-bottom: 1px solid #e3e6e8;
  padding-bottom: 16px;

  h3 {
    font-size: 19px;
    color: #0075cc;
    margin-bottom: 25px;
  }
  > pre {
    max-height: 250px;
    overflow: auto;
  }
`;

export const AnswerEditSec = styled.section`
  margin-top: 25px;

  h2 {
    font-size: 21px;
    margin-bottom: 25px;
  }

  .quill {
    max-height: 290px;
    .ql-container {
      height: 249px;
    }
  }
`;

export const EditBtn = styled.button`
  display: inline-block;
  padding: 9px;
  margin-top: 24px;
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
