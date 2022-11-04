import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  :root {
    a{ 
      text-decoration: none;
    }
    .disabled{
      opacity: 0.3;
      cursor: not-allowed !important;
    }
  }
`;

export default GlobalStyle;
