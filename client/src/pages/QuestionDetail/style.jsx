import styled from 'styled-components';

export const DetailPageContainer = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  margin-left: 0px;
  padding-top: 47px;

  @media screen and (min-width: 641px) {
    margin-left: 164px;
  }
`;

export const DetailContainer = styled.main`
  @media screen and (min-width: 981px) {
    display: flex;
  }
`;

export const DetailContents = styled.div`
  display: flex;
  padding: 16px 10px 16px 10px;
`;

export const VerticalBtns = styled.div`
  width: 36px;
  flex-shrink: 0;
`;

export const Article = styled.article`
  padding: 0 16px;

  pre {
    display: inline-block;
    width: 100%;
    white-space: pre-wrap;
    font-size: 15px;
    line-height: 22px;
  }
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

export const EditorContainer = styled.div`
  .quill {
    max-height: 290px;

    button.ql-code-block {
      /* 블록 코드 버튼이 인라인 코드 버튼과 동일하여 강제 수정 */
      background-color: #444;
      height: 80%;
      border-radius: 2px;

      &:hover {
        background-color: #292929;
        polyline,
        line {
          stroke: #fff;
        }
      }

      polyline,
      line {
        stroke: #fff;
      }

      &.ql-active {
        polyline,
        line {
          stroke: #3e9dfc;
        }
        &:hover {
          background-color: #292929;
          polyline,
          line {
            stroke: #3e9dfc;
          }
        }
      }
    }

    .ql-container {
      height: 249px;
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
`;
