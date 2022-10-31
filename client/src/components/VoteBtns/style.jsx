import styled from 'styled-components';

export const VoteContainer = styled.div`
  width: 36px;
  flex-shrink: 0;
`;

export const Vote = styled.div`
  > button {
    width: 36px;
    height: 36px;
    background-color: unset;
    padding: 0;
    border: none;
    cursor: pointer;

    &:focus {
      outline: none;
    }

    svg {
      fill: #babfc3;
      pointer-events: none;
    }

    &.active {
      svg {
        fill: #f48223;
      }
    }
  }

  p {
    color: #6a737c;
    font-size: 21px;
    text-align: center;
    margin: 4px 0;
  }
`;
