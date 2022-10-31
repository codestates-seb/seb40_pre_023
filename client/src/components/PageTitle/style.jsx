import styled from 'styled-components';
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24px 16px;
  font-size: 24px;
  @media screen and (min-width: 641px) {
    font-size: 27px;
  }
`;

export const Button = styled.p`
  display: inline-block;
  padding: 10.4px;
  font-size: 13px;
  background-color: #0a95ff;
  color: #fff;
  border-radius: 4px;
  white-space: nowrap;
  &:hover {
    background-color: hsl(206, 100%, 40%);
  }
`;
