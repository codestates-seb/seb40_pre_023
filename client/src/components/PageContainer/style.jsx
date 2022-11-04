import styled from 'styled-components';
export const Container = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  margin-left: 0px;
  padding-top: 47px;

  @media screen and (min-width: 641px) {
    margin-left: 164px;
  }

  @media screen and (min-width: 981px) {
    display: flex;
    justify-content: space-between;
  }
  > main {
    width: 100%;
    @media screen and (min-width: 981px) {
      padding-right: 16px;
    }
  }
`;
