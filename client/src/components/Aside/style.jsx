import styled from 'styled-components';

export const AsideContainer = styled.aside`
  display: none;
  box-sizing: border-box;
  border: 3px solid yellow;
  width: 298px;

  @media screen and (min-width: 981px) {
    display: block;
  }
`;
