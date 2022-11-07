import styled from 'styled-components';

export const SubDesc = styled.div`
  padding: 0 16px 0px 16px;
  margin-bottom: 25px;
  color: #6a737c;
  font-size: 12px;

  > p {
    &:first-child {
      margin-bottom: 8px;
    }
    strong {
      font-weight: 600;
    }
  }
`;

export const NoResultBox = styled.div`
  padding: 24px;
  text-align: center;
  svg {
    margin-bottom: 15px;
    opacity: 0.3;
  }
`;

export const GroupText = styled.div`
  color: #232629;
  text-align: center;
  line-height: 20px;
  h5 {
    font-size: 15.4px;
    b {
      font-weight: bold;
    }
  }

  p {
    font-size: 13px;
    b {
      font-weight: bold;
    }
  }
`;
