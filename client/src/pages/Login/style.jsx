import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #f1f2f3;
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  width: 252px;
  height: 212px;
  padding: 24px;
  margin: 24px 0px;
  background-color: white;
  border-radius: 7px;
  box-shadow: rgb(0 0 0 / 5%) 0px 10px 24px, rgb(0 0 0 / 5%) 0px 20px 48px,
    rgb(0 0 0 / 10%) 0px 1px 4px;

  .error {
    color: #d0393e;
    font-size: 12px;
    visibility: none;
  }
  .msg-title {
    visibility: hidden;
    height: 12px;
  }
`;

export const InputLabel = styled.label`
  display: block;
  margin-bottom: 6px;
  font-size: 15px;
  font-weight: 600;
  display: flex;
  margin-right: auto;
`;

export const InputText = styled.input`
  width: 204px;
  min-width: 204px;
  height: 31px;
  min-height: 31px;
  border: 1px solid rgb(186, 191, 196);
  border-radius: 3px;
  padding-left: 10px;
  border-color: '#de4f54';
  box-shadow: '0 0 0 4px #f7e1e1, 0 0 0 4px #f7e1e1';
  &:focus {
    outline: none;
    border-color: '#de4f54';
    border-width: 1px;
    box-shadow: '0 0 0 4px #f7e1e1, 0 0 0 4px #f7e1e1';
  }
  /* box-shadow: ;
   */
`;

export const InputButton = styled.button`
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

export const SignUp = styled.p`
  color: rgb(35, 38, 41);
  display: flex;
  gap: 10px;
  font-size: 13px;
  a {
    color: #0e7bce;
    text-decoration: none;
    &:visited {
      color: #0e7bce;
      text-decoration: none;
    }
    &:hover {
      color: #379fef;
    }
  }
`;
