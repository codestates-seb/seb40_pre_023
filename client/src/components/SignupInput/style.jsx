import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const DisplayName = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6px 0px;
  div {
    margin: 2px 0px;
    padding: 0px 2px;
  }
`;

export const Email = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6px 0px;
  div {
    margin: 2px 0px;
    padding: 0px 2px;
  }
`;

export const Password = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6px 0px;
  font: . 9rem 'Fira Sans', sans-serif;
  div {
    margin: 2px 0px;
    padding: 0px 2px;
  }
`;

export const InputPassword = styled.div`

  type: "password";
  id: "pass";
  name: "password";
  minlength: 8; 
  required;
`;

export const PasswordComment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  line-height: 15.7px;
  font-size: 12px;
  font-weight: 400;
  margin: 4px 0px;
  color: var(--black-500);
`;

export const CheckAndSubmit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div {
    margin: 10px 0px 5px 0px;
  }
`;
export const BlueButton = styled.button`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  border-radius: 3px;
  border: 0px;
  padding: 2px 9px;
  transition: all 0.4s ease 0s;
  font-size: 0.85rem;
  color: white;
  background-color: #379fef;
  width: 100%;
  height: 35px;
  cursor: pointer;
  &:hover {
    background-color: #0074cc;
  }
`;

export const DefaultInput = styled.input`
  width: 238px;
  min-width: 238px;
  height: 31px;
  min-height: 31px;
  border: 1px solid rgb(186, 191, 196);
  border-radius: 3px;
  padding-left: 10px;
  border-color: ${(props) => (props.error ? '#de4f54' : '')};
  box-shadow: ${(props) =>
    props.error ? '0 0 0 4px #f7e1e1, 0 0 0 4px #f7e1e1' : ''};
  &:focus {
    outline: none;
    border-color: ${(props) => (props.error ? '#de4f54' : '#6bbbf7')};
    border-width: 1px;
    box-shadow: ${(props) =>
      props.error
        ? '0 0 0 4px #f7e1e1, 0 0 0 4px #f7e1e1'
        : '0 0 0 4px #cce9fe, 0 0 0 4px #cce9fe'};
  }
  /* box-shadow: ;
   */
`;