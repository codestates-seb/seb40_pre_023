import styled from 'styled-components';

export const AsideContainer = styled.aside`
  box-sizing: border-box;
  width: 100%;
  padding: 16px 16px 32px 16px;

  @media screen and (min-width: 1100px) {
    display: block;
    flex-shrink: 0;
    max-width: 298px;
    padding: 16px 0;
  }
`;
