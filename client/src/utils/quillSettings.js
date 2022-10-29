import hljs from 'highlight.js';
import 'highlight.js/styles/stackoverflow-light.css';
//hljs는 코드 부분 스타일 주는 데 사용
hljs.configure({
  languages: ['javascript', 'ruby', 'python', 'java', 'cpp', 'kotlin', 'sql'],
});

export const editorModules = {
  toolbar: [
    ['link', ('underline', 'strike', 'blockquote')],
    ['code', 'code-block'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
  ],
  syntax: {
    highlight: (text) => hljs.highlightAuto(text).value,
  },
};
