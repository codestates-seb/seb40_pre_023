import styled from 'styled-components';

export const QlViewer = styled.pre`
  font-size: 15px;
  .ql-syntax {
    background-color: hsl(210, 8%, 95%);
    border-radius: 5px;
    padding: 10px;
    font-size: 13px;
  }

  blockquote {
    border-left: 4px solid #ccc;
    margin-bottom: 5px;
    margin-top: 5px;
    padding-left: 16px;
  }

  code {
    background-color: #f0f0f0;
    border-radius: 3px;
    font-size: 85%;
    padding: 2px 4px;
  }

  ol,
  ul {
    padding-left: 1.5em;
    &:not(.ql-direction-rtl) {
      padding-left: 1.5em;
    }
  }

  ol {
    list-style-type: auto;
  }
  ul {
    list-style-type: disc;
  }
  .ql-indent-1 {
    padding-left: 3em;
  }
  .ql-indent-2 {
    padding-left: 6em;
  }
  .ql-indent-3 {
    padding-left: 9em;
  }
  .ql-indent-4 {
    padding-left: 12em;
  }
  .ql-indent-5 {
    padding-left: 15em;
  }
`;
