import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  gap: 20px;
  padding: 24px 16px;
  width: 100%;
  box-sizing: border-box;
  @media screen and (min-width: 641px) {
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const TitleArea = styled.p`
  word-break: break-all;
  word-wrap: break-word;
  display: inline-block;
  font-size: 24px;
  line-height: 34px;
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
  > a {
    margin-left: auto;
    text-align: right;
  }
`;
