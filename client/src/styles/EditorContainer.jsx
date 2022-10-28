import styled from 'styled-components';

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
      .ql-editor pre.ql-syntax {
        background-color: #f0f0f0 !important;
        color: unset !important;
      }
    }
  }
`;
