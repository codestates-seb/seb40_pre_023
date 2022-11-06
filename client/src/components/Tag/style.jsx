import styled from 'styled-components';

export const TagBlock = styled.p`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  height: 19px;
  font-size: 12px;
  padding: 2px 7px;
  margin: 0 !important;
  border-radius: 3px;
  background-color: hsl(205, 46%, 92%);
  color: #39739d !important;
  white-space: nowrap;
`;

export const DeleteBtn = styled.span`
  display: inline-block;
  border-radius: 3px;
  cursor: pointer;
  width: 14px;
  height: 14px;

  &:hover {
    background-color: hsl(205, 47%, 42%);
  }

  svg {
    fill: #39739d;

    &:hover {
      fill: #fff;
    }
  }
`;
