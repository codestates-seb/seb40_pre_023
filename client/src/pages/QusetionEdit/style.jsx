import styled from 'styled-components';

export const EditPageContainer = styled.div`
  box-sizing: border-box;
  margin-left: 0px;
  padding-top: 47px;

  @media screen and (min-width: 641px) {
    margin-left: 164px;
  }
  > main {
    @media screen and (min-width: 1100px) {
      display: flex;
    }
  }
`;

export const EditContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 16px;
  padding-top: 20px;
  border-bottom: 1px solid #e3e6e8;

  > article {
    width: 100%;
    @media screen and (min-width: 1100px) {
      width: calc(100% - 36px);
    }
  }
`;

export const InputUnit = styled.div`
  width: 100%;
  margin-bottom: 18px;

  h3 {
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 5px;
  }

  .quill {
    max-height: 290px;
    .ql-container {
      height: 249px;
    }
  }
`;

export const TitleEditInput = styled.input`
  height: 32.6px;
  width: 100%;
  box-sizing: border-box;
  padding: 8px 9px;
  border: 1px solid hsl(210, 8%, 75%);
  border-radius: 2px;

  &:focus-visible {
    border: none;
    outline: 1px solid hsl(206, 90%, 69.5%);
    box-shadow: 0 0 0 4px #d7e5f2;
  }
`;

export const TagsInputGroup = styled.label`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
  min-height: 32.6px;
  width: 100%;
  padding: 8px 9px;
  box-sizing: border-box;
  border: 1px solid hsl(210, 8%, 75%);
  border-radius: 2px;
  padding-left: 6px;

  &.focused {
    border: none;
    outline: 1px solid hsl(206, 90%, 69.5%);
    box-shadow: 0 0 0 4px #d7e5f2;

    &.error {
      border: 1px solid #de4f54;
      outline: 1px solid #de4f54;
      box-shadow: 0 0 0 4px rgba(222, 79, 84, 0.2);
    }
  }

  & + small {
    margin-top: 6px;
    display: none;
    font-size: 12px;
    color: #de4f54;
  }

  &.error {
    border-color: #de4f54;

    & + small {
      display: block;
    }
  }

  input {
    flex-shrink: 1;
    display: inline-block;
    box-sizing: border-box;
    height: 100%;
    padding-left: 0;
    min-width: 250px;
    border: none;
    &:focus-visible {
      outline: none;
    }
    &::placeholder {
      color: hsl(210, 8%, 75%);
    }
  }
`;

export const EditBtn = styled.button`
  display: inline-block;
  padding: 9px;
  margin-top: 24px;
  font-size: 13px;
  background-color: #0a95ff;
  color: #fff;
  border-radius: 4px;
  white-space: nowrap;
  border: none;
  cursor: pointer;
  margin-right: 16px;

  &:hover {
    background-color: hsl(206, 100%, 40%);
  }

  &:disabled {
    opacity: 0.3;
  }
`;

export const CancelBtn = styled.p`
  display: inline-block;
  padding: 9px;
  font-size: 13px;
  color: hsl(206, 100%, 40%);
  border-radius: 4px;
  white-space: nowrap;
  cursor: pointer;
  background-color: unset;

  &:hover {
    background-color: rgb(0, 116, 204, 0.1);
  }
`;
