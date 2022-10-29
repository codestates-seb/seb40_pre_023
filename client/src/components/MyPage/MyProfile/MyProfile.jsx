import {
  Container,
  LContent,
  RContent,
  Stats,
  StatNum,
  StatMsg,
  StatTop,
  StatBottom,
  StatContainer,
  StatDiv,
} from './style';
import React from 'react';

const MyProfile = () => {
  return (
    <Container>
      <LContent>
        <Stats>
          <div className="stat-title">Stats</div>
          <StatContainer>
            <StatTop>
              <StatDiv>
                <StatNum>1</StatNum>
                <StatMsg>reputation</StatMsg>
              </StatDiv>

              <StatDiv>
                <StatNum>0</StatNum>
                <StatMsg>reached</StatMsg>
              </StatDiv>
            </StatTop>
            <StatBottom>
              <StatDiv>
                <StatNum>0</StatNum>
                <StatMsg>answers</StatMsg>
              </StatDiv>

              <StatDiv>
                <StatNum>0</StatNum>
                <StatMsg>questions</StatMsg>
              </StatDiv>
            </StatBottom>
          </StatContainer>
        </Stats>
      </LContent>
      <RContent></RContent>
    </Container>
  );
};

export default MyProfile;
