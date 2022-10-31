import styled from 'styled-components';
export const Section = styled.section`
  margin-top: 60px;
  margin-bottom: 20px;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
`;

export const PageLocation = styled.div`
  li {
    font-size: 13px;
  }
  button[aria-current='true'] {
    background-color: #f48223;
    color: #fff;
    border-color: transparent;
  }

  .css-19xm0h7-MuiButtonBase-root-MuiPaginationItem-root {
    min-width: 27px;
    height: 27px;
  }

  .MuiPaginationItem-previousNext {
    svg {
      display: none;
    }

    &[aria-label='Go to previous page'] {
      &:after {
        content: 'Prev';
        display: inline-block;
        font-size: 13px;
      }
    }

    &[aria-label='Go to next page'] {
      &:after {
        content: 'Next';
        display: inline-block;
        font-size: 13px;
      }
    }
  }
`;

export const PageSize = styled.div`
  fieldset {
    display: inline-block;
    p {
      display: inline-block;
      input {
        display: none;

        &:checked + label {
          background-color: #f48223;
          color: #fff;
          border-color: transparent;
        }
      }
      label {
        display: inline-block;
        font-size: 14px;
        text-align: center;
        line-height: 27px;
        min-width: 32px;
        height: 27px;
        box-sizing: border-box;
        border: 1px solid rgba(0, 0, 0, 0.23);
        border-radius: 4px;
        margin: 0 3px;
        cursor: pointer;
      }
    }
  }
  > p {
    display: inline-block;
    padding: 0 10px;
    font-size: 13px;
  }
`;
