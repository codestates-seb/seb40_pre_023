import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--black-700);
  font-weight: 600;

  > h2 {
    font-size: 27px;
    font-weight: 400;
    margin-bottom: 32px;
  }
`;

export const IconLine = styled.span`
  margin-bottom: 24px;
  font-weight: 400;

  > svg {
    fill: hsl(206, 100%, 52%);
    margin-right: 8px;
  }
`;

export const Footer = styled.div`
  font-size: 13px;
  font-weight: 400;
  line-height: 17px;
  color: #6a737c;
  > a {
    color: #0074cc;
    &:hover {
      color: hsl(206, 100%, 52%);
    }
  }
`;

export const GetTeams = styled.a`
  color: #0074cc;
  &:hover {
    hsl(206,100%,52%);
  }
`;
