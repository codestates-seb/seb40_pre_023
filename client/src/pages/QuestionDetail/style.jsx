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
    display: flex;
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

export const VerticalBtns = styled.div`
  width: 36px;
  flex-shrink: 0;
`;

export const Vote = styled.div`
  > button {
    width: 36px;
    height: 36px;
    background-color: unset;
    padding: 0;
    border: none;
    cursor: pointer;

    svg {
      fill: #babfc3;
    }
  }

  p {
    color: #6a737c;
    font-size: 21px;
    text-align: center;
    margin: 4px 0;
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
`;
