import styled from 'styled-components';



export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items:flex-start;
  margin-top: 0px;

  
`;


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--black-700);
  font-weight: 600;
  align-items:flex-start;
  
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items:flex-start;
  margin-bottom: 24px;
  font-size: 15px;
 
  
`;
export const Footer = styled.div`
  font-size: 13px;
  font-weight: 600;
  line-height: 17px;
  color: var(--black-400);
  margin-top:10px;
`;

export const GetTeams = styled.a`
  color: var(--blue-600);
  &:hover {
    color: var(--blue-400);
  }
`;