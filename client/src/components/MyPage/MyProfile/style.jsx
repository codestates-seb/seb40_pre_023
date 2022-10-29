import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 11em;
  padding-top: 4.5em;
  height: 1000px;
  box-sizing: border-box;
  padding: 1em;
  @media screen and (max-width: 980px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 640px) {
    box-sizing: border-box;
    margin-left: 0em;
  }
`;
export const LContent = styled.div`
  display: flex;
  flex: 1;
`;
export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  > .stat-title {
    font-size: 1.5em;
    padding-bottom: 0.3em;
  }
`;
export const StatContainer = styled.div`
  display: flex;
  padding: 1em;
  box-sizing: border-box;

  gap: 1em;
  border: 1px solid #d6d9dc;
  border-radius: 0.3em;
  flex-wrap: wrap;

  @media screen and (max-width: 980px) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
`;
export const StatDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
export const StatTop = styled.div`
  display: flex;
  flex: 1;
  gap: 1em;
  flex-shrink: 1;
  @media screen and (min-width: 981px) {
    padding-bottom: 0.5em;
  }
`;
export const StatBottom = styled.div`
  display: flex;
  flex: 1;
  gap: 1em;
  flex-shrink: 1;
`;

export const RContent = styled.div`
  flex: 3;
`;

export const StatNum = styled.p`
  font-size: 1.2em;
  padding-bottom: 0.2em;
  @media screen and (max-width: 640px) {
    font-size: 1em;
  }
`;

export const StatMsg = styled.p`
  font-size: 0.9em;
  color: #626a73;
  @media screen and (max-width: 640px) {
    font-size: 0.8em;
  }
`;
