import styled from 'styled-components';

export const Section = styled.section`
  padding: 0 16px;

  @media screen and (min-width: 641px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h3 {
    margin-bottom: 12px;
    font-size: 15.4px;
    color: #232629;

    @media screen and (min-width: 641px) {
      margin-bottom: 0;
      margin-right: 16px;
      font-size: 17px;
      line-height: 20px;
    }
  }
`;

export const BtnGroup = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 641px) {
    gap: 16px;
  }
`;

export const FilterOptions = styled.div`
  display: inline-block;
  white-space: nowrap;
  border: 1px solid hsl(210, 8%, 65%);
  border-radius: 3px;

  p {
    display: inline-block;
    padding: 9.6px 8px;
    font-size: 12px;
    border-right: 1px solid hsl(210, 8%, 65%);
    color: #6a737c;
    cursor: pointer;

    &:hover {
      color: hsl(210, 8%, 35%);
      background-color: rgb(248, 249, 249);
    }

    span {
      padding: 0 4px;
      font-size: 11px;
      background-color: #0074cc;
      border-radius: 3px;
      color: #fff;
    }

    &:last-child {
      border-right: none;
    }

    &.disappear-mobile {
      display: none;
      @media screen and (min-width: 772px) {
        display: inline-block;
      }
    }

    &.toggle {
      position: relative;
      z-index: -1;
      padding-right: 14px;
      &:after {
        content: '';
        position: absolute;
        top: calc(50% - 2px);
        right: 4px;
        border-style: solid;
        border-width: 4px;
        border-top-width: 4px;
        border-bottom-width: 0;
        border-color: currentColor transparent;
        pointer-events: none;
      }
    }

    &.active {
      background-color: hsl(210, 8%, 90%);
      color: hsl(210, 8%, 25%);
    }
  }
`;
export const FilterCheck = styled.input`
  display: none;

  &:checked + p {
    background-color: hsl(205, 57%, 81%);
  }
`;
export const FilterBtn = styled.p`
  display: inline-block;
  padding: 9.1px 8px;
  font-size: 12px;
  box-sizing: border-box;
  border: 1px solid hsl(205, 41%, 63%);
  border-radius: 3px;
  color: hsl(205, 46%, 32%);
  background-color: #e1ecf4;
  white-space: nowrap;
  cursor: pointer;

  svg {
    vertical-align: baseline;
    margin-top: -0.3em;
    margin-bottom: -0.3em;
    fill: hsl(205, 47%, 42%);
  }

  &:checked {
    border: 1px solid red;
  }
`;
