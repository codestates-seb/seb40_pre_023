import styled from 'styled-components';

export const Container = styled.footer`
  padding: 16px;
  background-color: hsl(210, 8%, 15%);
  color: hsl(210, 8%, 75%);
  font-size: 11px;
  position: relative;
  z-index: 2;

  &.remove {
    display: none;
  }

  @media screen and (min-width: 641px) {
    padding: 24px;
    font-size: 13px;
  }

  @media screen and (min-width: 880px) {
    padding: 28px 12px;
    display: flex;
  }

  > a {
    display: inline-block;
  }

  svg {
    display: none;

    @media screen and (min-width: 641px) {
      display: block;
    }
  }
`;

export const Categories = styled.ul`
  @media screen and (min-width: 641px) {
    margin-top: 30px;
  }

  @media screen and (min-width: 817px) {
    display: inline-flex;
    width: calc(100% - 37px);
  }
`;
export const Categoriy = styled.li`
  padding: 0 12px 24px 0;

  @media screen and (min-width: 817px) {
    width: 100%;
    margin-left: 30px;
  }
  > p {
    font-weight: 800;
    margin-bottom: 8px;
    white-space: nowrap;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    column-gap: 12px;
    row-gap: 8px;
    color: hsl(210, 8%, 60%);
    font-weight: 400;

    @media screen and (min-width: 817px) {
      flex-direction: column;
    }

    li {
      cursor: pointer;
      white-space: nowrap;

      &:hover {
        color: hsl(210, 8%, 65%);
      }

      a {
        color: inherit;
      }
    }
  }
`;

export const SocialsAndCopy = styled.ul`
  font-size: 11px;
  color: hsl(210, 8%, 60%);
  margin-top: 24px;

  @media screen and (min-width: 641px) {
    font-size: 13px;
  }

  @media screen and (min-width: 880px) {
    margin-left: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    column-gap: 12px;
    row-gap: 8px;
    color: hsl(210, 8%, 60%);
    font-weight: 400;
    margin-bottom: 8px;

    li {
      cursor: pointer;

      &:hover {
        color: hsl(210, 8%, 65%);
      }
    }
  }
`;
